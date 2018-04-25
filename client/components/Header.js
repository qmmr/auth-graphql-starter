import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import UserQuery from '../queries/User'

import { Link } from 'react-router'

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    )
  }
}

export default graphql(UserQuery)(Header)
