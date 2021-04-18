import React from 'react'
import styled from 'styled-components'

const StyledCardHeader = styled.section`
  /* background-image: url('images/bg-pattern-card.svg'); */
  background-color: #0b0b0d;
  background-size: cover;
  background-repeat: no-repeat;

  height: 144px;
`

export default function CardHeader() {
    return (
        <StyledCardHeader>
            <div id="banner-image"></div>
        </StyledCardHeader>
    )
}
