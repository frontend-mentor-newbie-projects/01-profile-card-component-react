import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;

        /* Variables */
        @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

        --color-primary-1: hsl(185, 75%, 39%);
        --color-primary-2: hsl(229, 23%, 23%);
        --color-primary-3: hsl(227, 10%, 46%);
        --color-neutral-1: hsl(0, 0%, 59%);

        --body-font-size: 18px;
        --font-stack: 'Kumbh Sans'
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
            <img src="images/image-victor.jpg" alt="Man"/>

            <h1>Victor Crest</h1>         
            <p>26</p>
            <p>London</p>

            <p>80K</p>
            <h2>Followers</h2>

            <p>803K</p>
            <h2>Likes</h2>

            <p>1.4K</p>
            <h2>Photos</h2>
        </>
    )
}

export default App
