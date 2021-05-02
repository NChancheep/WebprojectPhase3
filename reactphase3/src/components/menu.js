
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

const FormStyle = styled.form`
    display: flex;
    background-color: lightgray;
`;

const LabelStyle = styled.label`
    margin: 30px 20px;
`;

const UnListStyle = styled.ul`
    list-style-type: none;
    display: flex;
`;

const ListStyle = styled.li`
    display: block;
    padding: 14px 20px;
`;

class Food extends React.Component
{
    render()
    {
        return(
            <div>
                {
                    this.props.foods && this.props.foods.map((food) =>
                    {
                        return <UnListStyle>
                            <ListStyle><img src = {food.image} alt = {food.title}/></ListStyle>
                            <ListStyle>{food.title}</ListStyle>
                            <br/>
                        </UnListStyle>
                    })
                }
            </div>
        );
    }
}

class Menu extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            search: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SearchMenu = this.SearchMenu.bind(this);
    }

    handleChange(e) 
    {
        const target = e.target;
        const value = target.value;
        const elementname = target.name;
        this.setState(
        {
            [elementname]: value,
        });
    }

    handleSubmit(e) 
    {
        e.preventDefault();
    }

    render()
    {
        return (
            <div>
                <DivStyle>
                    <H1Style>Explore Menu</H1Style>
                    <FormStyle onSubmit = {this.handleSubmit}>
                        <LabelStyle>Are you looking for food?:
                            <input 
                                type = "text"
                                name = "search" 
                                id = "search"
                                value = {this.state.search}
                                onChange = {this.handleChange}
                            />
                            <input type = "submit" value = "Search" onClick = {this.SearchMenu}/>
                        </LabelStyle>
                    </FormStyle>
                </DivStyle>
                <Food foods = {this.state.foods}/>                           
                <input type = "submit" value = "Search" onClick = {this.searchAllUser}/>
            </div>
        );
    }

    SearchMenu()
    {
        let APi_key = "ff193ccdd41342fa952608615338642e";

        fetch("https://api.spoonacular.com/food/menuItems/search?apiKey=" + APi_key + "&query=" + this.state.search,
        {
            method: "GET",
            headers:
            {
                "content-type": "application/json",
                "accept": "application/json"
            },
        }).then((response) => response.json()).then((response) =>
        {
            // console.log(response);
            this.setState(
            {
                foods: response.menuItems
            });
        }).catch((err) => console.log(err));
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
        return lists;
        
    }
}

=======
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

const FormStyle = styled.form`
    display: flex;
    background-color: lightgray;
`;

const LabelStyle = styled.label`
    margin: 30px 20px;
`;

const UnListStyle = styled.ul`
    list-style-type: none;
    display: flex;
`;

const ListStyle = styled.li`
    display: block;
    padding: 14px 20px;
`;

class Food extends React.Component
{
    render()
    {
        return(
            <div>
                {
                    this.props.foods && this.props.foods.map((food) =>
                    {
                        return <UnListStyle>
                            <ListStyle><img src = {food.image} alt = {food.title}/></ListStyle>
                            <ListStyle>{food.title}</ListStyle>
                            <br/>
                        </UnListStyle>
                    })
                }
            </div>
        );
    }
}

class Menu extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            search: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SearchMenu = this.SearchMenu.bind(this);
    }

    handleChange(e) 
    {
        const target = e.target;
        const value = target.value;
        const elementname = target.name;
        this.setState(
        {
            [elementname]: value,
        });
    }

    handleSubmit(e) 
    {
        e.preventDefault();
    }

    render()
    {
        return (
            <div>
                <DivStyle>
                    <H1Style>Explore Menu</H1Style>
                    <FormStyle onSubmit = {this.handleSubmit}>
                        <LabelStyle>Are you looking for food?:
                            <input 
                                type = "text"
                                name = "search" 
                                id = "search"
                                value = {this.state.search}
                                onChange = {this.handleChange}
                            />
                            <input type = "submit" value = "Search" onClick = {this.SearchMenu}/>
                        </LabelStyle>
                    </FormStyle>
                </DivStyle>
                <Food foods = {this.state.foods}/>                           
                <input type = "submit" value = "Search" onClick = {this.searchAllUser}/>
            </div>
        );
    }

    SearchMenu()
    {
        let APi_key = "ff193ccdd41342fa952608615338642e";

        fetch("https://api.spoonacular.com/food/menuItems/search?apiKey=" + APi_key + "&query=" + this.state.search,
        {
            method: "GET",
            headers:
            {
                "content-type": "application/json",
                "accept": "application/json"
            },
        }).then((response) => response.json()).then((response) =>
        {
            // console.log(response);
            this.setState(
            {
                foods: response.menuItems
            });
        }).catch((err) => console.log(err));
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
        return lists;
        
    }
}

export default Menu;