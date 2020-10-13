const form =document.querySelector('.add-new-todo');
const form2 =document.querySelector('.search');
const ul =document.querySelector('ul');
const i=document.querySelector('.fa-trash-o');
const search =document.querySelector('.search input');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const li =document.createElement('li')
    li.textContent=form.todoitem.value;
    li.innerHTML += '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    ul.append(li)
})

ul.addEventListener('click',e=>{
    if(e.target.classList.contains('fa-trash-o'))
    {
        e.target.parentElement.remove();
    }
})



const filtertodo= (todo)=>{
    const temp=(Array.from(ul.children));
    temp.forEach((element)=>{
        if(!element.textContent.toLowerCase().includes(todo)){
            element.classList.add('none');
         }
         else if(element.textContent.toLowerCase().includes(todo)){
             element.classList.remove('none');
        }    
    });    
}


search.addEventListener('keyup',()=>{
   
    const todo=search.value.trim().toLowerCase();
    filtertodo(todo);
})
form2.addEventListener('submit',e=>e.preventDefault())


