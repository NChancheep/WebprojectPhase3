import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1 `
    margin: 20px;
    text-align: Center;
    background-color: gray;
    color: white;
    padding: 20px;
`;
const DivStyle = styled.div `
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const LabelStyle = styled.label `
    margin: 30px 20px;
`;

const Button = styled.button `
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
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
                <h1>kuy jump this is result page</h1>
            );
        } else {
            alert("login first");
            window.location.assign("http://localhost:3000/");

        }
    }
}
export default result;