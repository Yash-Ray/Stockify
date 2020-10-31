const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/UserDB" , {useNewUrlParser:true , useUnifiedTopology:true});

const UserSchema = {
    firstName:String,
    lastName:String,
    email:String,
    password:String
    
};

const investSchema = {
    User_email:String,
    Company_name:String,
    DOI:Date,
    TI:String,
    Time:String,
    Volume:Number,
    Buy_price:Number,
    TOI:Number,
};
const t4Schema = {
    Country:String,
    Ex_value:String,
    Share_glo:Number,
    T_perf:String,
    M_value_cr:Number,
}

const t1Schema = {
    Country:String,
    GDP:String,
    Inf_rate:Number,
    Per_cap_inc:Number,
    GDP_Gr_rate:Number,
}
const t3Schema = {
    Company:String,
    Buy_price:Number,
    Volume:Number,
}

const t2Schema = {
    Company:String,
    Origin:String,
    Stock_Value:String,
    Gro_per:Number,
}
const t5Schema = {
    Rank:Number,
    Country:String,
    Mar_value:String,
    Gl_per:Number,
}

const t6Schema = {
    Rank:Number,
    Country:String,
    T_Pl:String,
}

const User =  mongoose.model("User",UserSchema);
const Invest = mongoose.model("Invest",investSchema);
const t4 = mongoose.model("Mft",t4Schema);
const t1 = mongoose.model("C_data",t1Schema);
const t3 = mongoose.model("inv",t3Schema);
const t2 = mongoose.model("C_o",t2Schema);
const t5 = mongoose.model("Ra",t5Schema);
const t6 = mongoose.model("Ser",t6Schema);


const tableData=[{
        User_email:"*******",
        Company_name:"****",
        DOI : "12/12/12",
        TI :"*****",
        Time : "00:000:00",
        Volume :0000,
        Buy_price :0000,
        TOI:00000,
    }];

currentUser={
    email:""
}



const mft1 = new t4({
    Country:"JAPAN",
    Ex_value:"19.6B",
    Share_glo:16.8,
    T_perf:"Glaxo",
    M_value_cr:"375.4",
})

const mft2 = new t4({
    Country:"GERMANY",
    Ex_value:"8.6B",
    Share_glo:7,
    T_perf:"Pfizer",
    M_value_cr:"345.9"
})

const mft6 = new t4({
    Country:"INDIA",
    Ex_value:"3.6B",
    Share_glo:5.9,
    T_perf:"Dr.Reddy",
    M_value_cr:"2.4"
})

const mft3 = new t4({
    Country:"FRANCE",
    Ex_value:"7.9B",
    Share_glo:5.3,
    T_perf:"Sanfoi",
    M_value_cr:"365.6"
})
const mft4 = new t4({
    Country:"BRAZIL",
    Ex_value:"1.6B",
    Share_glo:1.8,
    T_perf:"marini",
    M_value_cr:"5.4"
})
const mft5 = new t4({
    Country:"USA",
    Ex_value:"9.6B",
    Share_glo:6.8,
    T_perf:"Bx Pharma",
    M_value_cr:"75.9"
})


const default_4 = [mft1,mft2,mft3,mft4,mft5,mft6];

const C_data1 = new t1({
    Country:"CHINA",
    GDP:"13T",
    Inf_rate:2.5,
    Per_cap_inc:9856,
    GDP_Gr_rate:6.9
}) 
    
const C_data2 = new t1({
    Country:"JAPAN",
    GDP:"4.8T",
    Inf_rate:0.1,
    Per_cap_inc:44582,
    GDP_Gr_rate:1.71
}) 

const C_data3 = new t1({
    Country:"GERMANY",
    GDP:"3.6T",
    Inf_rate:-0.1,
    Per_cap_inc:38952,
    GDP_Gr_rate:2.22,
}) 

const C_data4 = new t1({
    Country:"INDIA",
    GDP:"2.7T",
    Inf_rate:6.09,
    Per_cap_inc:1980,
    GDP_Gr_rate:6.68
}) 

const C_data5 = new t1({
    Country:"France",
    GDP:"2.5T",
    Inf_rate:0.8,
    Per_cap_inc:37985,
    GDP_Gr_rate:1.82
}) 

const default_1 = [C_data1,C_data2,C_data3,C_data4,C_data5];

const inv_1 = new t3({
    Company:"BAJAJ",
    Buy_price:25.05,
    Volume:300
})
const inv_2 = new t3({
    Company:"TATA",
    Buy_price:30.05,
    Volume:55.05
})

const inv_3 = new t3({
    Company:"REL",
    Buy_price:55.05,
    Volume:305
})

const inv_4 = new t3({
    Company:"PVK PHARMA",
    Buy_price:26.05,
    Volume:300
})

const inv_5 = new t3({
    Company:"MDN",
    Buy_price:10.05,
    Volume:230
})
const inv_6 = new t3({
    Company:"SANFOI",
    Buy_price:10.05,
    Volume:220
})


const default_3=[inv_1,inv_2,inv_3,inv_4,inv_5,inv_6]

const C_o1 = new t2({
    Company:"BAJAJ",
    Origin:"INDIA",
    Stock_Value:"8.00 l Cr",
    Gro_per:7,
})
const C_o2 = new t2({
    Company:"TATA",
    Origin:"IINDIA",
    Stock_Value:"12.00 l Cr",
    Gro_per:7,
})
const C_o3 = new t2({
    Company:"REL",
    Origin:"INDIA",
    Stock_Value:"7.00 l Cr",
    Gro_per:9,
})
const C_o4 = new t2({
    Company:"PVK PHARMA",
    Origin:"INDIA",
    Stock_Value:"2.00 l Cr",
    Gro_per:2,
})
const C_o5 = new t2({
    Company:"MDN",
    Origin:"INDIA",
    Stock_Value:"1.40 l Cr",
    Gro_per:8.5,
})
const C_o6 = new t2({
    Company:"SANFOI",
    Origin:"FRANCE",
    Stock_Value:"5.4 l Cr",
    Gro_per:6,
})
const C_o7 = new t2({
    Company:"MARINI",
    Origin:"BRAZIL",
    Stock_Value:"5.50 l Cr",
    Gro_per:4.4,
})

const default_2=[C_o1,C_o2,C_o3,C_o4,C_o5,C_o6,C_o7];

const Ra1 = new t5({
    Rank:1,
    Country:"CHINA",
    Mar_value:"2010 B",
    Gl_per:28.4,
})
const Ra2 = new t5({
    Rank:2,
    Country:"USA",
    Mar_value:"1867 B",
    Gl_per:16.6,
})

const Ra3 = new t5({
    Rank:3,
    Country:"JAPAN",
    Mar_value:"1063 B",
    Gl_per:7.2,
})
const Ra4 = new t5({
    Rank:4,
    Country:"GERMANY",
    Mar_value:"700 B",
    Gl_per:5.8,
})
const Ra5 = new t5({
    Rank:5,
    Country:"INDIA",
    Mar_value:"298 B",
    Gl_per:3,
})

const default_5 = [Ra1,Ra2,Ra3,Ra4,Ra5]

const Ser1 = new t6({
    Rank:1,
    Country:"USA",
    T_Pl:"Microsoft",
})
const Ser2 = new t6({
    Rank:2,
    Country:"CHINA",
    T_Pl:"Alibaba",
})

const Ser3 = new t6({
    Rank:3,
    Country:"JAPAN",
    T_Pl:"Toyota",
})
const Ser4 =new t6( {
    Rank:4,
    Country:"GERMANY",
    T_Pl:"SAP",
})

const Ser5 =new t6( {
    Rank:5,
    Country:"FRANCE",
    T_Pl:"L'Oreal",
})

const default_6 =[Ser1,Ser2,Ser3,Ser4,Ser5]
console.log(default_4);

app.get("/index",function(req,res){
    res.sendFile(__dirname + "/index.html")
});
app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
});

app.get("/forgot",function(req,res){
    res.sendFile(__dirname + "/forgot-password.html")
});


app.get("/sign_up",function(req,res){
    res.sendFile(__dirname + "/Sign-Up.html")
});

app.get("/HomePage",function(req,res){
    res.render("HomePage",{empty:foundUser.firstName + " " + foundUser.lastName}); 
})
app.get("/invest" , function(req,res){
    
    Invest.find({},function(err,data){
        if(data.length==0){
            Invest.insertMany(tableData,function(err){
                if(!err){
                    console.log("saved");
                }
            });
           res.redirect("/invest"); 
        }
        
        else{
            res.render("invest", { InvestData: data })
        }
    })

    
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
                    currentUser.email=req.body.email_up
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
                   

                    t4.find({},function(err,foundItems4){

                        if(foundItems4.length === 0){
                            t4.insertMany(default_4,function(err){
                                if(!err){
                                    console.log(" saved")
                                }
                            });
                
                        }
                        
                    });
                    t1.find({},function(err,foundItems1){

                        if(foundItems1.length === 0){
                            t1.insertMany(default_1,function(err){
                                if(!err){
                                    console.log(" saved")
                                }
                            });
                
                        }
                        
                    });
                    t3.find({},function(err,foundItems3){
                       
                        if(foundItems3.length === 0){
                            t3.insertMany(default_3,function(err){
                                if(!err){
                                    console.log(" saved")
                                    
                                }
                            });
                
                        }
                        
                    });
                    t2.find({},function(err,foundItems2){
                        
                        if(foundItems2.length === 0){
                            t2.insertMany(default_2,function(err){
                                if(!err){
                                    console.log(" saved")
                                    
                                }
                            });
                
                        }
                        
                    });

                    t5.find({},function(err,foundItems5){
                        
                        if(foundItems5.length === 0){
                            t5.insertMany(default_5,function(err){
                                if(!err){
                                    console.log(" saved")
                                    
                                }
                            });
                
                        }
                        
                    });

                    t6.find({},function(err,foundItems6){
                        
                        if(foundItems6.length === 0){
                            t6.insertMany(default_6,function(err){
                                if(!err){
                                    console.log(" saved")
                                    
                                }
                            });
                
                        }
                        
                    });
                    
                    res.render("HomePage",{empty:foundUser.firstName + " " + foundUser.lastName}); 
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

app.post("/invest",function(req,res){

    const newInvest = new Invest({
        User_email:req.body.User_email,
        Company_name : req.body.Company_Name,
        DOI : req.body.DOI,
        TI :req.body.ti,
        Time : req.body.time,
        Volume : req.body.vol,
        Buy_price : req.body.buy_price,
        TOI  : req.body.vol*req.body.buy_price,
    });
   
    newInvest.save();
    res.redirect("/invest");
    
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});












