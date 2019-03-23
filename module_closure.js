
function User() {

    var username, password;

    function doLogin(user, pw) {
        username = user; //a closure of the username property 
        password = pw; // a closure of the password property
        console.log("logged in");
    }

    function printPassword() { 
        console.log(password);
    }

    var publicAPI = {
        login: doLogin,
        printPassword: printPassword
    };


    return publicAPI;
}

var fred = User();

fred.login("y","p");
fred.password = "teste"; // it doenst change the "p" value passed for the password field
console.log(fred.password);

fred.printPassword();