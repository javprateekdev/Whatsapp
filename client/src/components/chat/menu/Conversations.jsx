import React from 'react';
import {useEffect,useState,useContext} from 'react';
import {getUsers} from '../../../service/api.js';
import {Box,styled,Divider} from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider'; 


const Component=styled(Box)`
height:81vh,
overflow:overlay,
`
const StyledDivider=styled(Divider)`
margin:0 0 0 70px;
background-color:#e9edef;
opacity:0.6;
`
function Conversations({text}) {
    const[users,setUsers]=useState([]);
    const{account,socket,setActiveUsers}=useContext(AccountContext);

    useEffect(()=>{
      const fetchData=async()=>{
        let response=await getUsers();
        const filterData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
        setUsers(filterData);
      }
      fetchData();
    },[text]);
    
    useEffect(()=>{
      socket.current.emit('addUsers',account);
      socket.current.on("getUsers",users=>{
        setActiveUsers(users);

      })
    },[account])
  return (
    <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub && 
                        <>
                            <Conversation user={user} />
                            {
                                users.length !== (index + 1)  && <StyledDivider />
                            }
                        </>
                ))
            }
        </Component>
  )
}

export default Conversations;