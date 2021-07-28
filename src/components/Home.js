import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  const routeToOrderForm = () => {
    history.push('/login')
  }

  return (
    <div className='home-wrapper'>
      <div className='home-plants-image'>
        <div>
          <h2>
            Watering your plants
          </h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          </p>
          <button>
            MyPlants
          </button>
        </div>
      </div>
    </div>
  )
}