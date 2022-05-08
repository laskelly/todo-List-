//Define variables
const listItems = document.getElementById('list-item')
const listItemValue = document.elementFromPoint.text
const submitBtn = document.querySelector('.submit-btn')
const liText = document.createElement('li')
const todoList = document.querySelector('.todo-list')

// console.log(listItems)
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const listItemValue = listItems.value
  liText.innerHTML = listItemValue;
  todoList.appendChild(liText)
  listItems.value = ''

  if (listItemValue === '') {
    alert('Input a list')
  }

  // console.log(listItems)
  console.log(todoList)
})