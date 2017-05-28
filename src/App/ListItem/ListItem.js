import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './ListItem.css'

export class ListItem extends PureComponent {
  componentDidMount(){
    //fetch the comments
  }

  render() {
    const { title, thumbnail, linkTo } = this.props

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
}

export default connect()(ListItem)
