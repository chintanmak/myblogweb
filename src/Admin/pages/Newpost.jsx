import React, { Component } from 'react';
import '../adminscss/_newpost.scss';

export default class Newpost extends Component {
  render() {
    return (
      <>
        <div className='newpost-container'>
            
            <h1>NEW POST</h1>
            <br />
            <div className="postinput">
            <p>Title: </p>
            <input type="text" />
            </div>
            
            <br />

            <div className="postinput">
            <p>Content: </p>
            <input type="text" className='extra-space'/>
            </div>

            <br />

            <button>POST</button>

        </div>
      </>
    )
  }
}
