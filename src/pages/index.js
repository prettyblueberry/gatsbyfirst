// step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// step 2: Define your component
const IndexPage = () => {
  return (
      <main>
        <h1>Welcome!</h1>
          <Link to="/about">About</Link>
        <p>I'm making this by following the Gatsby Tutorial</p>
      </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage