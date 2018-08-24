const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const braintree = require('braintree');
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());
const User = require('../user/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var config = require('../config');
const VerifyToken = require('./VerifyToken');


router.post('/register', function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    var hashedPostalCode = bcrypt.hashSync(req.body.postalCode, 8);
    var hashedCardNumber = bcrypt.hashSync(req.body.cardNumber, 8);
    var hashedCardExpiryDate = bcrypt.hashSync(req.body.cardExpiryDate, 8);
    var hashedCardCVV = bcrypt.hashSync(req.body.cardCVV, 8);

    User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            postalCode: hashedPostalCode,
            cardNumber: hashedCardNumber,
            cardExpiryDate: hashedCardExpiryDate,
            cardCVV: hashedCardCVV
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.")

            //create a token
            var token = jwt.sign({
                id: user._id
            }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({
                auth: true,
                token: token
            });
        });
});

router.get('/me', VerifyToken, function (req, res, next) {
    User.findById(req.userId, {
        // password: 0,
        // postalCode: 0,
        // cardNumber: 0,
        // cardExpiryDate: 0,
        // cardCVV: 0
    }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });
});

router.post('/login', function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
            auth: false,
            token: null
        });
        var token = jwt.sign({
            id: user._id
        }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({
            auth: true,
            token: token
        });
    });
});

router.get('/logout', function (req, res) {
    res.status(200).send({
        auth: false,
        token: null
    });
});

//BRAINTREE

router.post('/', function (req, res, next) {
    var gateway = braintree.connect({
        environment: braintree.Environment.Sandbox,
        // Use your own credentials from the sandbox Control Panel here
        merchantId: 'mhjjzn94dhchd3zh',
        publicKey: 'j66jhxqmhs3gtkhy',
        privateKey: '66a308ae81537160d832bb21d1e93c3b'
    });

    // Use the payment method nonce here
    var nonceFromTheClient = req.body.paymentMethodNonce;
    // Create a new transaction for $10
    var newTransaction = gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonceFromTheClient,
        options: {
            // This option requests the funds from the transaction
            // once it has been authorized successfully
            submitForSettlement: true
        }
    }, function (error, result) {
        if (result) {
            res.send(result);
        } else {
            res.status(500).send(error);
        }
    });
});


module.exports = router;