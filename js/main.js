const hidenBtn = document.querySelector('.template').content.querySelector('.deal__item');
const form = document.querySelector('.wish__form');
const toDoList = document.querySelector('.deal__list');
let wishItems = toDoList.children;
const title = document.getElementById('title')




form.addEventListener('submit', function (e) {
   let textField = document.querySelector('.wish__input').value.trim();
   e.preventDefault();
   if (textField == '') {
      return false;
   }
   else {
      const newBtn = hidenBtn.cloneNode(true);
      newBtn.textContent = textField;
      toDoList.appendChild(newBtn);
      form.reset();
      check()
   }
})
toDoList.addEventListener('click', function name(event) {
   console.log(event.target);
   if (event.target.classList.contains('deal__item')) {
      event.target.remove()
      check()
   }

})


function check() {
   if (toDoList.children.length == 0) {
      title.innerHTML = 'Возьмите меня на работу 😊'
   }
   else {
      title.innerHTML = 'Ты еще не все сделал, поторопись'
   }
}

