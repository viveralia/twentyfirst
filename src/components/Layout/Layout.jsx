import React from 'react'
import './global.css'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = ({ children, headline, subHeadline }) => {
    return (
        <StyledMain>
            <Navbar
                appName="Twenty First"
                headline={headline}
                subHeadline={subHeadline}
            />
            <main>{children}</main>
            <Footer appName="Twenty First" />
        </StyledMain>
    )
}

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    main {
        max-width: 1200px;
        margin: auto;
        padding: 1.5rem 1rem;
    }
`

export default Layout
