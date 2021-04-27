async function userLogin(username, password) {
    // event.preventDefault();
    let info = {
        username: username, //apadij
        password: password //itcs212_1
    }
    const res = await (await fetch("http://localhost:3030/userlogin/", {
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
        alert("Welcome back "+res.data.firstname+" "+res.data.lastname);
        location.replace("HtmlAccountpage.html");
    }
}
//sync data to recive infomation from user input  (username, password)
async function adminLogin(username, password) {
    // event.preventDefault();
    let info = {
        username: username, //LeviAKM
        password: password //2512820
    }
    console.log(username, password);
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
        location.replace("HtmlAdminpage.html");
    }
}