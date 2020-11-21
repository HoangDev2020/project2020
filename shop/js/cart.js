

let content = document.getElementById('content');
let indexOfChoosenProduct = localStorage.getItem('indexOfChoosenProduct');
let arr = indexOfChoosenProduct.split(',')
content.innerHTML = '';


console.log(arr);
if(arr.length != 1){
    for(let i = 0; i < arr.length; i++){
        let index = Number(arr[i]);
        let html = `<div class="item">
                <img src="${data[index].img}">
                <p>${data[index].name}</p>
                <h5>Giá:${data[index].cost}</h5>`;
        content.insertAdjacentHTML('beforeend', html);
    }
}



// $(document).ready(function(){
//     $("#texthead").click(function(){
//         $("#textheads").slideDown("slow");
//     });
// });

$('#btn_textdown').click(function(){ 
    $('#textheads').slideDown(1000);
});
$('#btn_textup').click(function(){ 
    $('#textheads').slideUp(1000);
});
