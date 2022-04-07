let x = prompt('Первый операнд:');
let action = prompt('Название действия');
let y = prompt('Второй оперант:');
let subt = Symbol('-');
let addit = Symbol('+');
let divis = Symbol('/');
let mult = Symbol('*');

if(action == subt){
 alert(x - y);
}else if(action == addit){
    alert(x + y);
}else if(action == divis){
    alert(x / y);
}else if(action == mult){
    alert(x ** y);
}
