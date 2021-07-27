import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


export default function Nav(props) {
  const {
    disabled,
    setDisabled
  } = props

  return (
    <div className='Login'>
      <nav>
        <h1 className='header'>Water My Plants
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/myplants'>Plants</Link>
            <Link id='sign-up' to='/sign-up'>Sign Up</Link>
            <button onClick={() => setDisabled(true)}>Login</button>
          </div>
        </h1>
      </nav>
      <Modal className='Modal' isOpen={disabled}>
        <div className="randomname">
          <img src="https://www.gardeningknowhow.com/wp-content/uploads/2011/07/plant.jpg" alt="Avatar" class="avatar" />
        </div>
        <label>Username&nbsp;
          <input
            name='username'
            type='text'
            id='nickname-input'
          />
        </label>
        <label>Password&nbsp;
          <input
            name='password'
            type='text'
            id='nickname-input'
          />
        </label>
        <button onClick={() => setDisabled(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}