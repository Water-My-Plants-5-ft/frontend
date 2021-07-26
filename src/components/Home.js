import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  const routeToOrderForm = () => {
    history.push('/login')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='homerlisapizza-image'
        src='https://images.unsplash.com/photo-1551893665-f843f600794e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        alt="Succulents and Plants in Pots ready to be Watered"
      />
      <button
        onClick={routeToOrderForm}
        className='home-login'
      >
        Login now!
      </button>
    </div>
  )
}