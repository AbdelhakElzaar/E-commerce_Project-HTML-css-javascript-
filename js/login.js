let username = document.querySelector('#username');
let password = document.querySelector('#password');
let signIn = document.querySelector('#signin');

let userLocal = localStorage.getItem('username');
let passwordLocal = localStorage.getItem('password');

function alertShow(statu,text){
    statu.innerHTML = text;
    statu.style.display = "block";
        setTimeout(function(){
            statu.style.display = "none";
        },2000);
}

// Sign in Event
signIn.addEventListener('click',function(e){
    e.preventDefault();
    if(username.value !== userLocal || password.value !== passwordLocal){
        alertShow(error,"Username Or Password incorrect");
    }
    else {
        alertShow(valide,"SignIn Succes");
        setTimeout(()=> window.location = "index.html",2500);
    }
});
