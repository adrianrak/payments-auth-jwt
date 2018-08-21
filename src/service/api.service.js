import axios from 'axios';

export default {
    queryUserData() {
        const url = `http://localhost:3000/api/auth/me`;
        return axios.get(`${url}`);
    },
    signUpUser(data) {
        const url = `http://localhost:3000/api/auth/register`;
        return axios.post(`${url}`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    signInUser(data){
        const url = `http://localhost:3000/api/auth/login`;
        return axios.post(`${url}`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    signOutUser(){
        const url = `http://localhost:3000/api/auth/logout`;
        return axios.get(`${url}`);
    },
    updateUserData(data){
        const url = `http://localhost:3000/api/auth/me`;
        return axios.put(`${url}`, data, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
    },
    deleteUser(data){
        const url = `http://localhost:3000/api/auth/me`;
        return axios.put(`${url}`, data);
    }
};