const finalres=document.getElementById('resultt');
const clearbtn=document.getElementById("clear-btn");
const perbtn=document.getElementById("per-btn");
const backbtn=document.getElementById("back-btn");

const divbtn=document.getElementById("div-btn");
const mulbtn=document.getElementById("mul-btn");
const subbtn=document.getElementById("sub-btn");
const addbtn=document.getElementById("add-btn");
const decimalbtn=document.getElementById("decimal-btn");
const equalbtn=document.getElementById("equal-btn");
const numberbtns=document.querySelectorAll('.number');


// Initialing the variable
let result = '';
let operation = '';
let previousOperand = 0;

const appendNumber= (number) => {
       if(number === '.' && result.includes('.')) return;             /*For not adding more than one decimal */
       result += number;
       updateresult();
}

const updateresult = () => {
       if (operation) {
              finalres.innerText = `${previousOperand}  ${operation} ${result}`;
       }
       else{
              finalres.innerText = result;    
       }
      
}

const selectOperator = (operatorValue) => {
       if(result === '') return;

       if(operation !== '' && previousOperand !== '')
       {
              calculateresult();
       }
       operation = operatorValue;
       previousOperand = result;
       result = '';
       updateresult();
}
 
const calculateresult =() =>{ 
       let evalresult;
       const prev= parseFloat(previousOperand);
       const current= parseFloat(result);

       if(isNaN(prev)  || isNaN(current)) return;

       switch (operation) {
              case '+':
                     evalresult = prev + current;
                     break;
              case '-':
                     evalresult = prev - current;
                     break;  
              case '*':
                     evalresult = prev * current;
                     break;
              case '/':
                     evalresult = prev / current;
                     break
              case '%':
                     evalresult = ((prev/100) * current);
                    break;
              default:
                     return;
       }
       result=evalresult.toString();
       operation = '';
       previousOperand= '';

}

// adding number button for display

numberbtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
           appendNumber(btn.innerText);
       
    });
});

// function to clear display
 const cleardisplay=()=>{
       result='';
       previousOperand='';
       operation='';
       updateresult();
 }

//  function to go back
const goback=()=>{
       if(result === '') return;
       result = result.slice(0,-1);
       updateresult();
}

// Adding decimal button for display

decimalbtn.addEventListener('click',()=> appendNumber('.'));
addbtn.addEventListener('click',() => selectOperator('+'));
subbtn.addEventListener('click',() => selectOperator('-'));
mulbtn.addEventListener('click',() => selectOperator('*'));
divbtn.addEventListener('click',() => selectOperator('/'));
perbtn.addEventListener('click',() => selectOperator('%'));
equalbtn.addEventListener('click',()=> {
       if(result === '') return;
       calculateresult();
       updateresult();
});
clearbtn.addEventListener('click',cleardisplay);
backbtn.addEventListener('click',goback);
