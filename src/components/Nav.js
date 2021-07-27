import React, { useState } from 'react'
import Modal from 'react-modal';


export default function Nav(props) {
    const {
        disabled,
        setDisabled
      } = props


    return (
        <div className = 'Login'>
        <Modal isOpen={disabled}>
            <h2>Modal Title</h2>
            <p>Modal Body</p>    
          <button onClick={() => setDisabled(false)}>Close Modal</button>
        </Modal>
      </div>
    );
}