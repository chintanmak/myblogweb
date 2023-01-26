import React, { Component } from 'react';
import { Outlet } from 'react-router';
import '../adminscss/_dashboard.scss';
import logo from '../Assets/blogweblogo.png';

export default class Dashboard extends Component {
  render() {
    return (
        <>
            <div className='dashboard-container'>
                <div className='navbar-container'>
                    <img src={logo} />
                    
                    <div className='admin-main-menu'>
                    <a href='/Dashboard/newpost' ><h2>New post</h2></a>
                    <a href='/Dashboard/allpost' ><h2>All posts</h2></a>
                    </div>
                    <div className='admin-logout'>
                    <a href='/Dashboard/accounts'><h2>Accounts</h2></a>
                    <a href='/admin'><h2>Logout</h2></a>
                    </div>
                    
                </div>

                <div className='main-screen-container'>
                    <Outlet />
                </div>
            </div>
        </>
        )
  }
}
