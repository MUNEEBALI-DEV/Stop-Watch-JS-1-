let timeElement = document.querySelector(".time");
let Start = document.querySelector(".Start");
let Stop = document.querySelector(".Stop");
let Reset = document.querySelector(".Reset");

let [seconds,minutes,hours]=[0,0,0];
let timer=null;
function stopwatch(){
  seconds++;
  if(seconds==60)
  {
    seconds==0;
    minutes++;
    if(minutes==60){
      minutes=0;
      hours++;
    }
  }

let  h= hours<10?"0"+hours:hours;
let  m= minutes<10?"0"+minutes:minutes;
let  s= seconds<10?"0"+seconds:seconds;


timeElement.innerHTML= `${h}:${m}:${s}`;

}
function startwatch(){

if(timer!=null){
  clearInterval(timer);
}
timer=  setInterval(stopwatch,1000);

}

Start.addEventListener("click",()=>{
  startwatch();
  Start.disabled = true;
})


Stop.addEventListener("click",()=>{
  clearInterval(timer);
  Start.disabled = false;
})

Reset.addEventListener("click",()=>{
  clearInterval(timer);
  Start.disabled = false;
  [seconds,minutes,hours]=[0,0,0]
  timeElement.innerHTML="00:00:00"
})

