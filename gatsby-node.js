const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
        {
            posts: allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
            categories: allContentfulCategory {
                edges {
                    node {
                        slug
                        name
                    }
                }
            }
            authors: allContentfulAuthor {
                edges {
                    node {
                        slug
                        name
                        avatar {
                            title
                            fixed(width: 600, height: 600) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)
    data.posts.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve('./src/templates/post-template.jsx'),
            context: {
                slug: node.slug,
            },
        })
    })
    data.categories.edges.forEach(({ node }) => {
        createPage({
            path: `/category/${node.slug}`,
            component: path.resolve('./src/templates/categories-template.jsx'),
            context: {
                slug: node.slug,
                name: node.name,
            },
        })
    })
    data.authors.edges.forEach(({ node }) => {
        createPage({
            path: `/author/${node.slug}`,
            component: path.resolve('./src/templates/author-template.jsx'),
            context: {
                slug: node.slug,
                name: node.name,
                avatar: node.avatar,
            },
        })
    })
}
