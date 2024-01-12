import axios from "axios";
import { error } from "console";



const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/"
});

axiosInstance.interceptors.request.use((config)=> {
    console.log("istek atılıyor")
    
    config.headers.Authorization = "MyToken";
    config.headers["Accept-Language"] = "tr";

    return config;
});

axiosInstance.interceptors.response.use ((response)=> {
    console.log("cevap geldi")



    return response;
},(error)=>{
    console.log(error);
});

export default axiosInstance;

