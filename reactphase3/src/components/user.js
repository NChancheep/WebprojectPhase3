import React from 'react';
import styled from 'styled-components';


const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const H1Style = styled.h1`
    margin: 20px;
    text-align: Center;
    background-color: gray;
    color: white;
    padding: 20px;
`;


const LabelStyle = styled.label`
    margin: 30px 20px;
`;


const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
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
          id3:"",
          findID:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.selectByUserId = this.selectByUserId.bind(this);
        this.insertUser = this.insertUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.selectByfindid = this.selectByfindid.bind(this);
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
        document.getElementById("allUser").innerHTML = lists;
        return lists;
    }
    async selectByUserId() {
        console.log(this.state.id)
        let user 
        const res = await (await fetch("http://localhost:3030/admin/search&/User/" + this.state.id, {
            method: 'GET'
        })).json();
        console.log(res.data);
        user = res.data;
        document.getElementById("byUserId").innerHTML = `Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}`;
        return `Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}`;
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
        document.getElementById("insertUserResult").innerHTML = res.message;
        return res.message;
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
        document.getElementById("updateUserResult").innerHTML = res.message;
        return res.massage;
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
        document.getElementById("deleteUserResult").innerHTML = res.message;
        return res.massage;
    }

    async selectByfindid() {
        console.log(this.state.findID)
        const res = await (await fetch("http://localhost:3030/admin/search&/User/" + this.state.findID, {
            method: 'GET'
        })).json();
        console.log(res.data);
        let user = res.data;
        localStorage.setItem("accfirstname", user.firstname);
        localStorage.setItem("acclastname", user.lastname);
        localStorage.setItem("accage", user.age);
        localStorage.setItem("accemail", user.email);
        localStorage.setItem("accaddress", user.address);
        localStorage.setItem("accage", user.age);
        localStorage.setItem("accrole", user.role);
        alert("redirect to account information of "+user.firstname+" "+user.lastname);
        window.location.assign("http://localhost:3000/accountinfo");

        // document.getElementById("byUserId").innerHTML = `Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}`;
        // return `Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}`;
    }
    render()
    {
        return (
            <div>
                <H1Style>User Section</H1Style>
                <DivStyle>
                    <LabelStyle>
                        <h1>Search all!</h1>
                        <p>Click to search all user</p>
                        <Button type = "submit" value = "Search" onClick = {this.searchAllUser}>Search</Button>
                        <div id = "allUser"></div>
                    </LabelStyle>
                </DivStyle>   

                <DivStyle>
                    <LabelStyle>
                    <h1>Input ID</h1>
                    <p>Input the User ID to find more information (Just ID!!)</p>
                    <input type="text" name="id" className="form-control" value = {this.state.id} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "Search" onClick = {this.selectByUserId}>Search</Button>
                    <div id = "byUserId"></div>
                    </LabelStyle>
                </DivStyle> 

                <DivStyle>
                    <LabelStyle>
                    <h1>Insert information.</h1>
                    <p>Fill in the information to insert a new user into database.</p>
                    user<input type="text" name="username1" className="form-control" value = {this.state.username1} onChange = {this.handleChange}/>
                    <br/>
                    password<input type="text" name="password1" className="form-control" value = {this.state.password1} onChange = {this.handleChange}/>
                    <br/>
                    Firstname<input type="text" name="firstname1" className="form-control" value = {this.state.firstname1} onChange = {this.handleChange}/>
                    <br/>
                    Lastname<input type="text" name="lastname1" className="form-control" value = {this.state.lastname1} onChange = {this.handleChange}/>
                    <br/>
                    Address<input type="text" name="address1" className="form-control" value = {this.state.address1} onChange = {this.handleChange}/>
                    <br/>
                    Age<input type="text" name="age1" className="form-control" value = {this.state.age1} onChange = {this.handleChange}/>
                    <br/>
                    Preferences<input type="text" name="preferences1" className="form-control" value = {this.state.preferences1} onChange = {this.handleChange}/>
                    <br/>
                    Email<input type="text" name="email1" className="form-control" value = {this.state.email1} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "Insert" onClick = {this.insertUser}>Search</Button>
                    <div id = "insertUserResult"></div>
                    </LabelStyle>
                </DivStyle>   

                <DivStyle>
                    <LabelStyle>
                    <h1>Update information.</h1>
                    <p>Input the User ID, then fill the information that you want to update.</p>
                    user id<input type="text" name="id2" className="form-control" value = {this.state.id2} onChange = {this.handleChange}/>
                    <br/>
                    user<input type="text" name="username2" className="form-control" value = {this.state.username2} onChange = {this.handleChange}/>
                    <br/>
                    password<input type="text" name="password2" className="form-control" value = {this.state.password2} onChange = {this.handleChange}/>
                    <br/>
                    Firstname<input type="text" name="firstname2" className="form-control" value = {this.state.firstname2} onChange = {this.handleChange}/>
                    <br/>
                    Lastname<input type="text" name="lastname2" className="form-control" value = {this.state.lastname2} onChange = {this.handleChange}/>
                    <br/>
                    Address<input type="text" name="address2" className="form-control" value = {this.state.address2} onChange = {this.handleChange}/>
                    <br/>
                    Age<input type="text" name="age2" className="form-control" value = {this.state.age2} onChange = {this.handleChange}/>
                    <br/>
                    Preferences<input type="text" name="preferences2" className="form-control" value = {this.state.preferences2} onChange = {this.handleChange}/>
                    <br/>
                    Email<input type="text" name="email2" className="form-control" value = {this.state.email2} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "Update" onClick = {this.updateUser}>Search</Button>
                    <div id = "updateUserResult"></div>
                    </LabelStyle>
                </DivStyle> 

                <DivStyle>
                    <LabelStyle>
                    <h1>Delete information.</h1>
                    <p>Input the User ID that you want to delete.</p>
                    user id<input type="text" name="id3" className="form-control" value = {this.state.id3} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "delete" onClick = {this.deleteUser}>Search</Button>
                    <div id = "deleteUserResult"></div>
                    </LabelStyle>
                </DivStyle>        
                <DivStyle>
                    <LabelStyle>
                    <h1>go to the page for the information</h1>
                    <p>Input the User ID to know who you want (you can find the userID by use select all function above)</p>
                    <input type="text" name="findID" className="form-control" value = {this.state.findID} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "Search" onClick = {this.selectByfindid}>Search</Button>
                    </LabelStyle>
                </DivStyle>           
            </div>
        );
    }

   
}

export default UserSection;