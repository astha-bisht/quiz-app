const questions =[{
   'que': 'Which of the following is a markup language?',
   'a':'HTML',
   'b':'CSS',
   'c':'JavaScript',
   'd':'PHP',
   'correct':'a'
},
{
    'que': 'What year was JavaScript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{
    'que': 'What does CSS stands for?',
    'a':'Hypetext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'none of the above',
    'correct':'b'

},
{
    'que': 'What does HTML stands for?',
    'a':'Hypetext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'none of the above',
    'correct':'a'

},
{
    'que': 'What does JS stands for?',
    'a':'Hypetext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'none of the above',
    'correct':'d'

}]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const quebox=document.getElementById("quesBox");
const option=document.querySelectorAll('.op')

const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data=questions[index];
    quebox.innerText=`${index+1}) ${data.que}`;
    option[0].nextElementSibling.innerText=data.a;
    option[1].nextElementSibling.innerText=data.b;
    option[2].nextElementSibling.innerText=data.c;
    option[3].nextElementSibling.innerText=data.d;
     
}
const submitQuiz=()=>
{const data=questions[index];
    const ans=getAnswer()
    if(ans===data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
return;
}

const getAnswer=()=>{
    let answer;
    option.forEach(
       (input)=>{
            if(input.checked){
               answer=input.value; 
  
            }
          
            
        }
    )
    return answer;
}
const reset=()=>{
    option.forEach(
        (input)=>{
             input.checked=false;     
                      }
    ) 
}
const endQuiz=()=>{
     document.getElementById("box").innerHTML=`
     <div style="text-align:center">
     <h3>THANK YOU FOR PLAYING THE QUIZ</h3>
     <h2> ${right} / ${total} are correct  </h2>
     </div>`
}
loadQuestion();      