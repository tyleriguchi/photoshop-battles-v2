import React from 'react'
import './ListItem.css'

export default function ListItem(props) {
  const { title, thumbnail } = props

  if (thumbnail === 'self') return null

  return (
    <li className='list-item'>
      <a href='#'>
        <img src={thumbnail} alt='thumbnail' />
        <h2>{title}</h2>
      </a>
    </li>
  )
}
