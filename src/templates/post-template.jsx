import React from 'react'
import Layout from '../components/Layout/Layout'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import SEO from '../components/SEO'

export const query = graphql`
    query($slug: String) {
        post: contentfulBlogPost(slug: { eq: $slug }) {
            title
            excerpt {
                excerpt
            }
            coverImage {
                title
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
                fixed(width: 600, height: 400) {
                    src
                }
            }
            content {
                json
            }
        }
    }
`

const postTemplate = ({ data }) => {
    const {
        title,
        excerpt,
        coverImage,
        content: { json },
    } = data.post
    const options = {
        renderNode: {
            'embedded-asset-block': node => (
                <div className="embeddedImage">
                    <img
                        src={node.data.target.fields.file['en-US'].url}
                        alt={node.data.target.fields.title['en-US'] || title}
                    />
                    <small>
                        {`Image provided by ${
                            node.data.target.fields.description['en-US']
                        }`}
                    </small>
                </div>
            ),
        },
    }
    return (
        <Layout>
            <SEO
                localTitle={title}
                localDesc={excerpt.excerpt}
                localImg={`https:${coverImage.fixed.src}`}
            />
            <StyledPost>
                <Image
                    fluid={coverImage.fluid}
                    alt={coverImage.title || title}
                />
                <h1>{title}</h1>
                <div className="content">
                    {documentToReactComponents(json, options)}
                </div>
            </StyledPost>
        </Layout>
    )
}

const StyledPost = styled.article`
    h1 {
        font-size: 1.75rem;
        margin-top: 2.5rem;
    }
    .content {
        margin: 2rem 0;
        a {
            color: var(--action);
        }
        p {
            margin-bottom: 2rem;
            line-height: 1.5;
            font-size: 1.125rem;
            color: var(--grey);
            :last-child {
                margin: 0;
            }
        }
        h2 {
            margin-bottom: 2rem;
        }
        ul {
            padding-left: 1.25rem;
            margin-bottom: 2rem;
        }
        .embeddedImage {
            margin-bottom: 2rem;
            img {
                width: 100%;
            }
            small {
                display: block;
                text-align: center;
                margin-top: 0.5rem;
            }
        }
    }
    @media (min-width: 768px) {
        width: 80%;
        margin: 3rem auto;
        h1 {
            font-size: 2.75rem;
        }
        h1,
        .content {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }
        .content {
            h2 {
                font-size: 2.125rem;
            }
            p {
                font-size: 1.25rem;
                line-height: 1.75;
            }
        }
    }
`

export default postTemplate
