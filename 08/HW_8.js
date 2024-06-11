window.onload = function(){

// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку


// let firstEl = document.querySelector('.firstEl');
// console.log(firstEl);
// let thirdEl = document.querySelector('.thirdEl');
// console.log(thirdEl);
// let lastEl = document.querySelector('.lastEl');
// console.log(lastEl);







// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив


// let [...liElements] = document.querySelectorAll('li');
// console.log(liElements);






// Створіть на сторінці елемент який вибирається ціми селекторами

// let listItems = document.querySelectorAll('ul.nav > li');
// let listItem = document.querySelectorAll('li:nth-child(2)');








// 1) пройдіть по масиву і зробіть заповнення таблиці даними з масива


// const booksArray = [
//     {
//         title: 'Пригоди Аліси в Країні Див',
//         year: 1865,
//         rating: 4.5
//     },
//     {
//         title: '1984',
//         year: 1949,
//         rating: 4.8
//     },
//     {
//         title: 'Гаррі Поттер і філософський камінь',
//         year: 1997,
//         rating: 4.7
//     }
// ];
// let table = document.querySelector('table');
// tbodyEl = document.createElement('tbody');
// table.appendChild(tbodyEl);
// booksArray.forEach(book=>{
//     let row = document.createElement('tr');
//     let titleTd = document.createElement('td');
//     titleTd.textContent = book.title;
//     row.appendChild(titleTd);

//     let yearTd = document.createElement('td');
//     yearTd.textContent = book.year;
//     row.appendChild(yearTd);

//     let ratingTd = document.createElement('td');
//     ratingTd.textContent = book.rating;
//     row.appendChild(ratingTd);
//     tbodyEl.appendChild(row);
// })









// 2)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
    



//     const elementsArray = [
//     { tag: 'p', text: 'Елемент 1' },
//     { tag: 'div', text: 'Елемент 2' },
//     { tag: 'span', text: 'Елемент 3' }
// ];


//     let contEl = document.querySelector('.container');
//     function createMyEl(elementData){
//         let element = document.createElement(elementData.tag);
//         element.textContent = elementData.text;
//         return element;
//     }
//     elementsArray.forEach(element=>{
//         let newEl = createElement(element);
//         contEl.appendChild(newEl);
//     })












}

