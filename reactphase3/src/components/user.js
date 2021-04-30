import React from 'react';
import styled from 'styled-components';


const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const H1Style = styled.h1`
    display: flex;
    margin: 20px;
`;


const LabelStyle = styled.label`
    margin: 30px 20px;
`;


class UserSection extends React.Component
{
    render()
    {
        return (
            <div>
                <DivStyle>
                    <H1Style>User Section</H1Style>
                        <LabelStyle>Search for all user!:
                        <input type = "submit" value = "Search" onClick = {this.searchAllUser}/>
                        </LabelStyle>
                </DivStyle>                
            </div>
        );
    }

    async searchAllUser() {
        const res = await (await fetch("http://localhost:3030/admin/search&/User", {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(user => {
            lists += `<li>User ID: ${user.login_id} | Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}</li>`
        });
        lists += `</ul>`;
        console.log(lists);
        return lists;
    }
}

export default UserSection;