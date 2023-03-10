import React, { Component, useState } from 'react';
import bg1 from "../Assets/pcbg.jpg";
import logo from "../Assets/blogweblogo.png";
import '../adminscss/_login.scss';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = ()=> {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[id,setid]=useState("");
    
    const redirect = useNavigate()

    const onSubmit =async()=>{
        console.log(email,password)
       
            try {
              const data = await axios.get(`http://localhost:4000/app/get-data/${email}/${password}`);
              console.log(data.data.data.id);
              
              // var jwttoken = jwt.sign(data.data.data, "hello")
              
              if(data.data.status==200){
                redirect(`/Dashboard/newpost`);  
              }else{
                alert("Invalid Credentials")
              }

              
            } catch (err) {
              console.log(err);
            }
          
    } 

   

    return (
        <>
            <div className='login-full-container'>
            <div className='login-logo'>
              <img src={logo} />
            </div>
                <div className='bgimg'>
                <img src={bg1} />
                </div>

                <div className='login-container'>

                    <div className='login-section'>
                    
                    <h1>LOGIN</h1>

                    <br />

                    <div className='input-section'>
                        <p>Username: </p>
                        <input 
                        type="text" 
                        value={email}
                        onChange={(e)=> setemail(e.target.value)}
                        />
                    </div>
                    
                    <br />
                    
                    <div className='input-section'>
                      <p>Password: </p>
                        <input 
                        type="password" 
                        value={password}
                        onChange={(e)=> setpassword(e.target.value)}
                        />
                    </div>

                    <br />

                    <button onClick={onSubmit}>LOGIN</button>

                    </div>

                </div>
            </div>
        </>
    )
  
}

export default Login;
