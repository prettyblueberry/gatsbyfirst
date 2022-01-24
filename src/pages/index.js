// step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          <p>I'm making this by following the Gatsby Tutorial</p>
          <StaticImage
              alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
              src="../images/icon.png"
          />
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage