const express = require('express');
const router = express.Router();
const app = express();
const mysql = require('mysql2');
const bp = require('body-parser');
const cors = require("cors");
app.use(cors());

var session = require('express-session');
var path = require('path');

require('dotenv').config();
const port = 3030;

app.listen(port, () => console.log(`listening on port ${port}!`));
app.use("/", router);
router.use(bp.json());

app.get('/', (req,res) => {res.send('hello from backend server')})
// Setting up the public directory
app.use('/public', express.static('sec1_gr5_src'));

let dbConn = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

dbConn.connect((err) => {
	if (err) throw err;
	console.log("Database connected");
})

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bp.urlencoded({
	extended: true
}));
app.use(bp.json());

//apadij
//itcs212_1
app.post('/userlogin', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	console.log(username, password);
	if (!username) {
		return res.status(400).send({
			error: true,
			message: 'Please provide username.'
		});
	}
	if (!password) {
		return res.status(400).send({
			error: true,
			message: 'Please provide password.'
		});
	}
	dbConn.query('SELECT * FROM Login_Information WHERE username = ? AND password = ?', [username, password], function (error, results) {
		if (error) throw error;
		if (results.length > 0) {
			console.log(results);
			console.log();
			return res.send({
				error: false,
				data: results[0],
				message: 'User retrieved'
			});
		} else {
			console.log(results);
			return res.send({
				error: true,
				data: results[0],
				message: 'ERROR'
			});
		}
	});
});
//select admin information
app.post('/adminlogin', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	console.log(req.body.info);
	console.log(username, password);
	if (!username) {
		return res.status(400).send({
			error: true,
			message: 'Please provide username.'
		});
	}
	if (!password) {
		return res.status(400).send({
			error: true,
			message: 'Please provide password.'
		});
	}
	dbConn.query('SELECT * FROM Admin_Information WHERE username = ? AND password = ?', [username, password], function (error, results) {
		if (error) throw error;
		if (results.length > 0) {
			console.log(results);
			console.log();
			return res.send({
				error: false,
				data: results[0],
				message: 'User retrieved'
			});
		} else {
			console.log(results);
			return res.send({
				error: true,
				data: results[0],
				message: 'ERROR'
			});
		}
	});
});


app.post('/register', function (req, res, next) {

	
	inputData = {
		username: req.body.username,
		password: req.body.password,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		address: req.body.address,
		age: req.body.age,
		email: req.body.email
	}
	console.log(inputData);
	// check unique email address
	var sql = 'SELECT * FROM Login_Information WHERE email =?';
	dbConn.query(sql, [inputData.email], function (err, results) {
		if (err) throw err
		if (results.length > 1) {
			//var msg = inputData.email_address + "was already exist";
			return res.send({
				error: false,
				message: inputData.email + 'was already exist'
			});
		}  else {
			// save users data into database
			var sql = 'INSERT INTO Login_Information SET ?';
			dbConn.query(sql, inputData, function (err, results) {
				if (err) throw err;
				return res.send({
					error: false,
					data: results.affectedRows,
					message: 'Your are successfully registered.'
				}); 
			});
			//var msg = "Your are successfully registered";
		}
	})
});
///select foodname from sql
router.get('/search&/Food/:name',function(req,res){
    let Food_Name = req.params.name;
    if(!Food_Name) 
    {
        return res.status(400).send({error: true, message:'Please provide product name.'});
    }
	var sql = `SELECT Food_Name FROM Food WHERE Food_Name LIKE '%${Food_Name}%' order by Food_Name`;
    dbConn.query(sql,function(error,results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({error:false,data:results,message:'Product retrssieved'});
    });                                                                                                                                               
});
///select foodprice from sql
router.get('/search&/Food_Price/:price',function(req,res){
    let Food_Price = req.params.price;
    if(!Food_Price) 
    {
        return res.status(400).send({error: true, message:'Please provide product price.'});
    }
	dbConn.query('SELECT * FROM Food WHERE Food_Price=? order by Food_Price', Food_Price, function (error, results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({error:false,data:results,message:'Product retrssieved'});
    });                                                                                                                                               
});

///select all foodname from sql
router.get('/search&/Food',function(req,res){
    dbConn.query('SELECT Food_Name FROM Food',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Food.'});
    });                                                                                                                                             
});
///select all foodPrice from sql
router.get('/search&/Food_Price',function(req,res){
    dbConn.query('SELECT Food_Price,Food_Name FROM Food',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Food.'});
    });                                                                                                                                             
});

///select drinkname from sql
router.get('/search&/Drink/:name',function(req,res){
    let Drink_Name = req.params.name;
    if(!Drink_Name) 
    {
        return res.status(400).send({error: true, message:'Please provide product name.'});
    }
	var sql = `SELECT Drink_Name FROM Drink WHERE Drink_Name LIKE '%${Drink_Name}%' order by Drink_Name`;
    dbConn.query(sql,function(error,results)
    {
        if(error) throw error;
        console.log(results);
        return res.send({error:false,data:results,message:'Product retrssieved'});
    });                                                                                                                                               
});
///select drinkprice from sql
router.get('/search&/Drink_Price/:price',function(req,res){
    let Drink_Price = req.params.price;
    if(!Drink_Price) 
    {
        return res.status(400).send({error: true, message:'Please provide product price.'});
    }
	dbConn.query('SELECT * FROM Drink WHERE Drink_Price=? order by Drink_Price', Drink_Price, function (error, results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({error:false,data:results,message:'Product retrssieved'});
    });                                                                                                                                               
});
///select all drinkname from sql
router.get('/search&/Drink',function(req,res){
    dbConn.query('SELECT Drink_Name FROM Drink',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Drink.'});
    });                                                                                                                                             
});
///select all drinkPrice from sql
router.get('/search&/Drink_Price',function(req,res){
    dbConn.query('SELECT Drink_Price,Drink_Name FROM Drink',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Drink.'});
    });                                                                                                                                             
});

///select dessertname from sql
router.get('/search&/Dessert/:name',function(req,res){
    let Dessert_Name = req.params.name;
    if(!Dessert_Name) 
    {
        return res.status(400).send({error: true, message:'Please provide product name.'});
    }

	var sql = `SELECT Dessert_Name FROM Dessert WHERE Dessert_Name LIKE '%${Dessert_Name}%' order by Dessert_Name`;
    dbConn.query(sql,function(error,results)
    {
        if(error) throw error;
        console.log(results);
        return res.send({error:false,data:results,message:'Product retrssieved'});
    });                                                                                                                                               
});
///select dessertprice from sql
router.get('/search&/Dessert_Price/:price',function(req,res){
    let Dessert_Price = req.params.price;
    if(!Dessert_Price) 
    {
        return res.status(400).send({error: true, message:'Please provide product price.'});
    }
	dbConn.query('SELECT * FROM Dessert WHERE Dessert_Price=? order by Dessert_Price', Dessert_Price, function (error, results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({error:false,data:results,message:'Product retrssieved'});
    });                                                                                                                                               
});
///select all dessertname from sql
router.get('/search&/Dessert',function(req,res){
    dbConn.query('SELECT Dessert_Name FROM Dessert',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Dessert.'});
    });                                                                                                                                             
});
///select all dessertPrice from sql
router.get('/search&/Dessert_Price',function(req,res){
    dbConn.query('SELECT Dessert_Price,Dessert_Name FROM Dessert',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Dessert.'});
    });                                                                                                                                             
});

//`Branch_id`, `Contact_No`, `Location`, `Name`
router.get('/search&/Branch',function(req,res){
    dbConn.query('SELECT Location FROM Branch',function(error,results){
        if (error) throw error;
        return res.send({error: false, data:results,message:'list Branch.'});
    });
});

//INSERT LOGIN USER

/*
    TEST CASE#1
    Testing Insert a User
    method: POST
    URL: http://localhost:3030/admin/insert&/User
    body: raw JSON
    {
		"username": "arnon555",
		"password": "Arnon_555",
		"firstname": "Arnon",
		"lastname": "Noonkhan",
		"address": "MUICT",
		"age": 20,
		"preferences": "Halal Food",
		"email": "arnon555@student.mahidol.ac.th"
    }
*/

/*
    TEST CASE#2
    Testing Insert a User
    method: POST
    URL: http://localhost:3030/admin/insert&/User
    body: raw JSON
    {
		"username": "jump555",
		"password": "Jump_555",
		"firstname": "Kantapong",
		"lastname": "Matangkarat",
		"address": "MUICT",
		"age": 20,
		"preferences": "Orange Soda",
		"email": "jump555@student.mahidol.ac.th"
    }
*/


app.post('/admin/insert&/User', function (req, res) {
	let info = {
		username: req.body.username,
		password: req.body.password,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		address: req.body.address,
		age: req.body.age,
		preferences: req.body.preferences,
		email: req.body.email
	}
	console.log(req.body.info);
	if (!info.username) {
		return res.status(400).send({
			error: true,
			message: 'Please provide username.'
		});
	}
	if (!info.password) {
		return res.status(400).send({
			error: true,
			message: 'Please provide password.'
		});
	}
	if (!info.firstname) {
		return res.status(400).send({
			error: true,
			message: 'Please provide firstname.'
		});
	}
	if (!info.lastname) {
		return res.status(400).send({
			error: true,
			message: 'Please provide lastname.'
		});
	}
	if (!info.age) {
		return res.status(400).send({
			error: true,
			message: 'Please provide age.'
		});
	}
	if (!info.email) {
		return res.status(400).send({
			error: true,
			message: 'Please provide email address.'
		});
	}
	dbConn.query('INSERT INTO Login_Information SET ?', info, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'New user has been created successfully.'
		});
	})
})

//UPDATE LOGIN USER

/*
    TEST CASE#1
    Testing Update a User by User's ID
    method: PUT
    URL: http://localhost:3030/admin/update&/User/6
    body: raw JSON
    {
		"username": "arnon555",
		"password": "555_Arnon_N",
		"firstname": "Arnon",
		"lastname": "Noonkhan",
		"address": "Nakhon Pathom",
		"age": 20,
		"preferences": "Halal Food",
		"email": "arnon555@student.mahidol.ac.th"
    }
*/

/*
    TEST CASE#2
    Testing Update a User by User's ID
    method: PUT
    URL: http://localhost:3030/admin/update&/User/7
    body: raw JSON
    {
		"username": "jump555",
		"password": "Jump_555",
		"firstname": "Kantapong",
		"lastname": "Matangkarat",
		"address": "Mahidol University",
		"age": 22,
		"preferences": "Lemon Soda",
		"email": "jump555@student.mahidol.ac.th"
    }
*/

app.put('/admin/update&/User/:id', function (req, res) {
	let login_id = req.params.id;
	let username = req.body.username;
	let password = req.body.password;
	let firstname = req.body.firstname;
	let lastname = req.body.lastname;
	let address = req.body.address;
	let age = req.body.age;
	let preferences = req.body.preferences;
	let email = req.body.email;
	console.log(username, password, firstname, lastname, address, age, preferences, email);
	if (!login_id) {
		return res.status(400).send({
			error: true,
			message: "Please provide user's id"
		})
	}
	if (!username) {
		return res.status(400).send({
			error: true,
			message: 'Please provide username.'
		});
	}
	if (!password) {
		return res.status(400).send({
			error: true,
			message: 'Please provide password.'
		});
	}
	if (!firstname) {
		return res.status(400).send({
			error: true,
			message: 'Please provide firstname.'
		});
	}
	if (!lastname) {
		return res.status(400).send({
			error: true,
			message: 'Please provide lastname.'
		});
	}
	if (!address) {
		return res.status(400).send({
			error: true,
			message: 'Please provide address.'
		});
	}
	if (!age) {
		return res.status(400).send({
			error: true,
			message: 'Please provide age.'
		});
	}
	if (!preferences) {
		return res.status(400).send({
			error: true,
			message: 'Please provide preferences.'
		});
	}
	if (!email) {
		return res.status(400).send({
			error: true,
			message: 'Please provide email address.'
		});
	}
	dbConn.query('UPDATE Login_Information SET username = ?, password = ?, firstname = ?, lastname = ?, address = ?, age = ?, preferences = ?, email = ? WHERE login_id = ?', [username, password, firstname, lastname, address, age, preferences, email, login_id], function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'User has been updated successfully.'
		});
	})
})

//SELECT BY USER'S LOGIN ID

/*
    TEST CASE#1
    Testing Search a User by User's ID
    method: GET
    URL: http://localhost:3030/admin/search&/User/6
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a User by User's ID
    method: GET
    URL: http://localhost:3030/admin/search&/User/7
    body: raw JSON
    {
    }
*/


app.get('/admin/search&/User/:id', function (req, res) {
	let login_id = req.params.id;
	console.log(login_id);
	if (!login_id) {
		return res.status(400).send({
			error: true,
			message: "Please provide user's login id."
		});
	}
	dbConn.query('SELECT * FROM Login_Information WHERE login_id = ?', login_id, function (error, results) {
		if (error) throw error;
		console.log(results);
		if (results.length > 0) {
			console.log(results);
			return res.send({
				error: false,
				data: results[0],
				message: 'User retrieved'
			});
		} else {
			console.log(results);
			return res.send({
				error: true,
				data: results[0],
				message: 'ERROR'
			});
		}
	})
})

//DELETE LOGIN USER

/*
    TEST CASE#1
    Testing Delete a User by User's ID
    method: DELETE
    URL: http://localhost:3030/admin/delete&/User/6
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Delete a User by User's ID
    method: DELETE
    URL: http://localhost:3030/admin/delete&/User/7
    body: raw JSON
    {
    }
*/

//admin delete data
app.delete('/admin/delete&/User/:id', function (req, res) {
	let login_id = req.params.id;
	console.log(login_id);
	if (!login_id) {
		return res.status(400).send({
			error: true,
			message: "Please provide user's id."
		});
	}
	dbConn.query('DELETE FROM Login_Information WHERE login_id = ?', login_id, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results[0],
			message: 'User has been deleted successfully.'
		});
	})
})

//SELECT ALL LOGIN USER

/*
    TEST CASE#1
    Testing Search All Users
    method: GET
    URL: http://localhost:3030/admin/search&/User
    body: raw JSON
    {
    }
*/

//result all user 
app.get('/admin/search&/User', function (req, res) {
	dbConn.query('SELECT * FROM Login_Information', function(error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'User List'
		});
	})
})

//-----------------------------------------------------------------------------------------------------------------------------------

//INSERT FOOD

/*
    TEST CASE#1
    Testing Insert a Food
    method: POST
    URL: http://localhost:3030/admin/insert&/Food
    body: raw JSON
    {
		"Food_Name": "Chancheep Hamburger",
    	"Food_Price": 250
    }
*/

/*
    TEST CASE#2
    Testing Insert a Food
    method: POST
    URL: http://localhost:3030/admin/insert&/Food
    body: raw JSON
    {
		"Food_Name": "Kittitad Max Seafood",
    	"Food_Price": 500
    }
*/

//add new data of food
app.post('/admin/insert&/Food', function (req, res) {
	let info = {
		Food_Name: req.body.Food_Name,
		Food_Price: req.body.Food_Price
	}
	console.log(req.body.info);
	if (!info.Food_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide food name.'
		});
	}
	if (!info.Food_Price) {
		return res.status(400).send({
			error: true,
			message: 'Please provide food price.'
		});
	}
	dbConn.query('INSERT INTO Food SET ?', info, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Food has been created successfully.'
		});
	})
})

//UPDATE FOOD

/*
    TEST CASE#1
    Testing Update a Food
    method: PUT
    URL: http://localhost:3030/admin/update&/Food/Chancheep Hamburger
    body: raw JSON
    {
		"Food_Name": "Chancheep Hamburger",
    	"Food_Price": 300
    }
*/

/*
    TEST CASE#2
    Testing Update a Food
    method: PUT
    URL: http://localhost:3030/admin/update&/Food/Kittitad Max Seafood
    body: raw JSON
    {
		"Food_Name": "Kittitad Max Seafood",
    	"Food_Price": 650
    }
*/

//update data of food
app.put('/admin/update&/Food/:name', function (req, res) {
	let Food_Name = req.params.name;
	let Food_Price = req.body.Food_Price;
	console.log(Food_Name, Food_Price);
	if (!Food_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide food name.'
		});
	}
	if (!Food_Price) {
		return res.status(400).send({
			error: true,
			message: 'Please provide food price.'
		});
	}
	dbConn.query('UPDATE Food SET Food_Price = ? WHERE Food_Name = ?', [Food_Price , Food_Name], function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Food has been updated successfully.'
		});
	})
})

//SELECT BY FOOD NAME

/*
    TEST CASE#1
    Testing Search a Food by Food's Name
    method: GET
    URL: http://localhost:3030/admin/search&/Foodname/Chancheep Hamburger
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a Food by Food's Name
    method: GET
    URL: http://localhost:3030/admin/search&/Foodname/Kittitad
    body: raw JSON
    {
    }
*/

//select food by name like
app.get('/admin/search&/Foodname/:name', function (req, res) {
	let Food_Name = req.params.name;
    if(!Food_Name) 
    {
        return res.status(400).send({
			error: true, 
			message:'Please provide food name.'
		});
    }
	var sql = `SELECT * FROM Food WHERE Food_Name LIKE '%${Food_Name}%' order by Food_Name`;
    dbConn.query(sql,function(error,results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({
			error: false,
			data: results,
			message:'Food retrieved'
		});
    })
})

//SELECT BY FOOD PRICE

/*
    TEST CASE#1
    Testing Search a Food by Food's Price
    method: GET
    URL: http://localhost:3030/admin/search&/Foodprice/300
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a Food by Food's Price
    method: GET
    URL: http://localhost:3030/admin/search&/Foodprice/650
    body: raw JSON
    {
    }
*/

//select food by price
app.get('/admin/search&/Foodprice/:price', function (req, res) {
	let Food_Price = req.params.price;
    if(!Food_Price) 
    {
        return res.status(400).send({
			error: true, 
			message:'Please provide food price.'
		});
    }
	dbConn.query('SELECT * FROM Food WHERE Food_Price=? order by Food_Price', Food_Price, function (error, results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({
			error:false,
			data:results,
			message:'Food retrieved'
		});
    })
})

//DELETE FOOD

/*
    TEST CASE#1
    Testing Delete a Food
    method: DELETE
    URL: http://localhost:3030/admin/delete&/Food/Chancheep Hamburger
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Delete a Food
    method: DELETE
    URL: http://localhost:3030/admin/delete&/Food/Kittitad Max Seafood
    body: raw JSON
    {
    }
*/

//delete food
app.delete('/admin/delete&/Food/:name', function (req, res) {
	let Food_Name = req.params.name;
	console.log(Food_Name);
	if (!Food_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide food name.'
		});
	}
	dbConn.query('DELETE FROM Food WHERE Food_Name = ?', Food_Name, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results[0],
			message: 'Food has been deleted successfully.'
		});
	})
})

//SELECT ALL FOOD

/*
    TEST CASE#1
    Testing Search All Foods
    method: GET
    URL: http://localhost:3030/admin/search&/Food
    body: raw JSON
    {
    }
*/

//result all food list
app.get('/admin/search&/Food', function (req, res) {
	dbConn.query('SELECT * FROM Food', (error, results) => {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Food List'
		});
	})
})

//-----------------------------------------------------------------------------------------------------------------------------------

//INSERT DRINK

/*
    TEST CASE#1
    Testing Insert a Drink
    method: POST
    URL: http://localhost:3030/admin/insert&/Drink
    body: raw JSON
    {
		"Drink_Name": "Iced Marufkhan",
    	"Drink_Price": 150
    }
*/

/*
    TEST CASE#2
    Testing Insert a Drink
    method: POST
    URL: http://localhost:3030/admin/insert&/Drink
    body: raw JSON
    {
		"Drink_Name": "Hot Kantapong",
    	"Drink_Price": 150
    }
*/

//add new info about drink
app.post('/admin/insert&/Drink', function (req, res) {
	let info = {
		Drink_Name: req.body.Drink_Name,
		Drink_Price: req.body.Drink_Price
	}
	console.log(req.body.info);
	if (!info.Drink_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide drink name.'
		});
	}
	if (!info.Drink_Price) {
		return res.status(400).send({
			error: true,
			message: 'Please provide drink price.'
		});
	}
	dbConn.query('INSERT INTO Drink SET ?', info, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Drink has been created successfully.'
		});
	})
})

//UPDATE DRINK

/*
    TEST CASE#1
    Testing Update a Drink
    method: PUT
    URL: http://localhost:3030/admin/update&/Drink/Iced Marufkhan
    body: raw JSON
    {
		"Drink_Name": "Iced Marufkhan",
    	"Drink_Price": 555
    }
*/

/*
    TEST CASE#2
    Testing Update a Drink
    method: PUT
    URL: http://localhost:3030/admin/update&/Drink/Hot Kantapong
    body: raw JSON
    {
		"Drink_Name": "Hot Kantapong",
    	"Drink_Price": 555
    }
*/

//update data drink
app.put('/admin/update&/Drink/:name', function (req, res) {
	let Drink_Name = req.params.name;
	let Drink_Price = req.body.Drink_Price;
	console.log(Drink_Name, Drink_Price);
	if (!Drink_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide drink name.'
		});
	}
	if (!Drink_Price) {
		return res.status(400).send({
			error: true,
			message: 'Please provide drink price.'
		});
	}
	dbConn.query('UPDATE Drink SET Drink_Price = ? WHERE Drink_Name = ?', [Drink_Price , Drink_Name], function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Drink has been updated successfully.'
		});
	})
})

//SELECT BY DRINK NAME

/*
    TEST CASE#1
    Testing Search a Drink by Drink's Name
    method: GET
    URL: http://localhost:3030/admin/search&/Drinkname/Iced Marufkhan
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a Drink by Drink's Name
    method: GET
    URL: http://localhost:3030/admin/search&/Drinkname/Hot Kantapong
    body: raw JSON
    {
    }
*/

//search drink by name like
app.get('/admin/search&/Drinkname/:name', function (req, res) {
	let Drink_Name = req.params.name;
    if(!Drink_Name) 
    {
        return res.status(400).send({
			error: true, 
			message:'Please provide drink name.'
		});
    }
	var sql = `SELECT * FROM Drink WHERE Drink_Name LIKE '%${Drink_Name}%' order by Drink_Name`;
    dbConn.query(sql,function(error,results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({
			error:false,
			data:results,
			message:'Drink retrieved'
		});
    })
})

//SELECT BY DRINK PRICE

/*
    TEST CASE#1
    Testing Search a Drink by Drink's Price
    method: GET
    URL: http://localhost:3030/admin/search&/Drinkprice/555
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a Drink by Drink's Price
    method: GET
    URL: http://localhost:3030/admin/search&/Drinkprice/95
    body: raw JSON
    {
    }
*/

//search Drink by price
app.get('/admin/search&/Drinkprice/:price', function (req, res) {
	let Drink_Price = req.params.price;
    if(!Drink_Price) 
    {
        return res.status(400).send({
			error: true, 
			message:'Please provide drink price.'
		});
    }
	dbConn.query('SELECT * FROM Drink WHERE Drink_Price=? order by Drink_Price', Drink_Price, function (error, results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({
			error:false,
			data:results,
			message:'Drink retrieved'
		});
    })
})

//DELETE DRINK

/*
    TEST CASE#1
    Testing Delete a Drink
    method: DELETE
    URL: http://localhost:3030/admin/delete&/Drink/Iced Marufkhan
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Delete a Drink
    method: DELETE
    URL: http://localhost:3030/admin/delete&/Drink/Hot Kantapong
    body: raw JSON
    {
    }
*/

app.delete('/admin/delete&/Drink/:name', function (req, res) {
	let Drink_Name = req.params.name;
	console.log(Drink_Name);
	if (!Drink_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide drink name.'
		});
	}
	dbConn.query('DELETE FROM Drink WHERE Drink_Name = ?', Drink_Name, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results[0],
			message: 'Drink has been deleted successfully.'
		});
	})
})

//SELECT ALL DRINK

/*
    TEST CASE#1
    Testing Search All Drinks
    method: GET
    URL: http://localhost:3030/admin/search&/Drink
    body: raw JSON
    {
    }
*/

//result all drink list
app.get('/admin/search&/Drink', function (req, res) {
	dbConn.query('SELECT * FROM Drink', (error, results) => {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Drink List'
		});
	})
})

//-----------------------------------------------------------------------------------------------------------------------------------

//INSERT DESSERT

/*
    TEST CASE#1
    Testing Insert a Dessert
    method: POST
    URL: http://localhost:3030/admin/insert&/Dessert
    body: raw JSON
    {
		"Dessert_Name": "Cheep Ice Cream",
    	"Dessert_Price": 80
    }
*/

/*
    TEST CASE#2
    Testing Insert a Dessert
    method: POST
    URL: http://localhost:3030/admin/insert&/Dessert
    body: raw JSON
    {
		"Dessert_Name": "Max Bingsu",
    	"Dessert_Price": 160
    }
*/

//insert data
app.post('/admin/insert&/Dessert', function (req, res) {
	let info = {
		Dessert_Name: req.body.Dessert_Name,
		Dessert_Price: req.body.Dessert_Price
	}
	console.log(req.body.info);
	if (!info.Dessert_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide dessert name.'
		});
	}
	if (!info.Dessert_Price) {
		return res.status(400).send({
			error: true,
			message: 'Please provide dessert price.'
		});
	}
	dbConn.query('INSERT INTO Dessert SET ?', info, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Dessert has been created successfully.'
		});
	})
})

//UPDATE DESSERT

/*
    TEST CASE#1
    Testing Update a Dessert
    method: PUT
    URL: http://localhost:3030/admin/update&/Dessert/Cheep Ice Cream
    body: raw JSON
    {
		"Dessert_Name": "Cheep Ice Cream",
    	"Dessert_Price": 5
    }
*/

/*
    TEST CASE#2
    Testing Update a Dessert
    method: PUT
    URL: http://localhost:3030/admin/update&/Dessert/Max Bingsu
    body: raw JSON
    {
		"Dessert_Name": "Max Bingsu",
    	"Dessert_Price": 5555
    }
*/
//update data dessert
app.put('/admin/update&/Dessert/:name', function (req, res) {
	let Dessert_Name = req.params.name;
	let Dessert_Price = req.body.Dessert_Price;
	console.log(Dessert_Name, Dessert_Price);
	if (!Dessert_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide dessert name.'
		});
	}
	if (!Dessert_Price) {
		return res.status(400).send({
			error: true,
			message: 'Please provide dessert price.'
		});
	}
	dbConn.query('UPDATE Dessert SET Dessert_Price = ? WHERE Dessert_Name = ?', [Dessert_Price , Dessert_Name], function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Dessert has been updated successfully.'
		});
	})
})

//SELECT BY DESSERT NAME

/*
    TEST CASE#1
    Testing Search a Dessert by Dessert's Name
    method: GET
    URL: http://localhost:3030/admin/search&/Dessertname/Cheep Ice Cream
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a Dessert by Dessert's Name
    method: GET
    URL: http://localhost:3030/admin/search&/Dessertname/Max Bingsu
    body: raw JSON
    {
    }
*/
//select table dessert from alphabet
app.get('/admin/search&/Dessertname/:name', function (req, res) {
	let Dessert_Name = req.params.name;
    if(!Dessert_Name) 
    {
        return res.status(400).send({
			error: true, 
			message:'Please provide dessert name.'
		});
    }
	var sql = `SELECT * FROM Dessert WHERE Dessert_Name LIKE '%${Dessert_Name}%' order by Dessert_Name`;
    dbConn.query(sql,function(error,results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({
			error:false,
			data:results,
			message:'Dessert retrieved'
		});
    })
})

//SELECT BY DESSERT PRICE

/*
    TEST CASE#1
    Testing Search a Dessert by Dessert's Price
    method: GET
    URL: http://localhost:3030/admin/search&/Dessertprice/5
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Search a Dessert by Dessert's Price
    method: GET
    URL: http://localhost:3030/admin/search&/Dessertprice/5555
    body: raw JSON
    {
    }
*/

app.get('/admin/search&/Dessertprice/:price', function (req, res) {
	let Dessert_Price = req.params.price;
    if(!Dessert_Price) 
    {
        return res.status(400).send({
			error: true, 
			message:'Please provide dessert price.'
		});
    }
	dbConn.query('SELECT * FROM Dessert WHERE Dessert_Price=? order by Dessert_Price', Dessert_Price, function (error, results)
    {
        console.log(results);
        if(error) throw error;
        return res.send({
			error:false,
			data:results,
			message:'Dessert retrieved'
		});
    })
})

//DELETE DESSERT

/*
    TEST CASE#1
    Testing Delete a Dessert
    method: DELETE
    URL: http://localhost:3030/admin/delete&/Dessert/Cheep Ice Cream
    body: raw JSON
    {
    }
*/

/*
    TEST CASE#2
    Testing Delete a Dessert
    method: DELETE
    URL: http://localhost:3030/admin/delete&/Dessert/Max Bingsu
    body: raw JSON
    {
    }
*/
//delete item dessert
app.delete('/admin/delete&/Dessert/:name', function (req, res) {
	let Dessert_Name = req.params.name;
	console.log(Dessert_Name);
	if (!Dessert_Name) {
		return res.status(400).send({
			error: true,
			message: 'Please provide dessert name.'
		});
	}
	dbConn.query('DELETE FROM Dessert WHERE Dessert_Name = ?', Dessert_Name, function (error, results) {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results[0],
			message: 'Dessert has been deleted successfully.'
		});
	})
})

//SELECT ALL DESSERT

/*
    TEST CASE#1
    Testing Search All Desserts
    method: GET
    URL: http://localhost:3030/admin/search&/Dessert
    body: raw JSON
    {
    }
*/
//list all dessert
app.get('/admin/search&/Dessert', function (req, res) {
	dbConn.query('SELECT * FROM Dessert', (error, results) => {
		if (error) throw error;
		console.log(results);
		return res.send({
			error: false,
			data: results,
			message: 'Dessert List'
		});
	})
})