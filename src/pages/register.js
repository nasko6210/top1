import "../App.css"
import { useNavigate } from "react-router";
import { useState } from 'react';
import googleLogin from "../pictures/googleLogin.jpg"
import fbLogin from "../pictures/facebooklogin.jpg";
import axios from "axios";


export function Register() {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const registration=()=>{
        axios.post("http://localhost:3001/auth",{username:email,password:password}).then(()=>{
            console.log("registered")
            navigate("/login")
        })
    }
    
    return (
       <div className="loginContainer" style={{ marginLeft: "35%" }}>
       
            <div className="loginData">
                    <div style={{textAlign:"center"}}>Регистрация</div>
                <input type="email" onChange={(event) => { setEmail(event.target.value) }} placeholder="Въведете имейл" />
                <input type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="Въведете парола" />
                <button onClick={registration}>Регистрирай се</button>

            </div>
            


            <img src={fbLogin} width="160px" height="30px" style={{
                float: "left",
                marginLeft: "20px",
                marginTop: "100px", borderRadius: "10px"
            }} />
            <img src={googleLogin} width="160px" height="30px"
                style={{ marginRight: "20px", marginTop: "100px", borderRadius: "10px", float: "right" }}
            />
       


        </div>


    )
}