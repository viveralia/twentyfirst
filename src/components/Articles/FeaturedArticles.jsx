import React from 'react'
import styled from 'styled-components'
import Article from './Article'
import { useStaticQuery, graphql } from 'gatsby'

const getAllPosts = graphql`
    {
        posts: allContentfulBlogPost(sort: { fields: updatedAt, order: DESC }) {
            edges {
                node {
                    id: contentful_id
                    slug
                    title
                    updatedAt(formatString: "MMMM Do, YYYY")
                    excerpt {
                        excerpt
                    }
                    coverImage {
                        title
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    category {
                        name
                        slug
                    }
                    author {
                        slug
                        name
                        avatar {
                            title
                            fixed(width: 28, height: 28) {
                                ...GatsbyContentfulFixed_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`

const Articles = () => {
    const response = useStaticQuery(getAllPosts)
    const posts = response.posts.edges

    return (
        <StyledArticles>
            <ul>
                {posts.map(post => (
                    <Article key={post.node.id} article={post.node} />
                ))}
            </ul>
        </StyledArticles>
    )
}

const StyledArticles = styled.section`
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
    @media (min-width: 768px) {
        padding: 4rem 4vw;
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 992px) {
        ul {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`

export default Articles
