//////////////////////////////////////////

let setOfWords = [
    `Quaid e Azam is the greatest leader of our history. He won a separate state of Pakistan and printed his name forever in the pages of history. He was a sincere and devoted leader of the Muslims. He was an intelligent and lively thinker. He awakened the Muslims from their slumber`,
    `He told them that they were a separate nation from Hindus. They needed a separate state to live according to their religion and culture. He impressed upon the mind of the Muslims of India the necessity of a separate country. His real name was Muhammad Ali Jinnah`,
    `He was a businessman of Karachi. He was born on 25th Dec 1876 in Karachi. He was an intelligent, responsible and serious child. He received his early education in Karachi and Bombay. In his student life, he observed the rules of discipline, all this pointed to his future greatness`
                 ];

//////////////////////////////////////////

let msg = document.getElementById('msg');

let typeWord = document.getElementById('myWord');

let btn = document.getElementById('btn');

let startTime , endTime;
///////////////////////////////////////////
let playGame = () =>{
    let randomNum = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNum];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}
//////////////////////////////////////////////

let endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    let totalStr = typeWord.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = `You typed total at ${speed} words per minutes `;
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;


}
///////////////////////////////////////////////
let compareWords = (str1, str2) =>{
let words1 = str1.split(' ');
let words2 = str2.split(' ');
let cnt = 0;

//**********Foreach Array********** */

words1.forEach(function(item, index){
    if(item == words2[index]){
        cnt++;
    }
})

///////////////////////////////////
let errorWords = (words1.length - cnt);
return (`${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords} .`);
}

//////////////////////////////////////////////

let wordCounter = (str) =>{
    let response = str.split(' ').length;
    return response;
} 

//////////////////////////////////////////////

btn.addEventListener('click',function(){
    if(this.innerHTML == 'Start'){
        typeWord.disabled = false;
        playGame();
    }
    else if(this.innerText = 'Done'){
        typeWord.disabled = true;
        btn.innerText = 'Start';
        endPlay();
    }
})