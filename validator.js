function validatornew() {
    var str1 = document.getElementById("exampleInputPassword1");
    var str2 = document.getElementById("exampleInputPassword2");
    var flag = -1;
    var a = str1.value;
    var b = str2.value;
    if (a===b)
        flag = 0;
    else
        flag = 1;

    if (flag === 1)
        displaymsg(1);
    if (str2 != "" && flag === 0)
        displaymsg(0);
        // alert("The two passwords don't match. Please check and Try again.\n\nThank You.\nTeam Stockify");
    // else if(flag === 10) {
    //     alert("Password has been changed. Click 'Ok' to return back to the Login Page.");
    // }
}

function displaymsg(a) {
    if (a===1)
        document.getElementById("pwd-unmatch").innerHTML = "The Entered passwords do not match. Please Retry";
    else {
        document.getElementById("pwd-unmatch").innerHTML = "Congratulations! Your password has been changed. Login to Continue.";
        document.getElementById("pwd-unmatch").style.color = "green";
    }

}
