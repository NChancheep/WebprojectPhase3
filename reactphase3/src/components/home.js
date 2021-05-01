import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1`
    text-align: Center;
    padding: 20px;
`;

const H6Style = styled.h6`
    text-align: Center;

    `;

class HomePage extends React.Component
{
    render()
    {
        return(
            <div>

            <H1Style>DASHBORD</H1Style>
            <H6Style>Hello this is admin page you can edit any information on this site.<br/>
            This site have user,food,drink and dessert.
            </H6Style> 
            </div>

        );
    }
}

export default HomePage;