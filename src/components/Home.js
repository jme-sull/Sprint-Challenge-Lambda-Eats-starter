import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory()

  const routeToOrder = () => {
    history.push('/pizza')
  }

  return (
    <div className='home-wrapper'>
      {/* <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      /> */}
      <button
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        Pizza now!
      </button>
    </div>
  )
}