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

class DrinkSection extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          price: "",
          drinkname1:"",
          drinkprice1:"",
          drinkname2:"",
          drinkprice2:"",
          drinkname3:"",
          findname:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.selectByDrinkName = this.selectByDrinkName.bind(this);
        this.selectByDrinkPrice = this.selectByDrinkPrice.bind(this);
        this.insertDrink = this.insertDrink.bind(this);
        this.updateDrink = this.updateDrink.bind(this);
        this.deleteDrink = this.deleteDrink.bind(this);
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
    
    async searchAllDrink() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Drink", {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Drink => {
            lists += `<li>Drink Name: ${Drink.Drink_Name} | Drink Price: ${Drink.Drink_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("allDrink").innerHTML = lists;
        return lists;
    }
    async selectByDrinkName() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Drinkname/" + this.state.name, {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Drink => {
            lists += `<li>Drink Name: ${Drink.Drink_Name} | Drink Price: ${Drink.Drink_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("byDrinkName").innerHTML = lists;
        return lists;
    }
    async selectByDrinkPrice() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Drinkprice/" + this.state.price, {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Drink => {
            lists += `<li>Drink Name: ${Drink.Drink_Name} | Drink Price: ${Drink.Drink_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("byDrinkPrice").innerHTML = lists;
        return lists;
    }
    async insertDrink() {
        let info = {
            Drink_Name: this.state.drinkname1,
            Drink_Price: this.state.drinkprice1
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/insert&/Drink", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res);
        document.getElementById("insertDrinkResult").innerHTML = res.message;
        return res.message;
    }
    async updateDrink() {
        let info = {
            Drink_Name: this.state.drinkname2,
            Drink_Price: this.state.drinkprice2
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/update&/Drink/" + this.state.drinkname2, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res)
        document.getElementById("updateDrinkResult").innerHTML = res.message;
        return res.message
    }
    async deleteDrink() {
        const res = await (await fetch("http://localhost:3030/admin/delete&/Drink/" + this.state.drinkname3, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Drink_Name: this.state.drinkname3, dummy: "test"})
        })).json();
        console.log(res)
        document.getElementById("deleteDrinkResult").innerHTML = res.message;
        return res.message;
    }
    async selectByfindname() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Drinkname/" + this.state.findname, {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Drink => {
            localStorage.setItem("productName", Drink.Drink_Name);
            localStorage.setItem("productPrice", Drink.Drink_Price);
            // lists += `<li>Drink Name: ${Drink.Drink_Name} | Drink Price: ${Drink.Drink_Price}</li>`
            window.location.assign("http://localhost:3000/results");
        });
        
    }
    render()
    {
        return(
        <div>
            <H1Style>Drink Section</H1Style>
            <DivStyle>
                <LabelStyle>
                <h1>Search all!</h1>
                <p>Search All Drinks in database.</p>
                <Button type = "submit" value = "Search" onClick = {this.searchAllDrink}>Search</Button>
                <div id = "allDrink"></div>
                </LabelStyle>
            </DivStyle>   

            <DivStyle>
                <LabelStyle>
                <h1>Input drink name.</h1>
                <p>Input drink Name to find more information.</p>
                <input type="text" name="name" className="form-control" value = {this.state.name} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Search" onClick = {this.selectByDrinkName}>Search</Button>
                <div id = "byDrinkName"></div>
                </LabelStyle>
            </DivStyle> 
            <DivStyle>
                <LabelStyle>
                <h1>Input information of drink.</h1>
                <p>Input Drink Price to find more information.</p>
                <input type="text" name="price" className="form-control" value = {this.state.price} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Search" onClick = {this.selectByDrinkPrice}>Search</Button>
                <div id = "byDrinkPrice"></div>
                </LabelStyle>
            </DivStyle>   
            <DivStyle>
                <LabelStyle><br/>
                <h1>Insert drink information.</h1>
                <p>Fill in the information to insert a new drink into database.</p>
                Drink Name:<input type="text" name="drinkname1" className="form-control" value = {this.state.drinkname1} onChange = {this.handleChange}/>
                Drink Price:<input type="text" name="drinkprice1" className="form-control" value = {this.state.drinkprice1} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Insert" onClick = {this.insertDrink}>Search</Button>
                <div id = "insertDrinkResult"></div>
                </LabelStyle>
            </DivStyle>  
            <DivStyle>
                <LabelStyle><br/>
                <h1>Update Drink information.</h1>
                <p>Input the Drink Name, then fill the drink price to update the information.</p>
                Drink Name:<input type="text" name="drinkname2" className="form-control" value = {this.state.drinkname2} onChange = {this.handleChange}/>
                Drink Price:<input type="text" name="drinkprice2" className="form-control" value = {this.state.drinkprice2} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Insert" onClick = {this.updateDrink}>Search</Button>
                <div id = "updateDrinkResult"></div>
                </LabelStyle>
            </DivStyle>
            <DivStyle>
                <LabelStyle><br/>
                <h1>Delete information.</h1>
                <p>Input the Drink Name that you want to delete.</p>
                <input type="text" name="drinkname3" className="form-control" value = {this.state.drinkname3} onChange = {this.handleChange}/>
                <Button type = "submit" value = "Insert" onClick = {this.deleteDrink}>Search</Button>
                <div id = "deleteDrinkResult"></div>
                </LabelStyle>
            </DivStyle>    
            <DivStyle>
                    <LabelStyle>
                    <h1>go to the page for the information</h1>
                    <p>Input the drink name to know you want (you can find the userID by use select all function above)</p>
                    <input type="text" name="findname" className="form-control" value = {this.state.findname} onChange = {this.handleChange}/>
                    <br/>
                    <Button type = "submit" value = "Search" onClick = {this.selectByfindname}>Search</Button>
                    </LabelStyle>
                </DivStyle> 
        </div>    
        );
    }
}

export default DrinkSection;