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



const LabelStyle = styled.label`
    margin: 30px 20px;
`;

class FoodSection extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          price: "",
          foodname1:"",
          foodprice1:"",
          foodname2:"",
          foodprice2:"",
          foodname3:"",
          findname:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.selectByFoodName = this.selectByFoodName.bind(this);
        this.selectByFoodPrice = this.selectByFoodPrice.bind(this);
        this.insertFood = this.insertFood.bind(this);
        this.updateFood = this.updateFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
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
    async searchAllFood() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Food", {
            method: 'GET'
        })).json();
        console.log(res);
        let lists = `<ul>`;
        res.data.forEach(Food => {
            lists += `<li>Food Name: ${Food.Food_Name} | Food Price: ${Food.Food_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("allFood").innerHTML = lists;
        return lists;

    }
    async selectByFoodName() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Foodname/" + this.state.name, {
            method: 'GET'
        })).json();
        console.log(res.data);
        let lists = `<ul>`;
        res.data.forEach(Food => {
            lists += `<li>Food Name: ${Food.Food_Name} | Food Price: ${Food.Food_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("byFoodName").innerHTML = lists;
        return lists;

    }
    async selectByFoodPrice() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Foodprice/" + this.state.price, {
            method: 'GET'
        })).json();
        console.log(res.data);
        let lists = `<ul>`;
        res.data.forEach(Food => {
            lists += `<li>Food Name: ${Food.Food_Name} | Food Price: ${Food.Food_Price}</li>`
        });
        lists += `</ul>`;
        document.getElementById("byFoodPrice").innerHTML = lists;
        return lists;

    }
    async insertFood() {
        let info = {
            Food_Name: this.state.foodname1,
            Food_Price: this.state.foodprice1
        };
        console.log(info);
        const res = await (await fetch("http://localhost:3030/admin/insert&/Food", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res);
        document.getElementById("insertFoodResult").innerHTML = res.message;
        return res.message;

    }
    async updateFood() {
        let info = {
            Food_Name: this.state.foodname2,
            Food_Price: this.state.foodprice2
        };
        console.log(info)
        const res = await (await fetch("http://localhost:3030/admin/update&/Food/" + this.state.foodname2, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })).json();
        console.log(res)
        document.getElementById("updateFoodResult").innerHTML = res.message;
        return res.message;

    }

    async deleteFood() {
        const res = await (await fetch("http://localhost:3030/admin/delete&/Food/" + this.state.foodname3, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Food_Name: this.state.foodname3, dummy: "test"})
        })).json();
        console.log(res)
        document.getElementById("deleteFoodResult").innerHTML = res.message;
        return res.message;

    }
    async selectByfindname() {
        const res = await (await fetch("http://localhost:3030/admin/search&/Foodname/" + this.state.findname, {
            method: 'GET'
        })).json();
        console.log(res.data);
  
        res.data.forEach(Food => {
            localStorage.setItem("productName", Food.Food_Name);
            localStorage.setItem("productPrice", Food.Food_Price);
            
        });
  
        window.location.assign("http://localhost:3000/results");

    }
    render()
    {
        return(
            <div>
                <H1Style>Food Section</H1Style>


                <DivStyle>
                        <LabelStyle>
                        <h1>Search all!</h1>
                        <p>Search All Foods in database.</p>
                        <Button type = "submit" value = "Search" onClick = {this.searchAllFood}>Search</Button>
                        <div id = "allFood"></div>
                        </LabelStyle>
                </DivStyle>   
                <DivStyle>
                        <LabelStyle>
                        <h1>Input food name.</h1>
                        <p>Input Food Name to find more information.</p>
                        <input type="text" name="name" className="form-control" value = {this.state.name} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Search" onClick = {this.selectByFoodName}>Search</Button>
                        <div id = "byFoodName"></div>
                        </LabelStyle>
                </DivStyle>   
                <DivStyle>
                        <LabelStyle>
                        <h1>Input information of food.</h1>
                        <p>Input Food Price to find more information.</p>
                        <input type="text" name="price" className="form-control" value = {this.state.price} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Find" onClick = {this.selectByFoodPrice}>Search</Button>
                        <div id = "byFoodPrice"></div>
                        </LabelStyle>
                </DivStyle>   
                <DivStyle>
                        <LabelStyle><br/>
                        <h1>Insert food information.</h1>
                        <p>Fill in the information to insert a new food into database.</p>
                        Food Name:<input type="text" name="foodname1" className="form-control" value = {this.state.foodname1} onChange = {this.handleChange}/>
                        Food Price:<input type="text" name="foodprice1" className="form-control" value = {this.state.foodprice1} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Insert" onClick = {this.insertFood}>Search</Button>
                        <div id = "insertFoodResult"></div>
                        </LabelStyle>
                </DivStyle>  
                <DivStyle>
                        <LabelStyle><br/>
                        <h1>Update food information.</h1>
                        <p>Input the Food Name, then fill the food price to update the information.:</p>
                        Food Name:<input type="text" name="foodname2" className="form-control" value = {this.state.foodname2} onChange = {this.handleChange}/>
                        Food Price:<input type="text" name="foodprice2" className="form-control" value = {this.state.foodprice2} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Insert" onClick = {this.updateFood}>Search</Button>
                        <div id = "updateFoodResult"></div>
                        </LabelStyle>
                </DivStyle>  
                <DivStyle>
                        <LabelStyle><br/>
                        <h1>Delete information.</h1>
                        <p>Input the Food Name that you want to delete.</p>
                        <input type="text" name="foodname3" className="form-control" value = {this.state.foodname3} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Insert" onClick = {this.deleteFood}>Search</Button>
                        <div id = "deleteFoodResult"></div>

                <DivStyle>
                        <LabelStyle>
                        <h1>Search all!</h1>
                        <p>Search All Foods in database.</p>
                        <Button type = "submit" value = "Search" onClick = {this.searchAllFood}>Search</Button>
                        <div id = "allFood"></div>
                        </LabelStyle>
                </DivStyle>   
                <DivStyle>
                        <LabelStyle>
                        <h1>Input food name.</h1>
                        <p>Input Food Name to find more information.</p>
                        <input type="text" name="name" className="form-control" value = {this.state.name} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Search" onClick = {this.selectByFoodName}>Search</Button>
                        <div id = "byFoodName"></div>
                        </LabelStyle>
                </DivStyle>   
                <DivStyle>
                        <LabelStyle>
                        <h1>Input information of food.</h1>
                        <p>Input Food Price to find more information.</p>
                        <input type="text" name="price" className="form-control" value = {this.state.price} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Find" onClick = {this.selectByFoodPrice}>Search</Button>
                        <div id = "byFoodPrice"></div>
                        </LabelStyle>
                </DivStyle>   
                <DivStyle>
                        <LabelStyle><br/>
                        <h1>Insert food information.</h1>
                        <p>Fill in the information to insert a new food into database.</p>
                        Food Name:<input type="text" name="foodname1" className="form-control" value = {this.state.foodname1} onChange = {this.handleChange}/>
                        Food Price:<input type="text" name="foodprice1" className="form-control" value = {this.state.foodprice1} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Insert" onClick = {this.insertFood}>Search</Button>
                        <div id = "insertFoodResult"></div>
                        </LabelStyle>
                </DivStyle>  
                <DivStyle>
                        <LabelStyle><br/>
                        <h1>Update food information.</h1>
                        <p>Input the Food Name, then fill the food price to update the information.:</p>
                        Food Name:<input type="text" name="foodname2" className="form-control" value = {this.state.foodname2} onChange = {this.handleChange}/>
                        Food Price:<input type="text" name="foodprice2" className="form-control" value = {this.state.foodprice2} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Insert" onClick = {this.updateFood}>Search</Button>
                        <div id = "updateFoodResult"></div>
                        </LabelStyle>
                </DivStyle>  
                <DivStyle>
                        <LabelStyle><br/>
                        <h1>Delete information.</h1>
                        <p>Input the Food Name that you want to delete.</p>
                        <input type="text" name="foodname3" className="form-control" value = {this.state.foodname3} onChange = {this.handleChange}/>
                        <Button type = "submit" value = "Insert" onClick = {this.deleteFood}>Search</Button>
                        <div id = "deleteFoodResult"></div>
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

export default FoodSection;