import React from 'react'
import { Link } from 'react-router-dom'
import Snoo from '../Snoo'
import './Header.css'

export default function Header(props) {
  return (
    <div className='top-nav'>
      <div className='header'>
          <Snoo width={50} height={50}/>
          <Link to='/'>
            <h1 className='header-title'>Photoshop Battles</h1>
          </Link>
      </div>
    </div>
  )
}
