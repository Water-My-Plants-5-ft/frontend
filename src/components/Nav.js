import React, { useState } from 'react'
import { reach } from 'yup'
import formSchemaPlants from '../validation/newPlant-formSchema.js'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


export default function Nav(props) {
  const {
    disabled,
    setDisabled
  } = props

  const validate = (name, value) => {
    reach(formSchemaPlants, name)
      .validate(value)
      .then(() => setNewPlantFormErrors({ ...newPlantFormErrors, [name]: '' }))
      .catch(err => setNewPlantFormErrors({ ...newPlantFormErrors, [name]: err.errors[0] }))
  }

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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU50X1UOeDaphmUyD6T8ROKs-HjeirpOoapiWbC9cLAqewFy1gthrgUTB9E7nKjRwOVk&usqp=CAU" alt="Avatar" class="avatar" />
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