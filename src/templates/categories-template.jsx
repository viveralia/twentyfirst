import React from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Article from '../components/Articles/Article'

export const query = graphql`
    query($slug: String) {
        posts: allContentfulBlogPost(
            filter: { category: { slug: { eq: $slug } } }
            sort: { fields: updatedAt, order: DESC }
        ) {
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

const categoriesTemplate = props => {
    const { name } = props.pageContext
    const posts = props.data.posts.edges

    return (
        <Layout>
            <StyledArticles>
                <h1>{name}</h1>
                <ul>
                    {posts.map(post => (
                        <Article key={post.node.id} article={post.node} />
                    ))}
                </ul>
            </StyledArticles>
        </Layout>
    )
}

const StyledArticles = styled.section`
    h1 {
        font-size: 1.725rem;
        margin-bottom: 2rem;
    }
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
    @media (min-width: 768px) {
        padding: 2.5rem 4vw;
        h1 {
            font-size: 2.5rem;
        }
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

export default categoriesTemplate
