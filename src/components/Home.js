import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  

  const history = useHistory()

  const routeToOrder = () => {
    history.push('/pizza')
  }

 

  return (
    <div>
     
      <button
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        Pizza now!
      </button>
    </div>
  )
}