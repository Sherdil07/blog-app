import styled from "@emotion/styled";
import { useState } from "react";
import {Box, TextField ,Button ,Typography} from "@mui/material"

const Component= styled(Box)`
width:400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6) ;

`;

const LoginButton=styled(Button)`
text-transform:none;
background-color:#FB641B;
color:#fff;
height:48px;
border-radius:2px;


`;
const SignUpButton=styled(Button)`
text-transform:none;
background-color:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)


`;
const Text =styled(Typography)`

color:878787;
font-size:16px;
`


const Image=styled('img')({
    width:100 ,
    margin:'auto',
    display:"flex",
    padding:"50 px 0 0"
})

const Wrapper=styled(Box)`
padding:25px 35px;
display:flex;
display:1;
flex-direction:column;
&> div, &> button, &> p{
    margin-top:20px;
}



`

const signupInitialValues={
    name:'',
    username:'',
    password:""
}

const Login=()=>{
  const [account, toggleAccount]=useState("login");
  const [signup,setSignup]=useState(signupInitialValues);

  
  const toggleSignup=()=>{
    account==='signup'? toggleAccount('login'):toggleAccount('signup')
  }

  const onInputChange=(e)=>{
    setSignup({...signup,[e.target.name] : e.target.value})
  }




    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  return <Component> <Box>
<Image src={imageURL} alt="login" />
{account==='login'?
<Wrapper>
<TextField variant="standard" label="Enter username"/>
<TextField variant="standard" label="Enter password"/>
 <LoginButton variant="contained">Login</LoginButton>
 <Text style={{textAlign:'center'}}>OR</Text>
 <SignUpButton onClick={()=>{toggleSignup()}}>Create a New Account</SignUpButton>
 </Wrapper>
:
 <Wrapper>
<TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter name"/>
<TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter username"/>
<TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter Password"/>
 <SignUpButton >SignUp</SignUpButton>
 <Text style={{textAlign:'center'}}>OR</Text>
 <LoginButton variant="contained" onClick={()=>{toggleSignup()}}>Already have a Account</LoginButton>
 </Wrapper>}
 </Box>
  </Component>
}


export default Login;