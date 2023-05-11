const car = document.querySelector(".car");
const wheel1 = document.querySelector('.image1');
const wheel2 = document.querySelector('.image2');
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let rotation = 0;
const angle = 35;
let carPosition = 0;
let speed = 10;
let interval = undefined;
function wheelMotion(){   
    interval = setInterval(()=>{
        rotation = (rotation + angle) % 360;
        carPosition = carPosition + speed;
        wheel1.style.transform = `rotate(-${rotation}deg)`;
        wheel2.style.transform = `rotate(-${rotation}deg)`;
        car.style.left = carPosition + "px"; 
        wheel1.style.left = `rotate(-${rotation}deg)`;
        wheel2.style.left = `rotate(-${rotation}deg)`;
       console.log(speed);
    }, 80)  
}

wheelMotion();
document.addEventListener("click",(ev)=>{
    if(ev.target.textContent == "Stop"){
        clearInterval(interval)
    }
    else if(ev.target.textContent == "Start"){
        wheelMotion()
    }
    else if(ev.target.textContent == "Speed ++"){
        speed = speed + 2;
    }
    else if(ev.target.textContent == "Speed --"){
        speed = speed - 2;
    }
})
/*btn1.addEventListener("click",()=>{
    speed = speed + 2;
})

btn2.addEventListener("click",()=>{
    speed = speed - 2;
})*/