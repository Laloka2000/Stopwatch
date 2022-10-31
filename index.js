const startBtn = document.querySelector('.startBtn');
const mainStartBtn = document.querySelector('.mainStartBtn');

const lapResetBtn = document.querySelector('.lapResetBtn');
const mainLapBtn = document.querySelector('.mainLapBtn');

const laps = document.querySelector('.laps');

let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let m = 0;
let s = 0;
let ms = 0;

let time = document.querySelector('.time');
let int = null;

let isTimerStarted = false;

startBtn.addEventListener('click', () => {
    if(isTimerStarted === false){
        int = setInterval(displayTimer, 10);
    }else{
        clearInterval(int);
    }
})

function displayTimer(){
    miliseconds++;
    if(miliseconds>=99){
        seconds++;
        miliseconds= 0;
    }
    if(seconds >= 60){
        minutes++;
        miliseconds= 0;
    }

    
    m = minutes < 10 ? "0" + min : min;
    s = seconds < 10 ? "0" + sec : sec;
    ms = miliseconds < 10 ? "0" + miliseconds : miliseconds;
    

    time.innerHTML = `${m}:${s}:${ms}`;
}
