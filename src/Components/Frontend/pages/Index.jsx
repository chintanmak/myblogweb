import React, { Component } from 'react';
import axios from "axios";
import '../frontendscss/_index.scss';
import logo from '../../../Admin/Assets/logo.png';
import bg from '../../../Admin/Assets/background.jpg'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
      title: "",
      content: ""
    }
    
  }

  getData = async () => {
    try {
      const data = await axios.get("http://localhost:4000/app/get-all-content");
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      title: "",
      content: ""

    });
  };
  componentDidMount() {  
    this.getData();
  }
  render() {
    return (
      <>
      <div className='index-page'>
      <div className='navbarsection'>
      
        <div className='logosection'>
          <img src={logo} />
        </div>

        <div className='menus'>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
        </div>
        
      </div>

      <div className='contentsection'>


    {
  this.state.data.map(item=>(
            <div className='mainsection'>
            <p className='maintitle'>{item.title}</p>
            <p className='maincontent'>{item.content}</p>
            <br />
            <br />
            <br />
            
            </div>   
        ))
}
      </div>
      </div>
      </>
    )
  }
}
