import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1`
    text-align: Center;
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
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.selectByDessertName = this.selectByDessertName.bind(this);
        this.selectByDessertPrice = this.selectByDessertPrice.bind(this);
        this.insertDessert = this.insertDessert.bind(this);
        this.updateDessert = this.updateDessert.bind(this);
        this.deleteDessert = this.deleteDessert.bind(this);
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
        // document.getElementById("allDessert").innerHTML = lists;
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
        // document.getElementById("byDessertName").innerHTML = lists;
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
        // document.getElementById("byDessertPrice").innerHTML = lists;
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
        // document.getElementById("insertDessertResult").innerHTML = res.message;
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
        // document.getElementById("updateDessertResult").innerHTML = res.message;
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
        // document.getElementById("deleteDessertResult").innerHTML = res.message;
    }
    render()
    {
        return(
            <div>
            <DivStyle>
                <H1Style>Dessert Section</H1Style>
                <LabelStyle>Search All Desserts in database.: 
                <input type = "submit" value = "Search" onClick = {this.searchAllDessert}/>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>Input Dessert Name to find more information.:
                <input type="text" name="name" className="form-control" value = {this.state.name} onChange = {this.handleChange}/>
                <input type = "submit" value = "Search" onClick = {this.selectByDessertName}/>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>Input Dessert Price to find more information.:
                <input type="text" name="price" className="form-control" value = {this.state.price} onChange = {this.handleChange}/>
                <input type = "submit" value = "Search" onClick = {this.selectByDessertPrice}/>
                </LabelStyle>
            </DivStyle>
            <DivStyle>
                <LabelStyle>Fill in the information to insert a new dessert into database.:<br/>
                dessert Name:<input type="text" name="dessertname1" className="form-control" value = {this.state.dessertname1} onChange = {this.handleChange}/>
                dessert Price:<input type="text" name="dessertprice1" className="form-control" value = {this.state.dessertprice1} onChange = {this.handleChange}/>
                <input type = "submit" value = "Insert" onClick = {this.insertDessert}/>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>Input the Dessert Name, then fill the dessert price to update the information.:<br/>
                dessert Name:<input type="text" name="dessertname2" className="form-control" value = {this.state.dessertname2} onChange = {this.handleChange}/>
                dessert Price:<input type="text" name="dessertprice2" className="form-control" value = {this.state.dessertprice2} onChange = {this.handleChange}/>
                <input type = "submit" value = "Insert" onClick = {this.updateDessert}/>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>Input the Dessert Name that you want to delete:<br/>
                <input type="text" name="dessertname3" className="form-control" value = {this.state.dessertname3} onChange = {this.handleChange}/>
                <input type = "submit" value = "Delete" onClick = {this.deleteDessert}/>
                </LabelStyle>
            </DivStyle>    
            </div>  
        );
    }
}
export default DessertSection;