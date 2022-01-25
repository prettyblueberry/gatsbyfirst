// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo';

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="About Me" />
export default AboutPage