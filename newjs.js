let timer = 60;
let score = 0;
let bc ;
function runtimer(){
    let time = setInterval(function(){
        if(timer>0){
        timer--;
       document.querySelector("#tim").textContent=timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#pbotm").innerHTML= `<h1> game over </h1>`
        }
    },1000);
   
}


function makebubble(){
    let clutter ="";
for(let i=1; i<=133;i++){
    let rn =Math.floor(Math.random()*10)
     clutter += `<div class="bobble">${rn}</div>`
}
document.querySelector("#pbotm").innerHTML=clutter;
}

function hitscore(){
    bc = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent=bc;
 }

function getscore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtom");
addEventListener("click",function(details){
    let clickednum = Number(details.target.textContent)
    if(clickednum == bc){
       getscore();
       makebubble();
       hitscore(); 
    }
});
runtimer();
makebubble();
hitscore();