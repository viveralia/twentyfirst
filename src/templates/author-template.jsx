import React from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Article from '../components/Articles/Article'

export const query = graphql`
    query($slug: String) {
        posts: allContentfulBlogPost(
            filter: { author: { slug: { eq: $slug } } }
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
                        slug
                        name
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

const authorTemplate = props => {
    const { name, avatar } = props.pageContext
    const posts = props.data.posts.edges

    return (
        <Layout>
            <StyledArticles>
                <div className="flex">
                    <div>
                        <h1>{name}</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <img
                        src={avatar.fixed.src}
                        alt={avatar.title}
                        className="avatar"
                    />
                </div>
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
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        .avatar {
            width: 60px;
            height: 60px;
            display: block;
            border-radius: 50%;
        }
    }
    h1 {
        font-size: 1.725rem;
        margin-bottom: 0.25rem;
    }
    p {
        color: var(--grey);
    }
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
    @media (min-width: 768px) {
        padding: 2.5rem 4vw;
        .flex {
            margin-bottom: 3rem;
            .avatar {
                width: 100px;
                height: 100px;
            }
        }
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

export default authorTemplate
