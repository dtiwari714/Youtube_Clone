import axios from 'axios';

const api=axios.create({ baseURL: `http://localhost:5500/` });

api.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const login = (authData) => api.post("/user/login", authData);