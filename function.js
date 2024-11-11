let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["purple","orange","blue","light-blue"];
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
 
function flashUp(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
function checkAns(idx){
  if(gameSeq[idx]==userSeq[idx]){
   if(gameSeq.length==userSeq.length){
   setTimeout(levelUp,1000);
   }
  }else{
     let body=document.querySelector("body");
     setTimeout(function(){
      body.style.backgroundColor="white";
     },250);
     body.style.backgroundColor="red";
    h3.innerHTML=`Game is over!Your score was <b>${level}</b> </br> Press any key to start again.`;
    restart();
  }
}

function levelUp(){//game sequence
    userSeq=[];
    level+=1;
    h3.innerText=`level ${level}`;
    let randomBtn=Math.floor(Math.random()*3);
    let randomCol=btns[randomBtn];
    let randomClass=document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
    console.log(gameSeq);
    flashUp(randomClass);
}

function pressFlash(){//user sequence
  let btn=this;
  flashUp(btn);
  let user=btn.getAttribute("id");
  userSeq.push(user);
  console.log(userSeq);
  checkAns(userSeq.length-1);
}
let flashBtn=document.querySelectorAll(".btn");
for(btn of flashBtn){
    btn.addEventListener("click",pressFlash);
}

function restart(){
  started=false;
  userSeq=[];
  gameSeq=[];
  level=0;
}
