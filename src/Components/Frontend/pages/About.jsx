import React, { Component } from 'react';
import '../frontendscss/_about.scss';
import ad from '../../../Admin/Assets/ads.jpg';

export default class About extends Component {
 
  render() {
    return (
      <>
        <div className='about-container'>
          <p>
            Hi this is just a basic some personal blog website 
          </p>
        <img src={ad} />
        </div>
      </>
    )
  }
}
