import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const getMetadata = graphql`
    {
        site {
            siteMetadata {
                siteTitle: title
                siteDesc: description
                siteUrl
                siteImg: image
                tw: twitterUser
            }
        }
    }
`

const SEO = ({ localTitle, localDesc, localImg }) => {
    const response = useStaticQuery(getMetadata)
    const {
        siteTitle,
        siteDesc,
        siteUrl,
        siteImg,
        tw,
    } = response.site.siteMetadata

    return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
            {/* Basic SEO */}
            <title>
                {localTitle ? `${localTitle} | ${siteTitle}` : `${siteTitle}`}
            </title>
            <meta name="description" content={localDesc || siteDesc} />
            {/* Twitter card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={tw} />
            <meta
                name="twitter:title"
                content={`${localTitle} | ${siteTitle}`}
            />
            <meta name="twitter:description" content={localDesc || siteDesc} />
            <meta name="twitter:image" content={localImg || siteImg} />
            {/* Facebook Card */}
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content={`${localTitle} | ${siteTitle}`}
            />
            <meta property="og:description" content={localDesc || siteDesc} />
            <meta property="og:image" content={localImg || siteImg} />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="400" />
        </Helmet>
    )
}

export default SEO
