window.onload = function(){


    // 1) Створіть функцію яка приймає число і створює вказане числом кількість блоків з з правилом border-radius, width 50px height 50px та background-color

    
    // let blockStyle = document.querySelector('.blockstyle');
    // function createNum(num){
    //     for(let i=0; i<num; i++){
    //         let itemBlock = document.createElement('div');
    //         itemBlock.style.borderRadius = '30%';
    //         itemBlock.style.width = '50px';
    //         itemBlock.style.height = '50px';
    //         itemBlock.style.backgroundColor = 'red';
    //         blockStyle.appendChild(itemBlock);
    //     }
    // }
    // createNum(15);









    // 2)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків за допомогою функції
    


    // let sectionBlock = document.querySelector('section');
    // sectionBlock.style.display = 'flex';
    // function createBlock(num){
    //     for(let i=0; i<num; i++){
    //         let itemBlock = document.createElement('div');
    //         sectionBlock.appendChild(itemBlock);
    //     }
    // }
    // createBlock(50);










    // 3) доадайте всім стврореним 50 div елементам класс circle-elemt та кожному непарному елементу class  test

    
    // let sectionBlock = document.querySelector('section');
    // sectionBlock.style.display = 'flex';
    // function createBlock(num){
    //     for(let i=0; i<num; i++){
    //         let itemBlock = document.createElement('div');
    //         sectionBlock.appendChild(itemBlock);
    //         itemBlock.classList.add('circle-elemt');
    //         if(i%2 !== 0){
    //             itemBlock.classList.add('test');
    //         }
    //     }
    // }
    // createBlock(50);











    // 4) Замініть в парних елементів class circle-elemt  на odd-circle-elemt

        
    // let sectionBlock = document.querySelector('section');
    // sectionBlock.style.display = 'flex';
    // function createBlock(num){
    //     for(let i=0; i<num; i++){
    //         let itemBlock = document.createElement('div');
    //         sectionBlock.appendChild(itemBlock);
    //         itemBlock.classList.add('circle-elemt');
    //         if(i%2 !== 0){
    //             itemBlock.classList.add('test');
    //         }
    //         else{
    //             itemBlock.classList.replace('circle-elemt','odd-circle-elemt');
    //         }
    //     }
    // }
    // createBlock(50);










    // 5) додайте всім 50 елементам рандомний бекграунд


    // let sectionBlock = document.querySelector('section');
    // sectionBlock.style.display = 'flex';
    // function createBlock(num){
    //     for(let i=0; i<num; i++){
    //         let itemBlock = document.createElement('div');
    //         sectionBlock.appendChild(itemBlock);
    //         itemBlock.style.backgroundColor = randomColor();
    //         itemBlock.classList.add('circle-elemt');
    //         if(i%2 !== 0){
    //             itemBlock.classList.add('test');
    //         }
    //         else{
    //             itemBlock.classList.replace('circle-elemt','odd-circle-elemt');
    //         }
    //     }
    // }
    // createBlock(50);


    // function randomColor() {
    //     let color = '#';
    //     const letters = '0123456789ABCDEF';
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    

}