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
    constructor(props) {
        super(props);
        this.state = {
          id: "",
          username1: "",
          password1: "",
          firstname1: "",
          lastname1: "",
          address1: "",
          age1:"",
          preferences1:"",
          email1:"",
          id2: "",
          username2: "",
          password2: "",
          firstname2: "",
          lastname2: "",
          address2: "",
          age2:"",
          preferences2:"",
          email2:"",
          id3:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.selectByUserId = this.selectByUserId.bind(this);
        this.insertUser = this.insertUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
      }
    
      handleChange(e) {
        const target = e.target;
        const value = target.value;
        const elementname = target.name;
        this.setState({
          [elementname]: value,
        });
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
        
    }
    async selectByUserId() {
        console.log(this.state.id)
        const res = await (await fetch("http://localhost:3030/admin/search&/User/" + this.state.id, {
            method: 'GET'
        })).json();
        console.log(res.data);
        let user = res.data;
        // document.getElementById("byUserId").innerHTML = `Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}`;
    }

    async insertUser() {
        let info = {
            username: this.state.username1,
            password: this.state.password1,
            firstname: this.state.firstname1,
            lastname: this.state.lastname1,
            address: this.state.address1,
            age: this.state.age1,
            preferences: this.state.preferences1,
            email: this.state.email1
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/insert&/User", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res.data);
        // document.getElementById("insertUserResult").innerHTML = res.message;
    }
    async updateUser() {
        let info = {
            login_id: this.state.id2,
            username: this.state.username2,
            password: this.state.password2,
            firstname: this.state.firstname2,
            lastname: this.state.lastname2,
            address: this.state.address2,
            age: this.state.age2,
            preferences: this.state.preferences2,
            email: this.state.email2
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/update&/User/" + this.state.id2, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res.data)
    //     // document.getElementById("updateUserResult").innerHTML = res.message;
    }

    async deleteUser() {
        const res = await (await fetch("http://localhost:3030/admin/delete&/User/" + this.state.id3, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login_id: this.state.id3, dummy: "test"})
        })).json();
        console.log(res)
        // document.getElementById("deleteUserResult").innerHTML = res.message;
    }

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
                <DivStyle>
                    <LabelStyle>Input the User ID to find more information!:
                    <input type="text" name="id" className="form-control" value = {this.state.id} onChange = {this.handleChange}/>
                    <input type = "submit" value = "Search" onClick = {this.selectByUserId}/>
                    </LabelStyle>
                </DivStyle> 
                <DivStyle>
                    <H1Style>Fill in the information to insert a new user into database.</H1Style>
                    <LabelStyle>
                    user:<input type="text" name="username1" className="form-control" value = {this.state.username1} onChange = {this.handleChange}/>
                    password:<input type="text" name="password1" className="form-control" value = {this.state.password1} onChange = {this.handleChange}/>
                    Firstname:<input type="text" name="firstname1" className="form-control" value = {this.state.firstname1} onChange = {this.handleChange}/>
                    Lastname:<input type="text" name="lastname1" className="form-control" value = {this.state.lastname1} onChange = {this.handleChange}/>
                    Address:<input type="text" name="address1" className="form-control" value = {this.state.address1} onChange = {this.handleChange}/>
                    Age:<input type="text" name="age1" className="form-control" value = {this.state.age1} onChange = {this.handleChange}/>
                    Preferences:<input type="text" name="preferences1" className="form-control" value = {this.state.preferences1} onChange = {this.handleChange}/>
                    Email:<input type="text" name="email1" className="form-control" value = {this.state.email1} onChange = {this.handleChange}/>
                    <input type = "submit" value = "Insert" onClick = {this.insertUser}/>
                    </LabelStyle>
                </DivStyle>   
                <DivStyle>
                    <H1Style>Input the User ID, then fill the information that you want to update.</H1Style>
                    <LabelStyle>
                    user id:<input type="text" name="id2" className="form-control" value = {this.state.id2} onChange = {this.handleChange}/>
                    user:<input type="text" name="username2" className="form-control" value = {this.state.username2} onChange = {this.handleChange}/>
                    password:<input type="text" name="password2" className="form-control" value = {this.state.password2} onChange = {this.handleChange}/>
                    Firstname:<input type="text" name="firstname2" className="form-control" value = {this.state.firstname2} onChange = {this.handleChange}/>
                    Lastname:<input type="text" name="lastname2" className="form-control" value = {this.state.lastname2} onChange = {this.handleChange}/>
                    Address:<input type="text" name="address2" className="form-control" value = {this.state.address2} onChange = {this.handleChange}/>
                    Age:<input type="text" name="age2" className="form-control" value = {this.state.age2} onChange = {this.handleChange}/>
                    Preferences:<input type="text" name="preferences2" className="form-control" value = {this.state.preferences2} onChange = {this.handleChange}/>
                    Email:<input type="text" name="email2" className="form-control" value = {this.state.email2} onChange = {this.handleChange}/>
                    <input type = "submit" value = "Update" onClick = {this.updateUser}/>
                    </LabelStyle>
                </DivStyle> 
                <DivStyle>
                    <H1Style>Input the User ID that you want to delete</H1Style>
                    <LabelStyle>
                    user id:<input type="text" name="id3" className="form-control" value = {this.state.id3} onChange = {this.handleChange}/>
                    <input type = "submit" value = "delete" onClick = {this.deleteUser}/>
                    </LabelStyle>
                </DivStyle>                  
            </div>
        );
    }

   
}

export default UserSection;