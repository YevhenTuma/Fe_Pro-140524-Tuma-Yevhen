// Завдання для Math.min та Math.max:

// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.


// function minValue (...arg){
//     console.log(Math.min(...arg));
// }
// minValue(25,34,45,85,12);







// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.


// function maxValue (...arg){
//     console.log(Math.max(...arg));
// }
// maxValue(25,34,45,85,12);








// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.


// function degreesValue(...value){
//     console.log(Math.pow(...value));
// }
// degreesValue(5,5);








// Завдання для Math.floor та Math.ceil:

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.


// function floowValue (value){
//     console.log(Math.floor(value));
// }
// floowValue(5.89);







// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.


// function ceilValue (value){
//     console.log(Math.ceil(value));
// }
// ceilValue(5.89);






// Завдання для Date.toLocaleString:
// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.


// const stringData = new Date;
// console.log(stringData.toLocaleString());





// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.


// let stringValue = 'Думи мої, думи мої, Лихо мені з вами, Нащо стали на папері, Сумними рядами';
// console.log(stringValue.toUpperCase().split(" "));






// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.


// function restValue(str, ...arg){
//     console.log(String(str), arg);
// }
// restValue('Тест стрінг', 1, 2, 3, true);







// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

// ЩОСЬ ТУТ Я ТРОХИ НЕ ЗРОЗУМІВ З ЦИМ ЗАВДАННЯМ.
// function valueAverage(...arg){

// }





// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.


// function valueType(...arg){
//     console.log(typeof arg);
// }
// valueType('Test',2,4)






// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.


// function valueType(arg){
//     let typeArg = typeof arg;
//     if(typeArg === "string"){
//         console.log(`Тип цього значення: ${typeArg}`);
//     }
//     else if(typeArg === "number"){
//         console.log(`Тип цього значення: ${typeArg}`);
//     }
//     else{
//         console.log(`Інший тип значення: ${typeArg}`);
//     }
// }
// valueType('Тест');
// valueType(2);
// valueType(true);

