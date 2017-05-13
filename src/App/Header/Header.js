import React from 'react'
import Snoo from '../Snoo'
import './Header.css'

export default function Header(props) {
  return (
    <div className='top-nav'>
      <div className='header'>
        <Snoo width={50} height={50}/>
        <h1 className='header-title'>Photoshop Battles</h1>
      </div>
    </div>
  )
}
