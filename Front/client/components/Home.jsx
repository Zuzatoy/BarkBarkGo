import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'

export default function Home (props) {
  return (
    <div className='container'>
      <h1>Bark Bark! Go!</h1>
      <Link to="/signin">
        <Button>Sign In</Button>
      </Link>
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </div>
  )
}