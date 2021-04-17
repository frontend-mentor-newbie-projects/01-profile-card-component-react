import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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

function App() {
    return (
        <>
            <GlobalStyles />
            Victor Crest         
            26
            London

            80K
            Followers

            803K
            Likes

            1.4K
            Photos
        </>
    )
}

export default App
