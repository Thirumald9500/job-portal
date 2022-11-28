import axios from "axios";

const main_url ="http://192.168.59.11:3001/";

const login_url="login";

const welcome_url = "welcome"

axios.interceptors.request.use(
    
    config =>{
        config.headers.auth_token = Get_token();
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)


const Login_post = (data)=>{
    return axios.post(main_url+login_url,data)
}

const Welcome_post = (data) => {
    return axios.get(main_url+welcome_url)
}

const Get_token = () => {
    return localStorage.getItem('token')
}

export {Login_post,Welcome_post};