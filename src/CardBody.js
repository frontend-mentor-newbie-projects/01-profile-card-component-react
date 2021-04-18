import React, { useState, useContext }from 'react'
import styled from 'styled-components'

import { UserContext } from './App'

const StyledCardBody = styled.section`
        #profile-picture {        
            width: 120px;
            height: 120px;

            border: 5px solid white;
            border-radius: 60px;

            overflow: hidden;

            margin: 0 auto;
            margin-top: -50px;
            margin-bottom: 24px;

            img {
                max-width: 120px;
                position: relative;
                bottom: 20px;
                right: 8px;
               
                object-fit: contain;

                filter: grayscale(100%);
            }
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
    const [firstName, setFirstName] = useState('Cynthia');
    const [lastName, setLastName] = useState('Mahofa');
    const [age, setAge] = useState(25);
    const [location, setLocation] = useState('Johannesburg');
    const [imageUrl, setImageUrl] = useState('images/image-victor.jpg');
    const [sex, setSex] = useState('f');

    const checkSex = () => {
        if (sex === 'f')
            return 'Woman'
        if (sex === 'm')
            return 'Man'
    }

    const user = useContext(UserContext)

    return (
        <StyledCardBody>
            <div id="profile-picture">
              <img src={user.imageUrl} alt={checkSex(sex)}/>
            </div>

            <div id="name-age">
              <h1 id="name">{user.firstName} {user.lastName}</h1>
              <p id="age">{user.age}</p>
            </div>
            <p id="location">{user.location}</p>
        </StyledCardBody>
    )
}
