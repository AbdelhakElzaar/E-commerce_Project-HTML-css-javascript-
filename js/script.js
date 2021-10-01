let productNotifdiv = document.querySelector('.productnotif div');
let productNotif = document.querySelector('.productnotif');
let badgeDom = document.querySelector('.badge');
let productsID = document.querySelector('#product-id');

//show products in index

(function showProducts(){
    let productsUI = products.map((item)=>{
        return `
        <div class="product-item">
        <img src=${item.imageUrl}>
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
            <i class="far fa-heart"></i>
        </div>
    </div>
        `
    });
    productsID.innerHTML = productsUI; 

})();



// add to cart shopping
//in  local storage
let arrProduct = localStorage.getItem('Product') ? JSON.parse(localStorage.getItem('Product')) : [];
if(arrProduct){
    arrProduct.map(item =>{
        productNotifdiv.innerHTML += `<p>${item.title}</p>`;
    });
    badgeDom.style.display = 'block';
    badgeDom.innerHTML = arrProduct.length;
}
// in ul and icon 
function addToCart(id){
    if(!localStorage.getItem('username')){
        alertShow(error,"You Are Not Register");
        setTimeout(()=>window.location = "login.html",3000);
    }else{

        let clickItem = products.find((item)=>{
            if(item.id === id){
                return item;
            }
        })
        productNotifdiv.innerHTML += `<p>${clickItem.title}</p>`;
        arrProduct.push(clickItem);
        localStorage.setItem('Product',JSON.stringify(arrProduct));
        
       let cartproductitems = document.querySelectorAll('.productnotif div p');
       badgeDom.style.display = 'block';
       badgeDom.innerHTML = `${cartproductitems.length}`
       alertShow(valide,"Item Added Succes");
    }
   
  

}

// ul drop  shopping
let liShooping = document.querySelector('.liShooping');
liShooping.addEventListener('click',function(){
    if(productNotif.style.display !== 'block'){
        productNotif.style.display = 'block';
    }
    else
    productNotif.style.display = 'none'; 
});




