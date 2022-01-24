// step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          <p>I'm making this by following the Gatsby Tutorial</p>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage