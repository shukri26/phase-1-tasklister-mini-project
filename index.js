document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    myTodolist();
    form.reset()
  })
  
})


function myTodolist(todo){
    todo = document.getElementById('new-task-description').value;
    const li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteToDo)
    btn.textContent = 'Delete'
    li.textContent = `${todo}`
    let tasks = document.getElementById("tasks")
    tasks.appendChild(li)
    li.appendChild(btn);
  }

  function deleteToDo(e){
    e.target.parentNode.remove()
  }