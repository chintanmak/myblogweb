import React, { Component } from 'react';
import axios from "axios";
import bg1 from "../Assets/123.jpg";
import '../adminscss/_login.scss';


export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          password: ""
        };
      }

      onSubmit = async () => {
        alert("Added successfully");
        const result = await axios.post(`http://localhost:4000/app/signup`, {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
          
        });
        console.log(result);
        if (result.status == 200) {
          // this.getData();
        }
      };
    
  render() {
    return (
      <>
         <div className='login-full-container'>
                <div className='bgimg'>
                <img src={bg1} />
                </div>

                <div className='login-container'>

                    <div className='login-section signup-section'>
                    
                    <h1>SIGN UP</h1>

                    <br />

                    <div className='input-section'>
                        <input type="text" placeholder='NAME'
                               value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>

                    <br />

                    <div className='input-section'>
                        <input type="text" placeholder='EMAIL'
                            value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>

                    <br />

                    <div className='input-section'>
                        <input type="password" placeholder='CREATE PASSWORD'
                            value={this.state.phone}
                        onChange={(e) => this.setState({ password: e.target.value})}
                        />
                    </div>

                    <br />

                    <button onClick={this.onSubmit}>SUBMIT</button>

                    
                    </div>
                </div>
            </div>
        </>

    )
}
}

