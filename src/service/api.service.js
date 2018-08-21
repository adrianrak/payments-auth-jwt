import axios from 'axios';

export default {
    queryUserData() {
        const url = `http://localhost:4000/api/auth/me`;
        return axios.get(`${url}`);
    },
    signUpUser(data) {
        const url = `http://localhost:4000/api/auth/register`;
        return axios.post(`${url}`, data);
    },
    signInUser(data){
        const url = `http://localhost:4000/api/auth/login`;
        return axios.post(`${url}`, data);
    },
    signOutUser(){
        const url = `http://localhost:4000/api/auth/logout`;
        return axios.get(`${url}`);
    },
    updateUserData(data){
        const url = `http://localhost:4000/api/auth/me`;
        return axios.put(`${url}`, data);
    },
    deleteUser(data){
        const url = `http://localhost:4000/api/auth/me`;
        return axios.put(`${url}`, data);
    }
};