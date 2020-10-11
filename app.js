const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
});
app.get("/index",function(req,res){
    res.sendFile(__dirname + "/index.html")
});
app.get("/forgot",function(req,res){
    res.sendFile(__dirname + "/forgot-password.html")
});


app.get("/sign_up",function(req,res){
    res.sendFile(__dirname + "/Sign-Up.html")
});

app.post("/sign_up",function(req,res){

    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email_up = req.body.email_up;
    const pass_up = req.body.pass_up;
    const cnpass_up = req.body.cnpass_up;
});

app.post("/login",function(req,res){
    
    const email_1 = req.body.Email_1;
    const pass = req.body.Password_1;
});

app.post("/forgot",function(req,res){

    const email2 = req.body.Email_2;
    const new_pass = req.body.new_password;
    const re_new_pass = req.body.re_new_password;
    const otp = req.body.OTP;

    if (new_pass !== re_new_pass){
        res.redirect("/forgot");
    }else{
        res.redirect("/login");
    }   
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});


