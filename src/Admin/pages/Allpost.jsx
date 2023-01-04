import React, { Component } from 'react';
import '../adminscss/_allpost.scss';
import axios from "axios";

export default class Allpost extends Component {
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

  onDelete = async (del) => {
    alert(del);
    const result = await axios.post(
      `http://localhost:4000/app/delete/${del}`
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
            <h1>ALL POST</h1>
            <br />
            {
  this.state.data.map(item=>(
            <div className='post-grp'>
            <p>{item.title}</p>
            <button onClick={() => this.onDelete(item.title)} >Delete</button>
            </div>   
        ))
}
            
        </div>
      </>
    )
  }
}
