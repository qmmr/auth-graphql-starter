import gql from 'graphql-tag'

export const User = gql`
  {
    user {
      id
      email
    }
  }
`

export default User
