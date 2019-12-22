import React from 'react'
import styled from 'styled-components'
import menus from '../../constants/menus'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Footer = ({ appName }) => {
    return (
        <StyledFooter>
            <div>
                <p>
                    © {new Date().getFullYear()}, {appName}
                </p>
            </div>
            <nav>
                <ul>
                    {menus.map((menu, i) => (
                        <li key={i}>
                            <AniLink paintDrip hex="#15171a" to={menu.path}>
                                {menu.name}
                            </AniLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    margin-top: auto;
    background: #15171a;
    padding: 1.5rem 1rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 80%;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    p {
        opacity: var(--muted);
    }
    nav {
        margin-bottom: 1em;
        ul {
            list-style: none;
            li {
                display: inline-block;
                margin-left: 1rem;
                a {
                    text-transform: capitalize;
                    opacity: var(--muted);
                    transition: var(--transition);
                    :hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 2rem 4vw;
        nav {
            margin: 0;
        }
    }
`

export default Footer
