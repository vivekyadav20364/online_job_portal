let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 0;

function formvalidate() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "User name is empty";
        flag = 1;
    }
    else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "User name require min 3 character";
        flag = 1;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        flag=0;
    }
    if (password.value == "") {
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 1;
    }
    else if (password.value.length < 8) {
        document.getElementById("passError").innerHTML = "Password is of min 8 length";
        flag = 1;
    }
    else {
        document.getElementById("passError").innerHTML = "";
        flag=0;
    }

    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }
}