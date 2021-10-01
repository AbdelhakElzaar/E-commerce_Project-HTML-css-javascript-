let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repassword = document.querySelector('#repassword');
let signup = document.querySelector('#signup');

let userLocal = localStorage.getItem('username');


// no register two time
if(userLocal){
    alertShow(valide,"You Are a Ready Register");
    setTimeout(()=>window.location = "login.html",2500)
}



/*register Event */
signup.addEventListener('click',function(e){
    e.preventDefault();
    if(password.value !== repassword.value){
        alertShow(error,"password incorrect");
    }else
    register();
});
function register(){
    if(username.value === '' || email.value === '' || password.value === '' || repassword.value === ''){
        alertShow(error,"remplire tout les champs");

    }
    else{
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        alertShow(valide,"Register Succes");
        setTimeout(()=>window.location = "login.html",2500)
        
    }
    

}