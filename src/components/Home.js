import React from 'react'
import './Home.css'
import { redirect, Link } from 'react-router-dom'

export const Home = () => {
  const handleMenu = () => {
    redirect('/login')
  }
  return (
    <div className="center">
        <h1>Welcome To Food's Kitchen</h1>
        <button className='gomenu' onClick={handleMenu}>
          <Link to={'/menu'} className='link'>Go To Menu</Link>
        </button>
    </div>
  )
}

export default Home