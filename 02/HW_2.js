// 1.
// Створіть змінні number1 та number2 і використайте оператори порівняння, щоб визначити, чи вони рівні.
// Виведіть результат за допомогою alert, щоб повідомити користувача про те, чи рівні числа.


// let number1 = 254;
// let number2 = 254;
// if(number1===number2){
//     alert('Числа рівні');
// }
// else{
//     alert('Числа не рівні');
// }






// 2.
// Метод вводу інформації та логічні порівняння:
// Використовуючи prompt, запросіть у користувача введення числа.
// Перевірте, чи введене число парне чи непарне.
// Виведіть результат з використанням console.log.


// let NumberValue = Number(prompt('Введіть число'));
// if(NumberValue%2 === 0){
//     console.log('Число парне');
// }
// else{
//     console.log('Число не парне');
// }








// 3.
//  Розрахунок вартості товару та console.log:
// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
// Виведіть результат за допомогою console.log.


// let price = Number(prompt('Введіть ціну'));
// let value = Number(prompt('Введіть калькість'));
// console.log(`Всього: ${price*value}`);






// 4.
//  Розрахунок знижки на товар та alert:
// Використовуючи prompt, запросіть в користувача вартість товару.
// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
// Виведіть результат знижки за допомогою alert.


// let price = Number(prompt('Вкажіть ціну товару'));
// alert(`Ваша ціна зі знижкою: ${price/2}`);







// 5
// Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.


// let firstValue = Number(prompt('Введіть перше число'));
// let secondValue = Number(prompt('Введіть друге число'));
// let thirdValue = Number(prompt('Введіть третє число'));
// if(firstValue>secondValue && firstValue>thirdValue){
//     console.log('Перше число найбільше');
// }
// else if(secondValue>firstValue && secondValue>thirdValue){
//     console.log('Друге число найбільше');
// }
// else if(thirdValue>firstValue && thirdValue>secondValue){
//     console.log('Третє число найбільше');
// }







// 6
//  Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.


// let monthValue = Number(prompt('Введіть місяць'));
// if(monthValue>=1 && monthValue<=2){
//     console.log('Зараз зима');
// }
// else if(monthValue>=3 && monthValue<=5){
//     console.log('Зараз весна');
// }
// else if(monthValue>=6 && monthValue<=8){
//     console.log('Зараз літо');
// }
// else if(monthValue>=9 && monthValue<=11){
//     console.log('Зараз осінь');
// }
// else if(monthValue===12){
//     console.log('Зараз зима');
// }








// 7. 
// Оцінка студента:

// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F



// let gradeValue = Number(prompt('Введіть свою оцінку'));
// if(gradeValue<60){
//     console.log('Ваша оцінка F');
// }
// else if(gradeValue>=60 && gradeValue<=69){
//     console.log('Ваша оцінка D');
// }
// else if(gradeValue>=70 && gradeValue<=79){
//     console.log('Ваша оцінка C');
// }
// else if(gradeValue>=80 && gradeValue<=89){
//     console.log('Ваша оцінка B');
// }
// else if(gradeValue>=90 && gradeValue<=100){
//     console.log('Ваша оцінка A');
// }
// else{
//     console.log('Error');
// }