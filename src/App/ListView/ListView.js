import React, { Component } from 'react'
import PropTypes from 'prop-types'

import request from 'axios'

export class ListView extends Component {
  componentDidMount() {
    request(`https://www.reddit.com/r/photoshopbattles.json`).then( (res) => {
      console.log('res', res)
    })
  }

  render() {
    return (
      <div>
        'stuff'
      </div>
    )
  }
}

export default ListView
