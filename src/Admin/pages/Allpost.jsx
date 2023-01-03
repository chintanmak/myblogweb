import React, { Component } from 'react';
import '../adminscss/_allpost.scss';

export default class Allpost extends Component {
  render() {
    return (
      <>
        <div className='allpost-container'>
            <h1>ALL POST</h1>
            <br />

            <div className='post-grp'>
            <p>Post Title 1</p>
            <button>Delete</button>
            </div>
            <br />

            <div className='post-grp'>
            <p>Post Title 2</p>
            <button>Delete</button>
            </div>
            <br />

            <div className='post-grp'>
            <p>Post Title 3</p>
            <button>Delete</button>
            </div>
            <br />
            
        </div>
      </>
    )
  }
}
