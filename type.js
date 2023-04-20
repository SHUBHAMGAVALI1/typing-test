
let sentence=['Please set the table for dinner.' ,
    'You need to set realistic goals.',
    'The prisoners were set free.',
    'I set a goal to lose 3 kg by the end of the year.'
];

let message=document.getElementById('msg');
let text=document.getElementById('textarea');
let button=document.getElementById('button');

let starttime;
let endtime; 



// playgame function calling

 function playgame(){
let randomnumber=Math.floor(Math.random()*sentence.length);
// console.log(Math.random());
// console.log(sentence.length);
// console.log(Math.random()*sentence.length);
message.innerText=sentence[randomnumber];
let date=new Date();
starttime=date.getTime();
button.innerText='Done';
}



// wordcounter function calling


const wordcounter=(str)=>{
let response=str.split(' ').length;
// console.log(response);
return response;
}

// calling comparewords function
const comparewords=(str1,str2)=>{
    let word1=str1.split(' ');
    let word2=str2.split(' ');
let count=0;
console.log(word1);
console.log(word2);
word1.forEach((element,index) => {
    if(element==word2[index]){count++;}
    
});

let errorwords=(word1.length-count);

return`${count} correct out of ${word1.length} words and the total number of error are ${errorwords}.`;
}



// endplay function calling
 const endplay=()=>{
    let date=new Date();
    endtime=date.getTime();
    let totaltime=((endtime-starttime)/1000);
    // console.log(totaltime );

    let totalstring=text.value;
    let wordcount=wordcounter(totalstring);// calling wordcounter function

    let speed=Math.round((wordcount/totaltime)*60);
    let finalmes=`you type total  at ${speed} words per minute .`;
    finalmes+=comparewords(message.innerText,text.value) ;// calling comparewords function
    message.innerText=finalmes;
    text.value="";
 }





button.addEventListener('click',()=>{
    if(button.innerText=='Start')
    {
        text.disabled=false;
        playgame();
        // console.log('i am button ');
    }
    else{

         text.disabled=true;
         button.innerText='Start';
         endplay();

    }
})
