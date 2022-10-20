import React from 'react';
import {Search as SearchIcon} from '@mui/icons-material'
import { Box,InputBase,styled } from '@mui/material';
const Component=styled(Box)`
background:#fff;
height:45px;
border-bottom:1px solid #F2F2F2
display:flex;
align-items:center;
`
const Wrapper=styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:5px 2px;
width:100%;
border-radius:10px;
`
const Icon =styled(Box)`
position:absolute;
height:100%;
padding:10px ;
color:#919191;
`
const InputField=styled(InputBase)`
width:100%;
padding-left:70px;
height:45px;
font-size:14px;

`

function Search({setText}) {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon 
                fontSize="small"/>
            </Icon>
            <InputField placeholder='Search or start New Chat'
            onChange={(e)=>setText(e.target.value)} />
        </Wrapper>

    </Component>
  )
}

export default Search