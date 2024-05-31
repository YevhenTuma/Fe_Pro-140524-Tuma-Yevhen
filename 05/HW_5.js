// splice:
// Завдання 1:
//  Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.


// let numberValue = [1,2,3,4,5,6,7,8,9];
// numberValue.splice(2,4);
// console.log(numberValue);








// Завдання 2: 
// Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.


// let numberValueArr = [1,2,3,4,5,6,7,8,9];

// function numberValue(array, index, element){
//     array.splice(index,element);
//     return array;
    
// }
// console.log(numberValue(numberValueArr, 3,2));







// reverse:
// Завдання 1:
//  Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

// let reverseArr = [1,2,3, 'tom', 'jon', 'anna'];
// reverseArr.reverse();
// console.log(reverseArr);    







// Завдання 2:
//  Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.


// let reverseArr = [1,2,3, 'tom', 'jon', 'anna'];
// function nevReverse(array){
//     array.reverse();
//     return array;
// }
// console.log(nevReverse(reverseArr));







// concat:
// Завдання 1:
//  Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.


// let firstArr = [1,2,3,4,5,6];
// let secondArr = ['Tom', 'Anna', 'Max'];
// firstArr = firstArr.concat(secondArr);
// console.log(firstArr);






// Завдання 2: 
// Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.


// let firstArr = [1,2,3,4,5,6];
// let secondArr = ['Tom', 'Anna', 'Max'];
// function bigArr(array){
//     firstArr = firstArr.concat(secondArr);
//     return array;
// }
// bigArr(firstArr);
// console.log(firstArr);







// includes:
// Завдання 1:
//  Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.


// let includesArr = [1,2,3,4,5,6];
// console.log(`чи є 6 в масиві includesArr ${includesArr.includes(6)}`);





// Завдання 2: 
//  Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.


// let includesArr = [1,2,3,4,5, 'Tom', 'Olha', 'Anna'];
// function includesEl(array, element){
//     return array.includes(element);
// }
// console.log(`Чи є едемент Olha в масиві includesArr ${includesEl(includesArr, 'Olha')}`);






// filter:
// Завдання 1: 
// Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише не парні числа.


// let numberArr = [4,7,15,20,27,26,41,52,69,75,88,90];
// function numberPar(value){
//     return value % 2 === 0;
// }
// let filterArr = numberArr.filter(numberPar);
// console.log(filterArr);






// Завдання 2:
//  Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.


// let numberArr = [4,7,10,25,8,27,26,41,52,69,75,80,90];
// let filterArr = numberArr.filter((number)=> number*2 === 50 || number*5 === 50 || number*10 === 80);
// console.log(filterArr);








// map:
// Завдання 1:
//  Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.


// let numberArr = [4,7,10,25,8,27,26,41,52,69,75,80,90];
// let doubleMap = numberArr.map(item=>item*item);
// console.log(numberArr);
// console.log(doubleMap);







// Завдання 2:
//  Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення


// let numberArr = [4,7,10,25,8,27,26,41,52,69,75,80,90];
// let doubleMap = numberArr.map(item=>item + 'Hallo');
// console.log(numberArr);
// console.log(doubleMap);
