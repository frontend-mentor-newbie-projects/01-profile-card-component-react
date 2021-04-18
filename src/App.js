import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import colors from './styles/colors'
import fonts from './styles/fonts'

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

const Content = createGlobalStyle`
    body {
        font-family: ${fonts.fontFamily};

        background-color: ${colors.colorPrimary_1};

        display: flex;

        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        padding: 64px 24px;
        margin: 0 auto;

        min-height: 667px;
        height: 100vh;
    }
`

function App() {
    return (
        <>
            <GlobalStyles />
            <Content />

            <Card />
        </>
    )
}

export default App
