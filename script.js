//let userName = prompt("Как вас зовут, пользователь?");   

//if (userName == 'Макс') {
    //console.log(`Здравствуйте, ${userName}`)
//} else if (userName == 'adminМакс') {
   //console.log(`Здравствуйте, ${userName}, вам доступна админ панель!`)
//} else {
    //console.log(`${userName}, вы не зарегистрированы!`)
//};


//let userName = prompt('Введите имя');
//let lastName = prompt('Теперь, введите фамилию');
//let nickName = prompt('И на конец, введите логин');

//alert(userName && lastName && nickName && "Аноним");


//for(let i = 0; i < 50; i++) {
    //if (i % 2 == 0) console.log(i)
//}


// let passWord = ('123Kiber');
// let login = ('Oxygen Breather');
// let userName = ('Макс');

// const autorize = () => {
//     let loginInput = prompt('Введите логин')
//     let passWordInput = prompt('Введите пароль пользователя')
//         if (login == loginInput) {
//             console.log('Логин найден!')
//         } else {
//             console.log('Логин не найден')
//         }
//         if (passWord == passWordInput) {
//                 console.log('Пароль верный!')
//         } else {
//                 console.log('Пароль НЕ верный!')
//         }
// }

// autorize();

// let passWord = ('123Kiber');
// let login = ('Oxygen Breather');
// let userName = ('Max')

// const autorize = () => {
//     let loginInput = prompt('1) Введите логин')
//     let passWordInput = prompt('2) Теперь, введите пароль аккунта')
//         if (loginInput != login) {
//             autorize()
//         } else if (loginInput == login) {
//             console.log('Логин верный!')
//         }
//         if (passWord != passWordInput) {
//             autorize()
//         } else if (passWord == passWordInput) {
//             console.log('Пароль верный!')
//         }
//         alert(`Пользователь по имени: ${userName}, вошёл в чат!`)
// }

// autorize();

// let numbers = [5, 2, 1, -10, 8];

// numbers.sort(function (a, b){
// return a - b 
// })
// alert(numbers)
// console.log(numbers)

// const IPhone = {
//     Price: "750 $",
//     Color: "White",
//     Repairability: "Questionable",
//     Brightness: "2500 duim",
//     Battery: "2934 mAh",
//     Connector: "Usb Lightning"
// }

// IPhone.Price = "83 $"
// IPhone.Repairability = "Satisfactory"
// IPhone.Connector = "Micro USB"
// IPhone.Battery = "3000 mAh"
// IPhone.Brightness = "2000 duim"
// IPhone.Color = "Black"

// console.log("Honor 9 lite: ", IPhone)

// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset = offset + 256;
//     if (offset > 768) {
//         offset = 0; 
//     }
//     sliderLine.style.left = -offset + 'px'; 
// });


// document.querySelector('.slider-prev').addEventListener('click', function(){
//     offset = offset - 256;
//     if (offset < 0) {
//         offset = 768; 
//     }
//     sliderLine.style.left = -offset + 'px';
// });

let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function(){
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList))
});

function displayMessages(){
    let displayMessage = '';
     if(todoList.length === 0) todo.innerHTML = '';
     todoList.forEach(function(item, i){
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}'${item.checked ? 'checked': ''}>
            <label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
    todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;

    todoList.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

todo.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todoList.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
            if(event.ctrlKey || event.metaKey){
                todoList.splice(i, 1);
            }else{
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

        























































