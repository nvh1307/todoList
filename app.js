var form = document.querySelector('.form')
var todo = document,querySelector('.todo')

form.addEventListener('submit',function(event){
    event.preventDefault()
    let val = input.value.text
    if(val){
        addTodoList({
            text:val
        })

    }
    input.value = " "
})

function addTodoList(todo){
    var li = document.createElement('li')
    li.innerHTML = `
    <span>${todo.text}</span>
    <i class='bx bx-trash'></i>

    `
    if(todo.status==='completed')
    li.setAttribute('class','completed')
    todo.appendChild('li')

}

li.addEventListener('click',function(){
    this.classList.toggle('completed')
})
