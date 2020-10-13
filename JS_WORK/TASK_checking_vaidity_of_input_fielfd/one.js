//to do  6
// const ul =document.querySelector('ul');
// const button =document.querySelector('button')
// console.log(ul);

// ul.addEventListener('click',e=>{
//     e.target.remove();
// })

// button.addEventListener('click',e=>{
//     const li =document.createElement('LI');
//     li.textContent='new item ';
//     ul.append(li);
// })



//7 

const form =document.querySelector('form');
const username=form.username.value;
const pattern=/^[a-z]{3,6}$/
form.username.addEventListener('keyup',e=>{
    console.log(form.username.value)
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class','success')
    }else {
        form.username.setAttribute('class','error')

    }

})