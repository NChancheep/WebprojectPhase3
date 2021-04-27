async function regis(username, password, firstname, lastname, address, age, email) {
    //event.preventDefault();
    let info = {
        username: username, //localhost
        password: password, //1234
        firstname: firstname,//setsuna
        lastname: lastname, //seiei
        address: address, //japan
        age: age, //20
        email: email //gundamOO@gmail.com
    }
    const res = await (await fetch("http://localhost:3030/register/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })).json();
    console.log(res);
    
    if (res.error) {
        alert("Username or password Incorrect");
    }
    else{
        alert("Created account successfully.");
        location.replace("HtmlLoginpage.html");
    }
}