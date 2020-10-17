let firstnum;
let secondnum;
let operate = '';



let setnum = function (n) {
    let screen = document.getElementById('screen');
    if(screen.value === '+' || screen.value === '-' || screen.value === '*' || screen.value === '/'){
        screen.value = ' ';
    }
    screen.value += n;
};

let setoper = function (n){
    let screen = document.getElementById('screen');
    firstnum = screen.value;
    screen.value += n;
    operate += n;
};

let solve = function(){
    let screen = document.getElementById('screen');
    secondnum = screen.value;
    let result = 0;
    if(operate === '+'){
        result = firstnum + secondnum;
    } 
    if(operate === '-'){
        result = firstnum - secondnum;
    }
    if(operate === '*'){
        result = firstnum * secondnum;
    }
    if(operate === '/'){
        result = firstnum / secondnum;
    }
};

let clr = function(){
    let screen = document.getElementById('screen');
    screen.value = '';
}