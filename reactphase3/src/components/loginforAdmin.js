import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1`
    text-align: Center;
    padding: 20px;
`;

class loginforAdmin extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.adminLogin = this.adminLogin.bind(this);
      }
    
      handleChange(e) {
        const target = e.target;
        const value = target.value;
        const elementname = target.name;
        this.setState({
          [elementname]: value,
        });
      }
    async adminLogin() {
        
        console.log(this.state.username)
        let info = {
            username: this.state.username, //LeviAKM
            password: this.state.password //2512820
        }
        console.log(info.username, info.password);
        const res = await (await fetch("http://localhost:3030/adminlogin/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res);
        localStorage.setItem("firstname", res.data.firstname);
        localStorage.setItem("lastname", res.data.lastname);
        localStorage.setItem("age", res.data.age);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("address", res.data.address);
        localStorage.setItem("age", res.data.age);
        if (res.error) {
            alert("Username or password Incorrect");
        }
        else{
            localStorage.setItem("login", true);
            localStorage.setItem("admin", true);
            alert("Welcome back "+res.data.firstname+" "+res.data.lastname);
            // location.replace("HtmlAdminpage.html");
            window.location.assign("http://localhost:3000/");
        }
    }
    render()
    {
        return(
            <div className="App container">
                <h1>Admin login</h1>
                <div className="form">
                    <div className="mb-3">
                        <label className="form-label">
                            Username:
                        </label>
                        <input type="text" name="username" className="form-control" value = {this.state.username} onChange = {this.handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Password:
                        </label>
                        <input type="password" name="password" className="form-control" value = {this.state.password} onChange = {this.handleChange}/>
                    </div>
                    
                    <input type = "submit" value = "Submit" onClick = {this.adminLogin}/>
                </div>
                
            </div>
        );
    }
}

export default loginforAdmin;