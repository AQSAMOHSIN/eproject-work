const gettodo= (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{

    if(request.readyState===4 && request.status===200){
        callback(undefined,request.responseText);
    }else if(request.readyState===4)
    {
        callback("can not fetch",undefined);
    }

    })

    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
};


gettodo((err,data)=>{

    console.log(err,data);
});