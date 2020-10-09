// function validatornew() {
//     var str1 = document.getElementById("exampleInputPassword1");
//     var str2 = document.getElementById("exampleInputPassword2");
//     var flag = -1;
//     var a = str1.value;
//     var b = str2.value;
//     if (a===b)
//         flag = 0;
//     else
//         flag = 1;

//     if (flag === 1)
//         displaymsg(1);
//     if (str2 != "" && flag === 0)
//         displaymsg(0);
//         // alert("The two passwords don't match. Please check and Try again.\n\nThank You.\nTeam Stockify");
//     // else if(flag === 10) {
//     //     alert("Password has been changed. Click 'Ok' to return back to the Login Page.");
//     // }
// }

// function displaymsg(a) {
//     if (a===1)
//         document.getElementById("pwd-unmatch").innerHTML = "The Entered passwords do not match. Please Retry";
//     else {
//         document.getElementById("pwd-unmatch").innerHTML = "Congratulations! Your password has been changed. Login to Continue.";
//         document.getElementById("pwd-unmatch").style.color = "green";
//     }

// }


function validatornewforgot() {
    // var str1 = document.getElementById("Password1");
    // var str2 = document.getElementById("Password2");
    // var Fname = document.getElementById("formGroupExampleInput1");
    // var Lname = document.getElementById("formGroupExampleInput2");
    // var email = document.getElementById("emaillabel");
    var mailid = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputPassword1");
    var confpwd = document.getElementById("exampleInputPassword2");
    var otp = document.getElementById("exampleInputPassword3");
    var btn1 = document.getElementById("btn-chk08");
    var flag = -1;
    var a = password.value;
    var b = confpwd.value;

    if (mailid.value && otp.value && a && b) {
        if (a===b)
            flag = 0;
        else
            flag = 1;
    }
    if((mailid.value).length === 0 || (password.value).length == 0 || (confpwd.value).length == 0 || (otp.value).length == 0) {
        flag = 2;
    }

    if (flag === 1)
        displaymsg(1);
    if (flag === 0)
        displaymsg(0);
    if (flag === 2)
        displaymsg(2);
        // alert("The two passwords don't match. Please check and Try again.\n\nThank You.\nTeam Stockify");
    // else if(flag === 10) {
    //     alert("Password has been changed. Click 'Ok' to return back to the Login Page.");
    // }
}

function displaymsg(a) {
    if (a===1) {
        document.getElementById("pwd-unmatch").innerHTML = "The Entered passwords do not match. Please Retry.";
        document.getElementById("pwd-unmatch").style.color = "red";
    }
    if (a===0) {
        alert("Hi there");
        document.getElementById("pwd-unmatch").innerHTML = "Your account has been created. Login to Continue.";
        document.getElementById("pwd-unmatch").style.color = "green";
    }
    else {
        document.getElementById("pwd-unmatch").innerHTML = "Please fill in all the fields to continue.";
        document.getElementById("pwd-unmatch").style.color = "blue";
    }
}