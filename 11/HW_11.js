window.onload = function(){

    //                   Завдання 'onContextMenu': 
    // Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

    let textBlockEl = document.querySelector('#textBlock');
    let contextMenuEl = document.querySelector('#contextMenu');

    textBlockEl.addEventListener('contextmenu', function(e){
        e.preventDefault();
        contextMenuEl.style.display = 'block';
        contextMenuEl.style.left = `${e.pageX}px`;
        contextMenuEl.style.top = `${e.pageY}px`;
    });
    document.querySelector('#centerContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'center';
    });
    document.querySelector('#rightContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'right';
    });
    document.querySelector('#leftContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'left';
    });
    document.querySelector('#hideMenu').addEventListener('click', function(){
        textBlockEl.style.display = 'none';
    });

    
    











    // Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

// let keyUpBlock = document.querySelector('.key_up');
// let circleEl = document.querySelector('.circle');

// let x = 0;
// let y = 0;

// circleEl.style.left = `${x}px`;
// circleEl.style.top = `${y}px`;

// function initialPosition(){
//     circleEl.style.left = `${x}px`;
//     circleEl.style.top = `${y}px`;
// }

// document.addEventListener('keyup', (e) =>{
//     if(e.key === 'ArrowUp'){
//         y = Math.max(0, y - 2);
//     }
//     else if(e.key === 'ArrowDown'){
//         y = Math.min(keyUpBlock.clientHeight - circleEl.clientHeight, y + 2);
//     }
//     else if(e.key === 'ArrowLeft'){
//         x = Math.max(0, x - 2);
//     }
//     else if(e.key === 'ArrowRight'){
//         x = Math.min(keyUpBlock.clientWidth - circleEl.clientWidth, x +2);
//     }
//     initialPosition();
// });
    








// Створіть елемент  P, який при наведенні миші змінює текст на "Hello, World!", а при відведенні миші повертається до початкового тексту.


// let mouseBlock = document.querySelector('.hallo_world');

// mouseBlock.addEventListener('mouseover', function(){
//     this.classList.add('new_block_hallo_world');
//     this.textContent = '"Goodbay World"';
// });

// mouseBlock.addEventListener('mouseout', function(){
//     this.classList.remove('new_block_hallo_world');
//     this.textContent = '"Hello, World!"';
// })








// Створіть два елементи div. Один з них повинен з'являтися, коли миша наведена на інший, і зникати, коли миша з нього відведена.


// let firstEl = document.querySelector('.firstEl');
// let secondEl = document.querySelector('.secondEl');

// firstEl.addEventListener('mouseover', function(){
//     secondEl.style.display = 'block';
// });
// firstEl.addEventListener('mouseout', function(){
//     secondEl.style.display = 'none';
// })













}