import React from 'react'
import Layout from '../components/Layout/Layout'
import FeaturedArticles from '../components/Articles/FeaturedArticles'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

export const query = graphql`
    {
        site {
            siteMetadata {
                description
                headline
            }
        }
    }
`

const index = ({ data }) => {
    const { description, headline } = data.site.siteMetadata
    return (
        <Layout headline={headline} subHeadline={description}>
            <SEO
                localTitle={description}
                localDesc="Do you want to provide your customers with the best UX and most modern way of blogging? Then, you should click here"
            />
            <FeaturedArticles />
        </Layout>
    )
}

export default index
