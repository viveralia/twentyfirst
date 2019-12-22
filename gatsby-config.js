require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: 'Twenty First',
        description: 'A blazing fast modern blog theme',
        headline: '⚡️Blogging for the 21st century⚡️',
        siteUrl: 'https://21st.netlify.com',
        twitterUser: '@viveralia',
        image:
            'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://21st.netlify.com',
                sitemap: 'https://21st.netlify.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
}
