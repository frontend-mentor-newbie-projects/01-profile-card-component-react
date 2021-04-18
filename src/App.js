import React, { createContext, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import axios from 'axios'

import colors from './styles/colors'
import fonts from './styles/fonts'
import users from './data/users'

import Card from './Card'

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body,
    h1, h2, h3, h4, h5, h6,
    p, a, ul, li,
    img {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }
`

const StyledButton = styled.button`
    font-family: ${fonts.fontFamily};
    font-weight: 700;
    letter-spacing: 0.1rem;

    color: white;
    background-color: #0b0b0d;

    border: 2px solid white;
    border-radius: 10px;
    box-shadow:
        0  1px  1px  rgba(0,0,0,0.05), 
        0  2px  2px  rgba(0,0,0,0.05), 
        0  4px  4px  rgba(0,0,0,0.05),
        0  8px  8px  rgba(0,0,0,0.05),
        0  16px 16px rgba(0,0,0,0.05);

    height: 40px;
    width: 350px;

    margin-top: 24px;

    &:hover {
        color: #ba0000;
        background-color: white;

        /* border: 2px solid ${colors.colorPrimary_1}; */

        cursor: pointer;
    }

    &:active {
        outline: none;
    }
`

const Content = styled.main`
    font-family: ${fonts.fontFamily};

    background-color: #121316;

    display: flex;

    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    padding: 64px 24px;
    margin: 0 auto;

    min-height: 667px;
    height: 100vh;
`

export const UserContext = createContext()

function App() {
    const [user, setUser] = useState(users[0]);

    const getUser = () => {
        /* axios.get('https://randomuser.me/api/')
        .then(res => {
            // console.log(res.data.results[0])
            return res.data.results[0]
        }) */

        /* fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }) */

        if (users.indexOf(user) === users.length - 1)
            return setUser(users[0])
        else
            return setUser(users[users.indexOf(user) +  1])
    }

    return (
        <>
            <GlobalStyles />
            <Content>
                <UserContext.Provider value={user}>
                    <Card />
                </UserContext.Provider>

                <StyledButton onClick={() => getUser()}>Refresh</StyledButton>
            </Content>
        </>
    )
}

export default App
