const correct_ans=['B','B','A','A'];
const form =document.querySelector('form');
const result =document.querySelector('.result')
const span=document.querySelector('.score')


const user_ans=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

form.addEventListener('submit',e=>{
    e.preventDefault();

let score=0;
    const user_ans=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    user_ans.forEach((ans,index)=>{
        if(ans === correct_ans[index])
        {
            score+=25;
        }



    })
 
    result.classList.remove('d-none');
    scrollTo(0,0);

     let i=0;
     console.log(score);
    const timer=setInterval(() => {
        if(i===score){
            clearInterval(timer);
        }else{
            i++;
            span.textContent=`${i}%`;
        }
        
    });
    
     

},1000);
