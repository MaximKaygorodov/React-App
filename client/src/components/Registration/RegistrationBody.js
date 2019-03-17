import React from 'react'


function login (e) {
    e.preventDefault();
    console.log(9);
    var form = document.forms.userForm;
    var userLogin = form.elements.log.value;
    var userPassword = form.elements.password.value;
    console.log(userLogin, userPassword);  
    var dataForServer = {
        'login': userLogin,
        'password': userPassword
         }
    var myInit = { method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer ),
        redirect: 'follow'
    };
    fetch('api/login/', myInit).then(function(res){
        if (res.status < 400) {
            console.log("success");
            window.location.href = '/create';
            //location = "/create";
        } else {
            console.log("login failed");
            reset();
        }
    });
}
function reset() {
    var form = document.forms["userForm"];
    form.reset();
}   
// Добавление пользователя
function CreateUser(e) {
    e.preventDefault();
    console.log(90);
    var form = document.forms.userForm;
    var userLogin = form.elements.log.value;
    var userPassword = form.elements.password.value;
    var dataForServer = {
        'login': userLogin,
        'password': userPassword
         }
    var myInit = { method: 'POST',
           headers: {
               'Content-Type': 'application/json'},
           body:  JSON.stringify( dataForServer )
               };
    fetch('api/createUsers/', myInit).then(function(res){
        if (res.status < 400) {
            console.log("success");
        } else {
            console.log("login failed");
            window.location.href = '/registration';
        }
    reset();
});
}

function RegistrationBody() {
    return (
        <div>
            <form action="/action_page.php" name="userForm">
            <div class="form-group">
                <label for="exampleInputEmail1">Your name or login</label>
                <input type="email" name="log" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name or login"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <div class='row'>
                <button type="submit" onClick={login} class="btn btn-primary mx-1">Log in</button>
                <button onClick={login} onClick={CreateUser} class="btn btn-light">Create your account</button>
            </div>
            </form> 
        </div>
    )
}

export default RegistrationBody;