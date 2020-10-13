let ul= document.querySelector('.todoitems');
let form1=document.querySelector('.search');
let form2= document.querySelector('.additem');
let search =document.querySelector('.add');

//search 

const filtertodo =(todo)=>{
    const temp =Array.from(ul.children)
    temp.forEach((ele)=>{
        if(ele.textContent.includes(todo))
        {
            ele.classList.remove('remove');
        }
        else if(!ele.textContent.includes(todo))
        {
            ele.classList.add('remove');
        }

    })
}


search.addEventListener('keyup',()=>{
    const todo=search.value.trim().toUpperCase();
    filtertodo(todo);
})







//adding to list 
form2.addEventListener('submit',e=>{
    e.preventDefault();
    const li =document.createElement('li')
    li.textContent=form2.add.value.toUpperCase();
    li.innerHTML += '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    ul.append(li)
})

//deleting from list
ul.addEventListener('click',e=>{
    if(e.target.classList.contains('fa-trash-o'))
    {e.target.parentElement.remove(); };

})

