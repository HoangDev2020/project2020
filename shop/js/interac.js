localStorage.setItem('indexOfChoosenProduct', [])

let container = document.getElementById('container');
function gerProduct(data) {
    for (let i = 0; i < data.length; i++) {
        let productEle = `<div class="item">
                            
                            <img src="${data[i].avatar}">
                            <p class="toCart">${data[i].name}</p>
                            <h5 class="toCart">Giá:${data[i].cost}.000</h5>
                            
                            <button class="btn_add" >Thêm vào giỏ</button>
                            <button class="btn_remove">Ra khỏi giỏ</button>
                        </div>`;
        container.insertAdjacentHTML('beforeend', productEle);
    };
};
// gerProduct();

let value = localStorage.getItem('indexOfChoosenProduct');
function add_remove() {
    let cart = document.getElementById('cart');
    let count;
    if (localStorage.length != 0) {
        count = localStorage.getItem('numberOfProduct');
        cart.textContent = 'Giỏ hàng' + ' ' + '(' + count + ')';
    } else {
        localStorage.setItem('numberOfProduct', 0);
    }
    
    let btn_add = document.getElementsByClassName('btn_add')
    for (let i = 0; i < btn_add.length; i++) {
        btn_add[i].addEventListener('click', function() {
            let value = localStorage.getItem('indexOfChoosenProduct')
            btn_add[i].setAttribute('disabled', 'true');
            if(value == ''){
                value +=i;
            } else {
                value += `,${i}`;
            }
            localStorage.setItem('indexOfChoosenProduct', value);
            
            
            count++;
            localStorage.setItem('numberOfProduct', count);
            cart.textContent = 'Giỏ hàng' + ' ' + '(' + localStorage.getItem('numberOfProduct') + ')';
        });
    };

    
    let btn_remove = document.getElementsByClassName('btn_remove');
    for (let i = 0; i < btn_remove.length; i++) {
        btn_remove[i].addEventListener('click', () => {
            
            
            if (count != 0) {
                count--;
            localStorage.setItem('numberOfProduct', count);
            cart.textContent = 'Giỏ hàng' + ' ' + '(' + localStorage.getItem('numberOfProduct') + ')';
            }else {
                alert("Out of stocks")
            };   
        });
    };
};
add_remove();

let toCart = document.getElementById('cart');

toCart.addEventListener('click', () => {
    window.open('cart.html');
});

fetch('https://5f9e30996ee5fa00168a4eb5.mockapi.io/api/new' )
    .then(response => response.json())
    .then(data => gerProduct(data));

