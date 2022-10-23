function check(event) {
    event.preventDefault();

    let textn = document.getElementById("exampleInputName");
    let texts = document.getElementById("exampleInputSurname");
    let email = document.getElementById("exampleInputEmail1");
    let pwd = document.getElementById("exampleInputPassword1");
    let pwdrepeat = document.getElementById("exampleInputPassword2");    

    document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('entrance')
    .innerHTML= "";

    if (textn.value == '') {
        document.getElementById('errorMessage')
        .innerHTML+= "Your name is not filled in<br>";
    }

    if (texts.value == '') {
        document.getElementById('errorMessage')
        .innerHTML+= "Your surname is not filled in<br>";
    }
        
    if (email.value == '') {
        document.getElementById('errorMessage')
        .innerHTML+= "Your email is not filled in<br>";
    }
        
    if (pwd.value == '') {
        document.getElementById('errorMessage')
        .innerHTML+= "Password is not filled in<br>";
    }

    if (pwd.value.length <= 6) {
        document.getElementById('errorMessage')
        .innerHTML += "Password is too short<br>";
    }
        
    if (pwdrepeat.value == '') {
        document.getElementById('errorMessage')
        .innerHTML+= "Password-repeat is not filled in";
    }  

    if (pwdrepeat.value != pwd.value) {
        document.getElementById('errorMessage')
        .innerHTML+= "Passwords don't match";
    }  
    
    else {
        document.getElementById('entrance')
        .innerHTML+= "Welcome!";
   }

}
