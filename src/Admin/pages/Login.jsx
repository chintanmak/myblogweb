import React, { Component } from 'react'
import bg1 from "../Assets/123.jpg";
import '../adminscss/_login.scss';

export default class Login extends Component {
    
  render() {
    return (
        <>
            <div className='login-full-container'>
                <div className='bgimg'>
                <img src={bg1} />
                </div>

                <div className='login-container'>

                    <div className='login-section'>
                    
                    <h1>LOGIN</h1>

                    <br />

                    <div className='input-section'>
                        <input type="text" placeholder='USERNAME'/>
                    </div>
                    
                    <br />
                    
                    <div className='input-section'>
                        <input type="password" placeholder='PASSWORD'/>
                    </div>

                    <br />

                    <button><a href="/">LOGIN</a></button>

                    </div>

                    <div className='login-section signup-section'>
                    
                    <h1>SIGN UP</h1>

                    <br />

                    <div className='input-section'>
                        <input type="text" placeholder='NAME'/>
                    </div>

                    <br />

                    <div className='input-section'>
                        <input type="text" placeholder='EMAIL'/>
                    </div>

                    <br />

                    <div className='input-section'>
                        <input type="password" placeholder='CREATE PASSWORD'/>
                    </div>

                    <br />

                    <button><a href="/admin">SUBMIT</a></button>

                    
                    </div>
                </div>
            </div>
        </>
    )
  }
}
