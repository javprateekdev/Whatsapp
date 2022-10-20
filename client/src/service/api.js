import axios from 'axios';
const url='http://localhost:8000';

export const addUser=async(data)=>{
    try{
        await axios.post(`${url}/add`,data);

    }catch(error){
        console.log('Error while addUser API',error.message);
    }
}

export const getUsers=async(request,response)=>{
    try{
        let response=await axios.get(`${url}/users`);
        return response.data;
    }catch(error){
        console.log('Error whilecalling getUsers api',error.message);
    }
}

export const setConversation= async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log('Error while calling setConversation api',error.message);
    }
}