import React from 'react'
import styled from 'styled-components'

import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const StyledCard = styled.section`
    text-align: center;

    width: 350px;

    background-color: white;

    border: 3px solid white;
    border-radius: 16px;
    box-shadow:
        0  1px  1px  rgba(0,0,0,0.05), 
        0  2px  2px  rgba(0,0,0,0.05), 
        0  4px  4px  rgba(0,0,0,0.05),
        0  8px  8px  rgba(0,0,0,0.05),
        0  16px 16px rgba(0,0,0,0.05);

    overflow: hidden;
`

export default function Card() {
    return (
        <StyledCard>
            <CardHeader />
            <CardBody />
            <CardFooter />
        </StyledCard>
    )
}
