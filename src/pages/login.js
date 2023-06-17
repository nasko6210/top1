import "../App.css"
import googleLogin from "../pictures/googleLogin.jpg"
import fbLogin from "../pictures/facebooklogin.jpg";
import {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router";
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

export function Login() {
const navigate=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {authState,setAuthState}=useContext(AuthContext);
 
    const login=()=>{
    axios.post("http://localhost:3001/auth/login",{username:email,password:password}).then((response)=>{
        if(response.data.error){
            alert(response.data.error)
        }else{
            localStorage.setItem("accessToken",response.data.token)
            setAuthState({username:response.data.username,id:response.data.id,status:true})
            navigate('/')
        }
    })
   }


    return (
        <div className="loginContainer" style={{marginLeft:"35%"}}>
            <div className="loginData">
            <div style={{textAlign:"center"}}>Вход</div>
                <input type="email" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Въведете имейл" />
                <input type="password" onChange={(event)=>{setPassword(event.target.value)}} placeholder="Въведете парола" />
                <button onClick={login}>Вход</button>
            </div>
            <div className="loginForgot" style={{marginTop:"70px"}}>

                <a href="" style={{marginLeft:"20px"}}>Забравена парола?</a>

                <label style={{marginRight:"20px",float:"right"}}>Запази ме логнат<input type="checkbox" checked="checked" /></label>
            </div>


            <img src={fbLogin} width="160px" height="30px" style={{
                float:"left",
                marginLeft:"20px",
                 marginTop:"30px",borderRadius: "10px" }} />
                 <img src={googleLogin} width="160px" height="30px"
                    style={{marginRight:"20px", marginTop:"30px",borderRadius:"10px",float:"right"}}
                 />
    

        </div>


    )
}