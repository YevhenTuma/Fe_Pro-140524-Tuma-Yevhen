// 1
//  -Створити массив з днями неділі ( Понеділок, вівторок ... і т.д )  за допомогою циклу перебрати значення массиву, якщо значення вівторок чи четверг вивсести алерт в 19 00 урок



// ВИБАЧТЕ ВИ МОЖЕТЕ ДОПОМОГТИ З ЦИМ ЗАВДАННЯМ? ЩОСЬ НЕ ЗНАХОДИТЬ В МЕНЕ SWITCH ТІ ДАННІ ЯКІ Я НАПИСАВ. І МАСИВ ВІДОБРАЖАЄТЬСЯ В КОНСОЛІ ЯКОСЬ НЕ ТАК.

// let day = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Суббота', 'Неділя'];
// console.log(day.length);
// for(let i=0; i<day.length; i++){
//     console.log(`День тижня ${day[i]}`);
// }
// switch(day){
//     case 'Вівторок':
//         alert('В 19:00 урок');
//         break;
//     case 'Четвер':
//         alert('В 19:00 урок');
//         break;
//     default:
//             alert('Error');
// }







// 2
//  Підрахунок суми парних чисел:
// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).


// let whileCounter = 0;
// while(whileCounter<21){
//     if(whileCounter%2 ===0){
//         console.log(`While counter ${whileCounter}`);
//     }

//     whileCounter++;
// }






// 3
//  Таблиця множення:
// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).

// for(let i=0; i<10; i++){
//     console.log(`Множення на 5:  ${i*5}`)
// }







// 4 
// Зворотний лічильник:
// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.


// for(i=10; i>0; i--){
//     console.log(i);
// }






// 5 
// Напишіть програму, яка приймає число і використовуючи if та for, виводить  повідомлення про те ,які числа є  парним чи непарним в ньому.


// for(i=1; i<11; i++){
//     if(i%2 === 0){
//         console.log(`парне число ${i}`);
//     }
//     else{
//         console.log(`не парне число ${i}`);
//     }
// }






// 6
//  Знаходження першого парного числа:
// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.


// for(i=1; i<11; i++){
//     if(i%2 === 0){
//         console.log(i);
//         break
//     }
// }







// 7.
// Виведення парних чисел:
// Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа. Використайте оператор continue, щоб пропустити ітерації для непарних чисел.


// НЕ ЗНАЮ ЧОМУ АЛЕ В МЕНЕ ВИЙШЛО ЗРОБИТИ ЗАВДАННЯ БЕЗ ОПЕРАТОРА continue
// for(i=1; i<11; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }








// 8.
//   Створити prompt  який питає день, якщдо це ВТ чи Чт то вивести у вас сьогодні заняття, у вас сьогодні вільний день, вирішити за допомогою Switch


// let day = prompt('Введіть день тижня');
// switch(day){
//     case 'Вівторок':
//     case 'вівторок':
//     case 'Tuesday':
//     case 'tuesday':
//         alert('У вас сьогодні заняття о 19:00');
//         break
//     case 'Четвер':
//     case 'четвер':
//     case 'Thursday':
//     case 'thursday':
//         alert('У вас сьогодні заняття о 19:00');
//         break
//     default:
//         alert('Сьогодні вільний день');
// }







// 9
//    Створити prompt  який питає назву планети і вивести інформацію чи вона знаходиться в сонячній системі чи ні, вирішити за допомогою світч


// let planet = prompt('Введіть назву планети');
// switch(planet){
//     case 'Меркурій':
//     case 'меркурій':
//     case 'Mercury':
//     case 'mercury': 
//         alert('Планета в сонячній системі');
//         break
//     case 'Венера':
//     case 'венера':
//     case 'Venus':
//     case 'venus': 
//         alert('Планета в сонячній системі');
//         break
//     case 'Земля':
//     case 'земля':
//     case 'Earth':
//     case 'earth': 
//         alert('Планета в сонячній системі');
//         break 
//     case 'Марс':
//     case 'марс':
//     case 'Mars':
//     case 'mars': 
//         alert('Планета в сонячній системі');
//         break     
//     case 'Юпітер':
//     case 'юпітер':
//     case 'Jupiter':
//     case 'jupiter': 
//         alert('Планета в сонячній системі');
//         break
//     case 'Сатурн':
//     case 'сатурн':
//     case 'Saturn':
//     case 'saturn': 
//         alert('Планета в сонячній системі');
//         break
//     case 'Уран':
//     case 'уран':
//     case 'Uranus':
//     case 'гranus': 
//         alert('Планета в сонячній системі');
//         break
//     case 'Нептун':
//     case 'нептун':
//     case 'Neptune':
//     case 'neptune': 
//         alert('Планета в сонячній системі');
//         break
//     case 'Плутон':
//     case 'плутон':
//     case 'Pluto':
//     case 'pluto': 
//         alert('Планета в сонячній системі');
//         break
//     default:
//         alert(`${planet} Такої планети не існує`);
// }







// Додаткове завдання
// Перебрати цей массив і замінити смайли =) на ;) після чого вивести в консоль оновлений масив

// ПІДСКАЖІТЬ Я НА ПРАВИЛЬНОМУ ШЛЯХУ?

let smile = [':)', '=)',':)', '=)',':)', '=)'];
for(let i=0; i<smile.length; i++){
    if(i == '=)'){
        
    }
}




