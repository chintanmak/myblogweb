import React, { Component } from 'react';
import '../adminscss/_newpost.scss';
import axios from "axios";

export default class Newpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  onSubmit = async () => {
    alert("Added successfully");
    const result = await axios.post(`http://localhost:4000/app/blogdata`, {
      title: this.state.title,
      content: this.state.content
      
    });
    console.log(result);
    if (result.status == 200) {
      // this.getData();
    }
  };

render() {
    return (
      <>
        <div className='newpost-container'>
            
            <h1>NEW POST</h1>
            <br />
            <div className="postinput">
            <p>Title: </p>
            <input type="text" 
              placeholder='Title here..'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value})}
            />
            </div>
            
            <br />

            <div className="postinput">
            <p>Content: </p>
            <input type="text" className='extra-space'
                            placeholder='content here..'
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value})}
            />
            </div>

            <br />

            <button onClick={this.onSubmit}>POST</button>

        </div>
      </>
    )
  }
}
