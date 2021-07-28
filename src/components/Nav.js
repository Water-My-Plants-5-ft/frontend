import React, { useState } from 'react'
import { reach } from 'yup'
import formSchemaPlants from '../validation/newPlant-formSchema.js'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Auth from './Auth'


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
            <button onClick={() => setDisabled(true)}>Login</button>
          </div>
        </h1>
      </nav>
      <Modal className='Modal' isOpen={disabled}>
        <Auth />
        <button onClick={() => setDisabled(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}