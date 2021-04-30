import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1`
    text-align: Center;
    padding: 20px;
`;

class HomePage extends React.Component
{
    render()
    {
        return <H1Style>DASHBORD</H1Style>
    }
}

export default HomePage;