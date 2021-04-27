//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function myFunction(){
    const adminlogin = localStorage.getItem('admin');
  if(adminlogin)
  {
    const fName = localStorage.getItem('firstname');
    const lName = localStorage.getItem('lastname');
    const Email = localStorage.getItem('email');
   
    const address = localStorage.getItem('address');
   
    const age = localStorage.getItem('age');

  }
  else{
    alert("login first");
        location.replace("HtmlLoginpage.html");
  }
}
//User
//fetch url to pull list information user/
async function searchAllUser() {
    const res = await (await fetch("http://localhost:3030/admin/search&/User", {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(user => {
        lists += `<li>User ID: ${user.login_id} | Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}</li>`
    });
    lists += `</ul>`;
    document.getElementById("allUser").innerHTML = lists;
}

async function selectByUserId(id) {
    const res = await (await fetch("http://localhost:3030/admin/search&/User/" + id, {
        method: 'GET'
    })).json();
    console.log(res);
    let user = res.data;
    document.getElementById("byUserId").innerHTML = `Username: ${user.username} | Role: ${user.role} | Log: ${user.log} | [Name: ${user.firstname} ${user.lastname}] | Address: ${user.address} | Age: ${user.age} | Preferences: ${user.preferences} | Email: ${user.email}`;
}
//recive info what user input from system
async function insertUser(us,pw,fname,lname,adrs,yo,pref,mail) {
    let info = {
        username: us,
        password: pw,
        firstname: fname,
        lastname: lname,
        address: adrs,
        age: yo,
        preferences: pref,
        email: mail
    };
    console.log(info)
    const res = await (await fetch("http://localhost:3030/admin/insert&/User", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })).json();
    console.log(res);
    document.getElementById("insertUserResult").innerHTML = res.message;
}
//update info user from system
async function updateUser(id,us,pw,fname,lname,adrs,yo,pref,mail) {
    let info = {
        login_id: id,
        username: us,
        password: pw,
        firstname: fname,
        lastname: lname,
        address: adrs,
        age: yo,
        preferences: pref,
        email: mail
    };
    console.log(info)
    const res = await (await fetch("http://localhost:3030/admin/update&/User/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })).json();
    console.log(res)
    document.getElementById("updateUserResult").innerHTML = res.message;
}
//delete user from system
async function deleteUser(id) {
    const res = await (await fetch("http://localhost:3030/admin/delete&/User/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login_id: id, dummy: "test"})
    })).json();
    console.log(res)
    document.getElementById("deleteUserResult").innerHTML = res.message;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Food

async function searchAllFood() {
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
}

async function selectByFoodName(name) {
    const res = await (await fetch("http://localhost:3030/admin/search&/Foodname/" + name, {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(Food => {
        lists += `<li>Food Name: ${Food.Food_Name} | Food Price: ${Food.Food_Price}</li>`
    });
    lists += `</ul>`;
    document.getElementById("byFoodName").innerHTML = lists;
}

async function selectByFoodPrice(price) {
    const res = await (await fetch("http://localhost:3030/admin/search&/Foodprice/" + price, {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(Food => {
        lists += `<li>Food Name: ${Food.Food_Name} | Food Price: ${Food.Food_Price}</li>`
    });
    lists += `</ul>`;
    document.getElementById("byFoodPrice").innerHTML = lists;
}

async function insertFood(name,price) {
    let info = {
        Food_Name: name,
        Food_Price: price
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
}

async function updateFood(name,price) {
    let info = {
        Food_Name: name,
        Food_Price: price
    };
    console.log(info)
    const res = await (await fetch("http://localhost:3030/admin/update&/Food/" + name, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })).json();
    console.log(res)
    document.getElementById("updateFoodResult").innerHTML = res.message;
}

async function deleteFood(name) {
    const res = await (await fetch("http://localhost:3030/admin/delete&/Food/" + name, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Food_Name: name, dummy: "test"})
    })).json();
    console.log(res)
    document.getElementById("deleteFoodResult").innerHTML = res.message;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Drink

async function searchAllDrink() {
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
}

async function selectByDrinkName(name) {
    const res = await (await fetch("http://localhost:3030/admin/search&/Drinkname/" + name, {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(Drink => {
        lists += `<li>Drink Name: ${Drink.Drink_Name} | Drink Price: ${Drink.Drink_Price}</li>`
    });
    lists += `</ul>`;
    document.getElementById("byDrinkName").innerHTML = lists;
}

async function selectByDrinkPrice(price) {
    const res = await (await fetch("http://localhost:3030/admin/search&/Drinkprice/" + price, {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(Drink => {
        lists += `<li>Drink Name: ${Drink.Drink_Name} | Drink Price: ${Drink.Drink_Price}</li>`
    });
    lists += `</ul>`;
    document.getElementById("byDrinkPrice").innerHTML = lists;
}

async function insertDrink(name,price) {
    let info = {
        Drink_Name: name,
        Drink_Price: price
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
}

async function updateDrink(name,price) {
    let info = {
        Drink_Name: name,
        Drink_Price: price
    };
    console.log(info)
    const res = await (await fetch("http://localhost:3030/admin/update&/Drink/" + name, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })).json();
    console.log(res)
    document.getElementById("updateDrinkResult").innerHTML = res.message;
}

async function deleteDrink(name) {
    const res = await (await fetch("http://localhost:3030/admin/delete&/Drink/" + name, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Drink_Name: name, dummy: "test"})
    })).json();
    console.log(res)
    document.getElementById("deleteDrinkResult").innerHTML = res.message;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Dessert

async function searchAllDessert() {
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
}

async function selectByDessertName(name) {
    const res = await (await fetch("http://localhost:3030/admin/search&/Dessertname/" + name, {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(Dessert => {
        lists += `<li>Dessert Name: ${Dessert.Dessert_Name} | Dessert Price: ${Dessert.Dessert_Price}</li>`
    });
    lists += `</ul>`;
    document.getElementById("byDessertName").innerHTML = lists;
}

async function selectByDessertPrice(price) {
    const res = await (await fetch("http://localhost:3030/admin/search&/Dessertprice/" + price, {
        method: 'GET'
    })).json();
    console.log(res);
    let lists = `<ul>`;
    res.data.forEach(Dessert => {
        lists += `<li>Dessert Name: ${Dessert.Dessert_Name} | Dessert Price: ${Dessert.Dessert_Price}</li>`
    });
    lists += `</ul>`;
    document.getElementById("byDessertPrice").innerHTML = lists;
}

async function insertDessert(name,price) {
    let info = {
        Dessert_Name: name,
        Dessert_Price: price
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
}

async function updateDessert(name,price) {
    let info = {
        Dessert_Name: name,
        Dessert_Price: price
    };
    console.log(info)
    const res = await (await fetch("http://localhost:3030/admin/update&/Dessert/" + name, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })).json();
    console.log(res)
    document.getElementById("updateDessertResult").innerHTML = res.message;
}

async function deleteDessert(name) {
    const res = await (await fetch("http://localhost:3030/admin/delete&/Dessert/" + name, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Dessert_Name: name, dummy: "test"})
    })).json();
    console.log(res)
    document.getElementById("deleteDessertResult").innerHTML = res.message;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------