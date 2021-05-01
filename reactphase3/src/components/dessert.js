import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1`
    margin: 20px;
    text-align: Center;
    background-color: gray;
    color: white;
    padding: 20px;
`;
const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
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

class DessertSection extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          price: "",
          dessertname1:"",
          dessertprice1:"",
          dessertname2:"",
          dessertprice2:"",
          dessertname3:"",
          findname:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.selectByDessertName = this.selectByDessertName.bind(this);
        this.selectByDessertPrice = this.selectByDessertPrice.bind(this);
        this.insertDessert = this.insertDessert.bind(this);
        this.updateDessert = this.updateDessert.bind(this);
        this.deleteDessert = this.deleteDessert.bind(this);
        this.selectByfindname = this.selectByfindname.bind(this);
      }
    
      handleChange(e) {
        const target = e.target;
        const value = target.value;
        const elementname = target.name;
        this.setState({
          [elementname]: value,
        });
      }
      async searchAllDessert() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Dessert", {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Dessert => {
            lists += `<li>Dessert Name: ${Dessert.Dessert_Name} | Dessert Price: ${Dessert.Dessert_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("allDessert").innerHTML = lists;
        return lists;
    }
    async selectByDessertName() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Dessertname/" + this.state.name, {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Dessert => {
            lists += `<li>Dessert Name: ${Dessert.Dessert_Name} | Dessert Price: ${Dessert.Dessert_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("byDessertName").innerHTML = lists;
        return lists;
    }
    async selectByDessertPrice() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Dessertprice/" + this.state.price, {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Dessert => {
            lists += `<li>Dessert Name: ${Dessert.Dessert_Name} | Dessert Price: ${Dessert.Dessert_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("byDessertPrice").innerHTML = lists;
        return lists;
    }
    async insertDessert() {
        let info = {
            Dessert_Name: this.state.dessertname1,
            Dessert_Price: this.state.dessertprice1
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/insert&/Dessert", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res);
        document.getElementById("insertDessertResult").innerHTML = res.message;
        return res.message;
    }
    async updateDessert() {
        let info = {
            Dessert_Name: this.state.dessertname2,
            Dessert_Price: this.state.dessertprice2
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/update&/Dessert/" + this.state.dessertname2, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res)
        document.getElementById("updateDessertResult").innerHTML = res.message;
        return res.message;
    }
    async deleteDessert() {
        const res = await (await fetch("http://localhost:3030/admin/delete&/Dessert/" + this.state.dessertname3, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Dessert_Name: this.state.dessertname3, dummy: "test"})
        })).json();
        console.log(res)
        document.getElementById("deleteDessertResult").innerHTML = res.message;
        return res.message;
    }
    async selectByfindname() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Dessertname/" + this.state.findname, {
            method: 'GET'
        })).json();
        console.log(res.data);
        res.data.forEach(Dessert => {
            localStorage.setItem("productName", Dessert.Dessert_Name);
            localStorage.setItem("productPrice", Dessert.Dessert_Price);
        });
        // console.log(res.data.Dessert_Name);
        // console.log(res.data.Dessert_Price);
        // localStorage.setItem("productName", res.data.Dessert_Name);
        // localStorage.setItem("productPrice", res.data.Dessert_Price);
        window.location.assign("http://localhost:3000/results");
        // let lists = `<ul>`;
        // res.data.forEach(Dessert => {
        //     lists += `<li>Dessert Name: ${Dessert.Dessert_Name} | Dessert Price: ${Dessert.Dessert_Price}</li>`
        // });
        // lists += `</ul>`;
        // document.getElementById("byDessertName").innerHTML = lists;
        // return lists;

    }
    render()
    {
        return(
            <div>
            <H1Style>Dessert Section</H1Style>
            <DivStyle>
                <LabelStyle>
                <h1>Search all!</h1>
                <p>Search All dessert in database.</p>
                <Button type = "submit" value = "Search" onClick = {this.searchAllDessert}>Search</Button>
                <div id = "allDessert"></div>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>
                <h1>Input drink name.</h1>
                <p>Input dessert Name to find more information.</p>
                <input type="text" name="name" className="form-control" value = {this.state.name} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Search" onClick = {this.selectByDessertName}>Search</Button>
                <div id = "byDessertName"></div>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>
                <h1>Input information of dessert.</h1>
                <p>Input Dessert Price to find more information.</p>
                <input type="text" name="price" className="form-control" value = {this.state.price} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Search" onClick = {this.selectByDessertPrice}>Search</Button>
                <div id = "byDessertPrice"></div>
                </LabelStyle>
            </DivStyle>
            <DivStyle>
                <LabelStyle><br/>
                <h1>Insert dessert information.</h1>
                <p>Fill in the information to insert a new dessert into database.</p>
                dessert Name:<input type="text" name="dessertname1" className="form-control" value = {this.state.dessertname1} onChange = {this.handleChange}/>
                dessert Price:<input type="text" name="dessertprice1" className="form-control" value = {this.state.dessertprice1} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Insert" onClick = {this.insertDessert}>Search</Button>
                <div id = "insertDessertResult"></div>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle><br/>
                <h1>Update Dessert information.</h1>
                <p>Input the dessert Name, then fill the dessert price to update the information.</p>
                dessert Name:<input type="text" name="dessertname2" className="form-control" value = {this.state.dessertname2} onChange = {this.handleChange}/>
                dessert Price:<input type="text" name="dessertprice2" className="form-control" value = {this.state.dessertprice2} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Insert" onClick = {this.updateDessert}>Search</Button>
                <div id = "updateDessertResult"></div>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle><br/>
                <h1>Delete information.</h1>
                <p>Input the Dessert Name that you want to delete.</p>
                <input type="text" name="dessertname3" className="form-control" value = {this.state.dessertname3} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Delete" onClick = {this.deleteDessert}>Search</Button>
                <div id = "deleteDessertResult"></div>
                </LabelStyle>
            </DivStyle>    
            <DivStyle>
                    <LabelStyle>
                    <h1>go to the page for the information</h1>
                    <p>Input the dessert name to know you want (you can find the userID by use select all function above)</p>
                    <input type="text" name="findname" className="form-control" value = {this.state.findname} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "Search" onClick = {this.selectByfindname}>Search</Button>
                    </LabelStyle>
                </DivStyle>  
            </div>  
        );
    }
}
export default DessertSection;