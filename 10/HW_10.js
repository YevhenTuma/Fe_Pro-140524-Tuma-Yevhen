window.onload = function(){

    //     1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір


// let sectionEl = document.querySelector('section');
// let pEl = document.createElement('p');
// let btnEl = document.createElement('button');
// pEl.textContent = 'Цей текс реагує на натискання кнопки';
// sectionEl.appendChild(pEl);
// btnEl.textContent = 'Жмакай сюди';
// sectionEl.style.margin = '0 auto';
// sectionEl.style.textAlign = 'center';
// btnEl.style.fontWeight = '400';
// btnEl.style.borderRadius = '10%';
// btnEl.style.color = '#524879';
// btnEl.style.backgroundColor = 'yellow';

// sectionEl.appendChild(btnEl);

// function getRandomColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// sectionEl.onclick = function(){
//     pEl.style.color = getRandomColor(); 
// }








//                  2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).


// let divEl = document.querySelector('div');
// let pEl = document.createElement('p');
// pEl.textContent = 'Цей текст збільшується при подвійному кліку';
// divEl.appendChild(pEl);
// pEl.classList.add('resizeBlock');
// pEl.ondblclick = function(){
//     this.style.width = `${this.offsetWidth *2}px`;
//     this.style.height = `${this.offsetHeight *2}px`;
//     // ПІВ ГОДИНИ ПРОСИДІВ НЕ ПРАЦЮВАЛО, А ПОТІМ ПРИБРАВ ПРОБІЛ ЗВЕРХУ ПЕРЕД "px" І ВСЕ ЗАПРАЦЮВАЛО. ЦЕ ЖЕСТЬ)))
// }







//                  3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.


// let countBtn = document.querySelector('.counterUp');
// let counterEl = document.querySelector('.counter');
// let count = 0;
// countBtn.addEventListener('click', upCounter)
// function upCounter(){
//     count++;
//     counterEl.textContent = count;
//     if(count>9){
//         countBtn.removeEventListener('click', upCounter)
//     }
// }








        //  4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки 



// let containerEl = document.querySelector('.container');
// for(let i=0; i<10; i++){
//     let newDiv = document.createElement('div');
//     newDiv.textContent = `Element ${i+1}`;
//     newDiv.style.backgroundColor = getRandomColor();
//     newDiv.onclick = function(){
//         this.remove();
//     }
//     containerEl.appendChild(newDiv);
// }
// function getRandomColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }






//                   5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік 






// // ЩОСЬ ТУТ НЕ МОЖУ ЗРОЗУМІТИ ЧОМУ В МЕНЕ ЧОТИРИ ЕЛЕМЕНТИ.
// let blcContainer = document.querySelector('.blockContainer');
// for(let i=0; i<=3; i++){
//     let buttonEl = document.createElement('button');
//     if(i===1){
//         buttonEl.classList.add('first');
//     }
//     else if(i===2){
//         buttonEl.classList.add('second');
//     }
//     else{
//         buttonEl.classList.add('third');
//     }

// buttonEl.onclick = function (event) {
//     alert(`Я кнопка: ${event.target.classList}`);
// };
// blcContainer.appendChild(buttonEl);
// buttonEl.textContent = 'Жмакай';
// };








//                        6. onclick + робота з css
// створіть кнопку та список з лінками.Кнопка має текст "Відкрити меню". І по кліку на кнопку відкриває меню яке заховане за допомгою css та змінює текст в середині на "Закрити меню"







// let btnMenu = document.querySelector('.menuBlock #btnMenu');
// let sectionMenuEl = document.querySelector('.sectionMenu');
// btnMenu.onclick = function(){
//     if(sectionMenuEl.style.dispay === 'block'){
//         sectionMenuEl.style.dispay = 'none';
//         btnMenu.textContent = 'Відкири';
//     }
//     else{
//         sectionMenuEl.style.dispay = 'block';
//         btnMenu.textContent = 'Закрити';
//     }
// }
}