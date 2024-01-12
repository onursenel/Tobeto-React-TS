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
    if(error.data.status == 409){
        alert(error.data.message);
    }
    if(error.data.type ="ValidationFailed"){
        error.data.message.forEach((message:any) => alert(message))
    }


    console.log(error);
});

export default axiosInstance;

