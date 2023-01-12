import React, { Component } from 'react';
import '../adminscss/_allpost.scss';
import axios from "axios";

export default class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
      name: "",
      email: "",
      password: ""
    }
    
  }

  getData = async () => {
    try {
      const data = await axios.get("http://localhost:4000/app/get-all-data");
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      name: "",
      email: "",
      password: ""

    });
  };

  onDelete = async (del) => {
    alert(del);
    const result = await axios.post(
      `http://localhost:4000/app/deleteaccount/${del}`
    );
    console.log(result);
  };
  componentDidMount() {  
    this.getData();
  }


  render() {
    return (
      <>
        <div className='allpost-container'>
            <h1>ALL ACCOUNTS</h1>
            <br />
            {
  this.state.data.map(item=>(
            <div className='post-grp'>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.password}</p>
            <button onClick={() => this.onDelete(item.name)} >Delete</button>
            </div>   
        ))
}
            
        </div>
      </>
    )
  }
}
