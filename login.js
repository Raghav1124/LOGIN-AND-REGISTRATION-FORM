let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let name = document.getElementById("name");
let title = document.getElementById("title");
let pas = document.getElementById("pas");
var c = 0;

signin.onclick = function() {
    name.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signup.classList.add("disable");
    signin.classList.remove("disable");
    pas.style.fontSize = "15px";
    c = 1;
}
signup.onclick = function() {
    name.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signin.classList.add("disable");
    signup.classList.remove("disable");
    pas.style.fontSize = "0px";
    c = 0;
}


function validateForm() {

    var email = document.getElementById('mail').value;
    var password = document.getElementById('passw').value;
    if (c != 0) {
        if (email === 'admin@gmail.com' && password === '1123') {
            alert('Login successful!');


        } else if (email == '' || password == '' || (email == '' && password == '')) {
            alert('please enter the details')
        } else {
            alert('Invalid email or password!');
        }
    } else
    if (c == '0' && email != '' && password != '') {
        alert('SignUp successful!');

    } else {
        alert('please enter the details');
    }

}