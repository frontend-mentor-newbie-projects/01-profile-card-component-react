import React from 'react'
import styled from 'styled-components'

const StyledCardFooter = styled.section`
    display: flex;

    flex-flow: row nowrap;
    justify-content: space-around;

    border-top: 1px solid hsla(0, 0%, 59%, 0.2);

    padding: 24px 0;

    .stat {
        display: flex;
        flex-flow: column nowrap;

        width: 64px;
    }

    .stat h2 {
        color: $primary-3;
        font-size: 12px;
        font-weight: 400;
    
        order: 1;    
    }

    .stat p {
        font-size: 18px;
        font-weight: 700;
    
        padding-bottom: 0.5rem;
    
        order: -1;
    }
`

const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRandomStats = () => {
    return {
        followers: getRandomValue(200, 1000),
        likes: getRandomValue(20, 50),
        photos: getRandomValue(1, 25),
    }
}

export default function CardFooter() {
    const stats = generateRandomStats()

    return (
        <StyledCardFooter>
            <div className="stat" id="followers">
                <p>{stats.followers}K</p>
                <h2>Followers</h2>
            </div>

            <div className="stat" id="likes">
                <p>{stats.likes}K</p>
                <h2>Likes</h2>
            </div>

            <div className="stat" id="photos">
                <p>{stats.photos}K</p>
                <h2>Photos</h2>
            </div>
        </StyledCardFooter>
    )
}
