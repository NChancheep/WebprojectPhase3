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

class result extends React.Component {

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
            const pName = localStorage.getItem('productName');
            const pPrice = localStorage.getItem('productPrice');
            console.log(pName)
            return (
                <div>
                <DivStyle>
                    <H1Style>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1365/1365503.svg?token=exp=1619881435~hmac=00205aaea9d7453c102051905a4717d3" alt="new" style={{width:"40%"}} />
                        <H2Style>INFORMATION</H2Style>
                        <p>Name:{pName}</p>
                        <p>Price:{pPrice}</p>
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
export default result;