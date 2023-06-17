import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./pages/page1";

import "./App.css"
import { Navbar } from "./pages/navbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./helpers/AuthContext";
import  axios  from "axios";
import { Poster } from "./posters/poster";
import { AddPoster } from "./pages/addPoster";
import {Add} from "./pages/add"

function App() {
  const [authState, setAuthState] = useState({
    username:"",
    id:0,
    status:false,
  });
  useEffect(() => {
    axios.get("http://localhost:3001/auth/auth",{headers:{
      accessToken:localStorage.getItem("accessToken")
    }}).then((response) => {
      if (response.data.error) {
        setAuthState({...authState,status:false})
      } else {
        setAuthState({
          username:response.data.username,
          id:response.data.id,
          
          status:true
        })
      }
    })

  }, [])
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/poster" element={<Poster />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add/" element={<Add/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
