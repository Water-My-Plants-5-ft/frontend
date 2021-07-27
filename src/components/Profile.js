import React from 'react'

export default function Login(props) {
    const initialLoginValues = {
      username: '',
      password: '',
      phone: ''
      }
      const initialLoginErrors = {
        username: '',
        password: '',
        phone: ''
      }
    return(
      <div className = 'container'>
        <button id = 'show-login'></button>
      </div>
    )
}