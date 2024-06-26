window.onload = function(){
    // Завдання 1: Конвертер валют
    // Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.
    // Інструкції:
    // Створіть два поля введення: одне для суми, друге для курсу обміну.
    // Додайте кнопку, яка виконає конвертацію при її натисканні.
    // При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
    // Виведіть результат конвертації на сторінку.
    

    // function currenecyAmount(){
    //     let amountEl = parseFloat(document.querySelector('#amountValue').value);
    //     let currencyEl = parseFloat(document.querySelector('#currencyValue').value);

    //     let multiAmount = amountEl * currencyEl;

    //     document.querySelector('#currencyResult').value = multiAmount.toFixed(2);
    // }
    // document.querySelector('#currencyButton').addEventListener('click',currenecyAmount);











                    // Завдання 2: додати в Todo список створений на уроці в кожний item кнопку видалення елементу


            // let form = document.querySelector('#formTodo');
            // let todoinput = document.querySelector('#todo');
            // let listGroup = document.querySelector('.list-group');

            // function createItem(value){
            //     let item = document.createElement('li');
            //     item.classList.add('list-group-item');
            //     let date = new Date().toDateString();
            //     item.innerHTML = `${value}: <strong>${date}</strong>`;
            //     let buttonDelate = document.createElement('button');
            //     buttonDelate.textContent = 'Delate';
            //     buttonDelate.classList.add('button_delate');
            //     item.appendChild(buttonDelate);
            //     return item
            // }
            // form.addEventListener('submit', function(e){
            //     e.preventDefault();
            //     if(todoinput.value.lendth === 0){
            //         todoinput.classList.add('bg-danger', 'border-danger');
            //     }
            //     else{
            //         listGroup.appendChild(createItem(todoinput.value));
            //         todoinput.value = '';
            //         if(todoinput.classList.contains('border-darger')){
            //             todoinput.classList.remove('bg-danger', 'border-danger');
            //         }
            //     }
            // });

            // listGroup.addEventListener('click', function(e){
            //     if(e.target.classList.contains('button_delate')){
            //         listGroup.removeChild(e.target.parentElement);
            //     }
            // });











            // Завдання 3: Редактор теми
            // Мета: Створити простий графічний редактор теми сторінки
            // Інструкції:
            // Створіть  4 поля інпут які вибирають колір, і змінють його в css змінній


            // let inputName = document.querySelector('#nameInput');
            // inputName.addEventListener('click', function(){
            //     this.style.backgroundColor = 'green';
            // });
            // inputName.addEventListener('blur', function(){
            //     this.style.backgroundColor = 'red'
            // });











                    // Завдання 5: Форма реєстрації
                    // Мета: Створити просту форму реєстрації нового користувача.
                    
                    // Інструкції:
                    // Створіть форму що має містити поля імя пароль, повторний ввід пароля електронна пошта.  Якщо поля не заповненні то кнопка відправки форми заблокована, якщо всі заповненні і паролі співпадають то кнопка розблоковується ( втрачає атрібут disabled)


    



    // let form = document.querySelector('#registrationForm');
    // let nameInput = document.querySelector('#name');
    // let emailInput = document.querySelector('#email');
    // let passwordInput = document.querySelector('#password');
    // let confirmPasswordInput = document.querySelector('#confirmPassword');
    // let submitBtn = document.querySelector('#submitBtn');

    // function validateForm(){
    //     let name = nameInput.value.trim();
    //     let email = emailInput.value.trim();
    //     let password = passwordInput.value.trim();
    //     let confirmPassword = confirmPasswordInput.value.trim();
    //     console.log(name, email, password, confirmPassword);
    //     let isFormValid = name.length>2 && email.length>4 && password.length>6 && confirmPassword >6 && (password === confirmPassword);

    //     console.log(isFormValid);
    //     submitBtn.disabled = !isFormValid;
    // }

    // nameInput.addEventListener('input', validateForm);
    // emailInput.addEventListener('input', validateForm);
    // passwordInput.addEventListener('input', validateForm);
    // confirmPasswordInput.addEventListener('input', validateForm);

    // form.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     alert('Форма відправлена');
    //     form.reset();
    //     submitBtn.disabled = true;
    // });

}