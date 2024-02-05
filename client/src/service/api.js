import axios from 'axios'
import { API_NOTIFICATION_MESSSAGES } from '../constants/config.js';
const API_URL='http://localhost:8000';

const axiosInstance =axios.create({
baseURL:API_URL,
timeout:10000,
headers:{
    "Content-Type":'application/json'
}
})

axiosInstance.interceptors.request.use(
    function (config){
        return config 
    },
    function(error){
        Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use({
    function(response){
return processResponse(response)
    },
    function(error){
        return Promise.reject(processError(error))
    }
})

const processResponse=(response)=>{
if(response?.status===200)
{return({isSucess:true, data:response.data })}
else{
    return{

        isFailure:true,
        status:response?.status,
        msg: response?.msg
        ,code:response?.code   // so that my code dont break
    }
}
}

const processError=(error)=>{
if (error.response){
console.log("ERROR IN RESPONSE",error.toJSON());
return {
    isError: true,
    msg:API_NOTIFICATION_MESSSAGES.responseFailure,
    code:error.response.status
}
}else if(error.request){
    console.log("ERROR IN REQUEST",error.toJSON());
    return {
        isError: true,
        msg:API_NOTIFICATION_MESSSAGES.requestFailure,
        code:""
    }
}else{
    console.log("ERROR IN RESPONSE",error.toJSON());
return {
    isError: true,
    msg:API_NOTIFICATION_MESSSAGES.responseFailure,
    code:""
}
}
}