

let content = document.getElementById('content');
let indexOfChoosenProduct = localStorage.getItem('indexOfChoosenProduct');
let arr = indexOfChoosenProduct.split(',')
content.innerHTML = '';


console.log(arr);
for(let i = 0; i < arr.length; i++){
    
    let index = Number(arr[i]);
    console.log( i);
    let html = `<div class="item">
            <img src="${data[index].img}">
            <p>${data[index].name}</p>
            <h5>Giá:${data[index].cost}</h5>`;
    content.insertAdjacentHTML('beforeend', html);
}


// $(document).ready(function(){
//     $("#texthead").click(function(){
//         $("#textheads").slideDown("slow");
//     });
// });

$('#texthead').click(function(){ 
   
    $('#textheads').slideDown('fast');
    
});