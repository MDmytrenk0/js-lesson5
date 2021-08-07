// -------------------TASK1---------------------------
let seasons=+prompt('Ведіть число Місяця');
switch(seasons) {
    case 1:
    case 2:
    case 12:
            alert('Пора року Зима');
    break;
    case 3:
    case 4:
    case 5:
            alert('Пора року Весна');
    break;
    case 6:
    case 7:
    case 8:
            alert('Пора року Літо');
    break;
    case 9:
    case 10:
    case 11:
            alert('Пора року Осінь');
    break;

    default:
        alert('це неможливо');
        break;
}
// -------------------TASK2---------------------------
let n=+prompt('Ведіть число');
function simple() {
    for (let i=2; i<=n; i++) {
        if (n%i==0) {
        console.log("Не просте число"); 
       }
       return;  
    }
}
simple ();
// -------------------TASK3---------------------------
function max(...arg) {
    let maxElem=-Infinity;
    for (i=0; i<arg.length; i++) {
       if (arg[i] > maxElem) {
        maxElem=arg[i];
       } 
       console.log(maxElem);
    }
    return maxElem;
}
max(5,-2);
max(5,-2, 30, 6);
