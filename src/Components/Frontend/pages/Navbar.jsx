import React, { Component } from 'react';
import '../frontendscss/_navbar.scss';
import logo from '../../../Admin/Assets/blogweblogo.png';
import { Outlet } from 'react-router';

export default class Navbar extends Component {
 
  render() {
    return (
      <>
        <div className='navbarsection'>
            
            <div className='logosection'>
                <a href='/'><img src={logo} /></a>
                </div>

            <div className='menus'>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </div>
            
            </div>
            <Outlet />
      </>
    )
  }
}
