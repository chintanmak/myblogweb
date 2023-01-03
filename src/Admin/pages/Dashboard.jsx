import React, { Component } from 'react';
import { Outlet } from 'react-router';
import '../adminscss/_dashboard.scss';
import logo from '../Assets/logo.png';

export default class Dashboard extends Component {
  render() {
    return (
        <>
            <div className='dashboard-container'>
                <div className='navbar-container'>
                    <img src={logo} />

                    <a href='/newpost' ><h2>New post</h2></a>
                    <a href='/allpost' ><h2>All posts</h2></a>
                    
                </div>

                <div className='main-screen-container'>
                    <Outlet />
                </div>
            </div>
        </>
        )
  }
}
