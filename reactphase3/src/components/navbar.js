import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: gray;
`;

const UnListStyle = styled.ul`
    list-style-type: none;
    display: flex;
`;

const ListStyle = styled.li`
    display: block;
    padding: 14px 20px;
`;

const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    color: white;
`;

class NavigationBar extends Component
{
    logoutset()
    {
        localStorage.clear();
        alert("logout successful");
        window.location.reload();
    }
    render()
    {
        const login = localStorage.getItem('login');
        if(login)
        {
            return (
                <NavStyle>
                    <UnListStyle>
                        <ListStyle><NavLinkStyle to = "/">DASHBORD</NavLinkStyle></ListStyle>
                        <ListStyle><NavLinkStyle to = "/user/">User Section</NavLinkStyle></ListStyle>
                        <ListStyle><NavLinkStyle to = "/food/">Food Section</NavLinkStyle></ListStyle>
                        <ListStyle><NavLinkStyle to = "/drink/">Drink Section</NavLinkStyle></ListStyle>
                        <ListStyle><NavLinkStyle to = "/dessert/">Dessert Section</NavLinkStyle></ListStyle>
                        <ListStyle><button onClick = {this.logoutset}>logout</button></ListStyle>
                    </UnListStyle>
                </NavStyle>
            );
        }
        else {
            return (
                <NavStyle>
                    <UnListStyle>
                        <ListStyle><NavLinkStyle to = "/">DASHBORD</NavLinkStyle></ListStyle>
                        <ListStyle><NavLinkStyle to = "/loginforAdmin/">loginforAdmin</NavLinkStyle></ListStyle>
                    </UnListStyle>
                </NavStyle>
            );
        }
    }
}

export default NavigationBar;