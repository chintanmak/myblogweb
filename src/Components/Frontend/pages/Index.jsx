import React, { Component } from 'react'
import axios from "axios";

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
      <div>
    {
  this.state.data.map(item=>(
            <div className=''>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <br />
            </div>   
        ))
}
      </div>
    )
  }
}
