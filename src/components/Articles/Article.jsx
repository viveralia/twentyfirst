import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Article = ({ article }) => {
    const {
        slug,
        title,
        excerpt,
        updatedAt,
        coverImage,
        category,
        author,
    } = article

    return (
        <StyledArticle>
            <article>
                <AniLink
                    paintDrip
                    hex="#15171a"
                    to={`/blog/${slug}`}
                    className="coverLink"
                >
                    <Image
                        fadeIn
                        fluid={coverImage.fluid}
                        alt={coverImage.title || title}
                        className="coverImage"
                    />
                </AniLink>
                <div className="info">
                    <h3>
                        <AniLink
                            paintDrip
                            hex="#15171a"
                            to={`/category/${category.slug}`}
                        >
                            {category.name}
                        </AniLink>
                    </h3>
                    <h2>
                        <AniLink paintDrip hex="#15171a" to={`/blog/${slug}`}>
                            {title}
                        </AniLink>
                    </h2>
                    <p>{excerpt.excerpt}</p>
                </div>
                <footer>
                    <AniLink
                        paintDrip
                        hex="#15171a"
                        to={`/author/${author.slug}`}
                        className="author"
                    >
                        <Image
                            fixed={author.avatar.fixed}
                            alt={author.avatar.title || author.name}
                            className="avatar"
                        />
                        <p>{author.name}</p>
                    </AniLink>
                    <div>
                        <p>{updatedAt}</p>
                    </div>
                </footer>
            </article>
        </StyledArticle>
    )
}

const StyledArticle = styled.li`
    article {
        .coverLink {
            display: block;
            width: 100%;
            height: 200px;
            overflow: hidden;
            position: relative;
            .coverImage {
                position: absolute;
                top: 50%;
                transform: translateY(-50%) scale(1.1);
                transition: transform 10s linear;
                :after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--grey);
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }
            }
            :hover {
                .coverImage {
                    transform: translateY(-50%) scale(1.25);
                    :after {
                        opacity: 0.25;
                    }
                }
            }
        }
        .info {
            margin: 1rem 0;
            h3 {
                font-size: 80%;
                font-weight: 400;
                margin-bottom: 0.25rem;
                a {
                    text-transform: capitalize;
                    opacity: var(--muted);
                    transition: var(--transition);
                    :hover {
                        opacity: 1;
                    }
                }
            }
            h2 {
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
            }
            p {
                color: var(--grey);
                line-height: 1.5;
                font-size: 95%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
            }
        }
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 85%;
            margin-bottom: 1rem;
            .author {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .avatar {
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
            }
            p {
                opacity: var(--muted);
            }
        }
    }
`

export default Article
