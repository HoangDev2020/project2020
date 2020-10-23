// let firstnum;
// let secondnum;
// var operate = '';

// let setnum = function (n) {
//     let screen = document.getElementById('screen');
//     if(screen.value === '+' || screen.value === '-' || screen.value === '*' || screen.value === '/'){
//         screen.value = ' ';
//     }
//     screen.value += n;
// };

// let setoper = function (n){
//     let screen = document.getElementById('screen');
//     firstnum = screen.value;
//     screen.value += n;
//     operate += n;
// };

// let solve = function(){
    
//     let screen = document.getElementById('screen');
//     secondnum = screen.value;
//     console.log(secondnum)
//     // let result = 0;
//     // if(operate === '+'){
//     //     result = firstnum + secondnum;
//     // } 
//     // if(operate === '-'){
//     //     result = firstnum - secondnum;
//     // }
//     // if(operate === '*'){
//     //     result = firstnum * secondnum;
//     // }
//     // if(operate === '/'){
//     //     result = firstnum / secondnum;
//     // }

//     let result = eval(secondnum)
//     console.log(result);
//     let screen = document.getElementById('screen');
//     screen.value = result;
// };



function display(n){
    let screen = document.getElementById('screen');
    screen.value +=n; 
}

function solve(){
    let screen = document.getElementById('screen');
    let firstnum = screen.value;
    let secondnum = eval(firstnum)
    screen.value = secondnum;
}

function clr(){
    let screen = document.getElementById('screen');
    screen.value = '';
}