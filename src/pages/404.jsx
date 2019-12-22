import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'

const error = () => {
    return (
        <Layout>
            <SEO
                localDesc="404"
                localTitle="Nothing to see here. The page doesn't exist"
            />
            <StyledError>
                <iframe
                    title="404"
                    src="https://giphy.com/embed/jkZtSdwKOx05BOlapR"
                    width="400"
                    height="200"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                ></iframe>
                <h1>Nothing to see here</h1>
                <p>The page you were looking for doesn't exist</p>
                <div>
                    <AniLink
                        cover
                        to="/"
                        direction="left"
                        bg="#15171a"
                        className="button"
                    >
                        Take me back home
                    </AniLink>
                </div>
            </StyledError>
        </Layout>
    )
}

const StyledError = styled.section`
    text-align: center;
    iframe {
        width: 100%;
    }
    h1 {
        margin: 1rem 0 0.5rem 0;
    }
    p {
        margin-bottom: 2rem;
        color: var(--grey);
    }
    .button {
        display: inline-block;
        font-size: 1rem;
        padding: 0.75rem 1rem;
        margin-bottom: 0.5rem;
    }
`

export default error
