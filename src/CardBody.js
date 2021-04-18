import React from 'react'
import styled from 'styled-components'

const StyledCardBody = styled.section`
        #profile-picture {        
            width: 100px;
            height: 100px;

            border: 5px solid white;
            border-radius: 50px;

            overflow: hidden;

            margin: 0 auto;
            margin-top: -50px;
            margin-bottom: 24px;
        }

        #name-age {
            display: flex;
            justify-content: center;

            margin-bottom: 10px;
        }

        #name {
            font-size: 18px;
            font-weight: 700;

            margin-right: 10px;
        }

        #age {
            color: $primary-3;
            font-size: 18px;
            font-weight: 400;
        }

        #location {
            color: $primary-3;
            font-size: 14px;
            font-weight: 400;

            margin-bottom: 24px;
        } 
`

export default function CardBody() {
    return (
        <StyledCardBody>
            <div id="profile-picture">
              <img src="images/image-victor.jpg" alt="Man"/>
            </div>

            <div id="name-age">
              <h1 id="name">Victor Crest</h1>
              <p id="age">26</p>
            </div>
            <p id="location">London</p>
        </StyledCardBody>
    )
}
