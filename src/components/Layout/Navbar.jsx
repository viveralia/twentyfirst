import React from 'react'
import styled from 'styled-components'
import socials from '../../constants/socials'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql, useStaticQuery } from 'gatsby'

const getCategories = graphql`
    {
        categories: allContentfulCategory {
            edges {
                node {
                    slug
                    name
                    id: contentful_id
                }
            }
        }
    }
`

const Navbar = ({ appName, headline, subHeadline }) => {
    const response = useStaticQuery(getCategories)
    const categories = response.categories.edges
    return (
        <StyledHeader>
            <div className="flex">
                <AniLink paintDrip hex="#15171a" to="/" className="brand">
                    {appName}
                </AniLink>
                <nav>
                    <ul>
                        {socials.map((social, i) => (
                            <li key={i}>
                                <a
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {headline && (
                <div className="headline">
                    <h1>{headline}</h1>
                    <h3>{subHeadline}</h3>
                </div>
            )}
            <div className="flex">
                <nav>
                    <ul>
                        {categories.map(category => (
                            <li key={category.node.id}>
                                <AniLink
                                    paintDrip
                                    hex="#15171a"
                                    to={`/category/${category.node.slug}`}
                                >
                                    {category.node.name}
                                </AniLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="mailto:contact@jamstackblog.com" className="button">
                    Contact
                </a>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 1.5rem 1rem;
    background: var(--black);
    color: #fff;
    font-size: 85%;
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        :last-child {
            margin-bottom: 0;
        }
        ul {
            list-style: none;
            li {
                display: inline-block;
                margin-left: 1rem;
                :first-child {
                    margin-left: 0;
                }
            }
        }
    }
    .brand {
        font-weight: 600;
    }
    .headline {
        text-align: center;
        h1 {
            margin-top: 3rem;
            margin-bottom: 0.5rem;
            font-size: 1.45rem;
        }
        h3 {
            margin-bottom: 3rem;
            font-size: 0.925rem;
            font-weight: 400;
            opacity: var(--muted);
        }
    }
    a,
    .button {
        opacity: var(--muted);
        transition: var(--transition);
        text-transform: capitalize;
        :hover {
            opacity: 1;
        }
    }
    .button {
        /* display: none; */
    }
    @media (min-width: 768px) {
        padding: 2rem 4vw;
        .headline {
            h1 {
                margin-top: 5rem;
                margin-bottom: 0.75rem;
                font-size: 2.125rem;
            }
            h3 {
                margin-bottom: 5rem;
                font-size: 1.5rem;
            }
        }
        .button {
            display: inline-block;
            font-size: 0.9rem;
        }
    }
`

export default Navbar
