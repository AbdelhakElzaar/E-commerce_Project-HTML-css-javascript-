
let productsID = document.querySelector('#product-id');
let noProductDom = document.querySelector('.noproduct');

// show product in cartProduct
function showCartUi(productsAll = []){
    if(JSON.parse(localStorage.getItem('Product')) == 0){
        noProductDom.style.textAlign = "center";
        noProductDom.innerHTML = "No Item Added To Cart";

    }
    let products = JSON.parse(localStorage.getItem('Product')) || productsAll;
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
            <button class="add-to-cart" onclick="removeToCart(${item.id})"> Remove</button>
        </div>
    </div>
        `
    });
    productsID.innerHTML = productsUI; 
}
showCartUi();

//remove product

function removeToCart(id){
    if(localStorage.getItem('Product')){
        let items = JSON.parse(localStorage.getItem('Product'));
        let filteritems = items.filter(item =>item.id !== id);
        localStorage.setItem('Product',JSON.stringify(filteritems));
    }
    showCartUi();

}
