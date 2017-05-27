import React from 'react'
import { Link } from 'react-router-dom'

import './ListItem.css'

export default function ListItem(props) {
  const { title, thumbnail, linkTo } = props

  if (!thumbnail || thumbnail === 'self') return null

  return (
    <li>
      <Link to={linkTo} className='list-item'>
        <img src={thumbnail} alt='thumbnail' />
        <h2>{title}</h2>
      </Link>
    </li>
  )
}
