import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import colors from './styles/colors'
import fonts from './styles/fonts'

const StyledButton = styled.button`
    font-family: ${fonts.fontFamily};

    background-color: white;

    border: none;
    border-radius: 16px;
    box-shadow:
        0  1px  1px  rgba(0,0,0,0.05), 
        0  2px  2px  rgba(0,0,0,0.05), 
        0  4px  4px  rgba(0,0,0,0.05),
        0  8px  8px  rgba(0,0,0,0.05),
        0  16px 16px rgba(0,0,0,0.05);

    height: 40px;
    width: 80px;

    margin-top: 24px;

    &:hover {
        color: white;
        background-color: ${colors.colorPrimary_1};

        border: 2px solid white;

        cursor: pointer;
    }
`

export default function Button({ children }, props) {
    return (
        <StyledButton onClick={() => props.handler}>{ children }</StyledButton>
    )
}
