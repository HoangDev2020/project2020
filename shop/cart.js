

let content = document.getElementById('content');
let indexOfChoosenProduct = localStorage.getItem('indexOfChoosenProduct');
indexOfChoosenProduct.split(',')
content.innerHTML = '';



for(let i = 0; i < indexOfChoosenProduct.length; i++){
    let index = Number(indexOfChoosenProduct[i]);
    let html = `<div class="item">
            <img src="${productions[index].img}" >
            <p > ${productions[index].name}</p>
            <h5 >Giá: ${productions[index].cost}</h5>`;
    content.insertAdjacentHTML('beforeend', html);
};
