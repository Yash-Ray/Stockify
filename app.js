const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/UserDB" , {useNewUrlParser:true , useUnifiedTopology:true});

const UserSchema = {
    firstName:String,
    lastName:String,
    email:String,
    password:String
    
};

const User =  mongoose.model("User",UserSchema);

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

    if(req.body.pass_up === req.body.cnpass_up){

    
        const newUser = new User({
            firstName:req.body.f_name,
            lastName:req.body.l_name,
            email:req.body.email_up,
            password:req.body.pass_up,
            
        })

        User.findOne({email:req.body.email_up},function(err,foundUser){
            if(err){
                console.log(err);
            }else{
                if(foundUser){
                    console.log("not saved");
                    res.redirect("/sign_up");
                }else{
                    newUser.save()
                }
            }
        })
                   
    }
    else{
        console.log("not saved");
    }
    
});

app.post("/login",function(req,res){
    
    const email_1 = req.body.Email_1;
    const pass = req.body.Password_1;

    User.findOne({email:email_1},function(err,foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){
                if(foundUser.password === pass){
                    res.sendFile(__dirname + "/Homepage.html")
                }else{
                    res.redirect("/login");
                }
            }
        }
    })

});

app.post("/forgot",function(req,res){

    const email2 = req.body.Email_2;
    const new_pass = req.body.new_password;
    const re_new_pass = req.body.re_new_password;
    const otp = req.body.OTP;

    if (new_pass !== re_new_pass){
        res.redirect("/forgot");
    }else{
        User.findOne({email:email2},function(err,foundmail){
            if(err){
                console.log(err);
            }else{
                User.findOneAndUpdate({email:email2},{$set:{password:new_pass}},{new:false},function(err,doc){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("password updated");
                       
                    }
                })
                
            }
        })
        
    }   
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});


