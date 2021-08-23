const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const e = require("express");
mongoose.connect('mongodb://localhost:27017/Food-Order-App', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.set('view engine', 'ejs');

let clicks = 0;
let isLoggedIn = false;
let userName;
let loginChanged = false;
let arr = [];


const childSchema = new mongoose.Schema({
    item: String,
    size: String,
    quantity: Number
})

const signupSchema = new mongoose.Schema({
    userName: String,
    password: String,

})

const orderSchema = new mongoose.Schema({
    name: String,
    address: String,
    orders: [{item: String, size: String, quantity: Number}]
})

const User = mongoose.model('User', signupSchema);

const Order = mongoose.model('Order', orderSchema);



app.use(bodyParser.urlencoded({extended: true}));

app.get("/login", function(req, res) {
    res.sendFile(__dirname + "/login.html");

})
app.get("/sign-up", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/login.html", function(req, res) {
    console.log(req.body.loginName);
    console.log(req.body.password);
    

    User.find({'userName': req.body.loginName}, (err, users) => {
        if(err) {
            console.log(err)
        } else{
            if(users[0].password === req.body.password) {
                userName = req.body.loginName;
                isLoggedIn = true;
                loginChanged = !loginChanged;
                res.redirect("/");
                clicks = 0;
            }
        }
    })  

})

app.post("/signup.html", function(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    const newUser = new User({
        userName: userName,
        password: password
    });
    newUser.save();
    res.redirect("/login");
})


app.post("/", function(req, res) {

    if(isLoggedIn === true) {
        let name = userName;
        let address = "New Delhi, India";
        let type = req.body.type;
        let size = req.body.size;
        let quantity = req.body.quantity;
        const orderAppend = {item: type, size: size, quantity: quantity};
    
        const order2 = new Order({
            name: name,
            address: address,
            orders: [{item: type, size: size, quantity: quantity}]
            
        });
    
        if(loginChanged == true) {
            order2.save();
            console.log('data saved');
            loginChanged = false;
        } else {
            mongoose.connection.db.collection('orders').updateOne(
                {name: name},
                {$push: {orders: {item: type, size: size, quantity: quantity}}}            
            )
            console.log('reached here');
        }
    
        
        
        console.log(clicks);   
    

    } else {
        res.redirect("/");
    }


});

app.use(express.static(__dirname));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    

})



app.get("/cart", function(req, res) {
    if(clicks ==0) {
        Order.find({name: userName}, function(err, result){
            console.log(result[0].orders);
            let arr2 = result[0].orders;
            console.log(arr2);
            for(let i=0; i<arr2.length;i++) {
                
                arr[i] = arr2[i].item;

    
            }
            console.log(arr);
            clicks = clicks + 1;
                    
            
    
        })

    }
    


    res.render('cart', {name: userName, orders: arr});



})

app.post("/cart.html", function(req, res) {
    res.send("Posted successfully");
    Order.find({name: userName}, function(err, result){
        console.log(result[0].orders[0].item);

    })

})

app.listen(9000,function() {
    console.log("Listening to port 9000");
})






