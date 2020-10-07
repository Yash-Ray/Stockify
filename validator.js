function validatornew() {
    var str1 = document.getElementById("exampleInputPassword1");
    var str2 = document.getElementById("exampleInputPassword2");
    var flag = -1;
    var a = str1.value;
    var b = str2.value;
    if (a===b)
        flag = 10;
    else
        flag = 1;

    if (flag === 1)
        alert("The two passwords don't match. Please check and Try again.\n\nThank You.\nTeam Stockify");
    // else if(flag === 10) {
    //     alert("Password has been changed. Click 'Ok' to return back to the Login Page.");
    // }
}
