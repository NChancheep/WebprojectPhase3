import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1 `
    margin: 1%;
    text-align: center;
    background-color: gray;
    color: white;
    width: 100%;
    font-size: 100%;
    padding-top: 5%;
`;
const DivStyle = styled.div `
    background-color: Black;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-top: 10%;
    margin-left: 30%;
    margin-right: 30%;
`;
const H2Style = styled.h2 `
    text-align: center;
    background-color: Black;
    color: white;
    width: 100%;
    padding: 5%;
`;

const LabelStyle = styled.label `
    margin: 30px 20px;
`;

const cardBox = `
    
`;

class accountinfo extends React.Component {

    constructor(props) 
        {
            super(props);
            this.state = {
              id: "",
             
            };
            this.handleChange = this.handleChange.bind(this);   
        }
        
          handleChange(e) 
          {
            const target = e.target;
            const value = target.value;
            const elementname = target.name;
            this.setState({
              [elementname]: value,
            });
          }
    render() {
        
        const login = localStorage.getItem('login');
        if (login) {
            const fName = localStorage.getItem('accfirstname');
            const lName = localStorage.getItem('acclastname');
            const Email = localStorage.getItem('accemail');
            const address = localStorage.getItem('accaddress');
            const age = localStorage.getItem('accage');
            const role = localStorage.getItem('accrole');
            // console.log(fName)
            return (
            <div>
                <DivStyle>
                    <H1Style>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/456/456212.svg?token=exp=1619881540~hmac=55a036eb2777b5899536308f7ccf813c" alt="new" style={{width:"40%"}} />
                        <H2Style>USER INFORMATION</H2Style>
                        <b>{fName} {lName}</b>
                        <p>Age: {age}</p>
                        <p>Email: {Email}</p>
                        <p>Address: {address}</p>
                        <p>Role: {role}</p> 
                    </H1Style> 
                </DivStyle>
            </div>
            );
        } else {
            alert("login first");
            window.location.assign("http://localhost:3000/");

        }
        
    }
    
}
export default accountinfo;