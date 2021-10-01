let links = document.querySelector('#links');
let userInfo = document.querySelector('#user-info');
let userDom = document.querySelector('#user');
let error = document.querySelector('#error');
let valide = document.querySelector('#valide');

let usernameLocal = localStorage.getItem('username');

//check user in local 
if(usernameLocal){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = usernameLocal;
}

/*function error and valide */
function alertShow(statu,text){
    statu.innerHTML = text;
    statu.style.display = "block";
        setTimeout(function(){
            statu.style.display = "none";
        },2000);
}



// logOut Event 
let logOut = document.querySelector('#logout');

if(usernameLocal){
    logOut.addEventListener('click',function(e){
        e.preventDefault();
        localStorage.clear();
        alertShow(valide,"logOut Succes");
        setTimeout(()=> window.location = "register.html",2500);
    })
}


