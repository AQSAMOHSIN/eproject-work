let UnitInput = document.getElementById('lbsInput');
let Grams =  document.getElementById('gramsOutput');
let Kilograms = document.getElementById('kgOutput');
let Ounces = document.getElementById('ozOutput');
let Output =  document.querySelector('.output');
let MainUnit = document.getElementById('Main-Unit');
let Output_1_Title = document.getElementById('output1-title');
let Output_2_Title = document.getElementById('output2-title');
let Output_3_Title = document.getElementById('output3-title');
Output.style.display = 'none';


  
  UnitInput.addEventListener('input', function(){
    if(MainUnit.value === 'Select')
    {
       alert('Please Select Unit First ');
       UnitInput.value = "";
    }

    else {
        CheckUnit();

    }

  });

  






        function CheckUnit()
        {
             
           
           MainUnit.addEventListener('click',function(){
           



               if(MainUnit.value ==='Pounds')
                   {
                       
                       UnitInput.placeholder = 'Enter unit in Pounds ....';
                       ConvertPounds();
}
               else if(MainUnit.value === 'Grams')
                   {
                       UnitInput.placeholder = 'Enter unit in Grams ....';
                       ConvertGrams();
}
                   else if(MainUnit.value === 'Kilograms')
                   {
                       UnitInput.placeholder = 'Enter unit in kiloGrams ....';
                       ConvertKilograms();
}
               else if(MainUnit.value === 'Ounces')
                   {
                       UnitInput.placeholder = 'Enter unit in Ounces ....';
                       ConvertOunces();
}
               
               
           })          
}
        
        
        function ConvertPounds()
        {
          UnitInput.addEventListener('input',function(){


           

     Output.style.display = 'block';

    Grams.innerHTML = UnitInput.value/0.0022046;
  
    Kilograms.innerHTML = UnitInput.value*0.45359237;

     Ounces.innerHTML = UnitInput.value*16;

  
  });  }
        
        
        
        
        
        
        
        
        
        
        
        
        function ConvertKilograms()
        {
          UnitInput.addEventListener('input',function(){

              
      Output_2_Title.innerText = 'Pounds';

     Output.style.display = 'block';

    Grams.innerHTML = UnitInput.value*1000;
  
    Kilograms.innerHTML = UnitInput.value*2.20462;

     Ounces.innerHTML = UnitInput.value*35.274;
              
    
  
  });  }
        
        
        
        
        function ConvertGrams()
        {
          UnitInput.addEventListener('input',function(){

              
      Output_1_Title.innerText = 'Pounds';

     Output.style.display = 'block';

    Grams.innerHTML = UnitInput.value/453.59237;
  
    Kilograms.innerHTML = UnitInput.value/1000;

     Ounces.innerHTML = UnitInput.value/28.3495;
              
    
  
  });  }
        
        
             function ConvertOunces()
        {
          UnitInput.addEventListener('input',function(){

              
      Output_3_Title.innerText = 'Pounds';

     Output.style.display = 'block';

    Grams.innerHTML = UnitInput.value*28.3495;
  
    Kilograms.innerHTML = UnitInput.value*0.0283495;

     Ounces.innerHTML = UnitInput.value*0.0625;
              
    
  
  });  }
        
        


