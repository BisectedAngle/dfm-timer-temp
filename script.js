var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var dfms = document.getElementById("dfms")
var colon1 = document.getElementById("colon1")
var colon2 = document.getElementById("colon2")

var actualdfms = 6
var mode = 1
const currentDate = new Date()

if (currentDate < new Date('Jul 03, 2024, 00:00:00 GMT+0800')){
    targetDate = new Date('Jul 03, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 6
} else if (currentDate > new Date('Jul 03, 2024, 00:00:00 GMT+0800' && currentDate < new Date('Jul 10, 2024, 00:00:00 GMT+0800'))){
    targetDate = new Date('Jul 10, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 5
} else if (currentDate > new Date('Jul 10, 2024, 00:00:00 GMT+0800' && currentDate < new Date('Jul 17, 2024, 00:00:00 GMT+0800'))){
    targetDate = new Date('Jul 17, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 4
} else if (currentDate > new Date('Jul 17, 2024, 00:00:00 GMT+0800' && currentDate < new Date('Jul 24, 2024, 00:00:00 GMT+0800'))){
    targetDate = new Date('Jul 24, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 3
} else if (currentDate > new Date('Jul 24, 2024, 00:00:00 GMT+0800' && currentDate < new Date('Jul 31, 2024, 00:00:00 GMT+0800'))){
    targetDate = new Date('Jul 31, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 2
} else if (currentDate > new Date('Jul 31, 2024, 00:00:00 GMT+0800' && currentDate < new Date('Aug 7, 2024, 00:00:00 GMT+0800'))){
    targetDate = new Date('Aug 7, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 1
} else if (currentDate > new Date('Aug 7, 2024, 00:00:00 GMT+0800' && currentDate < new Date('Aug 14, 2024, 00:00:00 GMT+0800'))){
    targetDate = new Date('Aug 14, 2024, 00:00:00 GMT+0800').getTime()
    actualdfms = 0
} 


function timer(){
    const sec = 1000
    const min = sec * 60
    const hr = min * 60
    const day = hr * 24

    const interval = setInterval(() => {
        const rn = new Date().getTime()
        const distance = targetDate - rn
    
        days.innerText = nums(Math.floor(distance / day))
        hours.innerText = nums(Math.floor((distance % day) / hr))
        minutes.innerText = nums(Math.floor((distance % hr) / min))
        seconds.innerText = nums(Math.floor((distance % min) / sec))

        if (rn >= new Date('Aug 14, 2024, 00:00:00')){
            days.innerText = '00'
            hours.innerText = '00'
            minutes.innerText = '00'
            seconds.innerText = '00'
            clearInverval(interval)
        }

    }, 1000)
    
}

function dfmleft(){
    dfms.innerText = actualdfms}

function nums(num){
    if (num<10){
        return '0'+num}
    else{
        return num}
}

function changeColour(){
    var body = document.body;

    if (mode == 1){
        body.style.backgroundColor = 'white'
        days.style.backgroundColor= '#93e617ff'
        hours.style.backgroundColor= '#93e617ff'
        minutes.style.backgroundColor= '#93e617ff'
        seconds.style.backgroundColor= '#93e617ff'
        days.style.color= 'white'
        hours.style.color= 'white'
        minutes.style.color= 'white'
        seconds.style.color= 'white'
        colon1.style.color = '#93e617ff'
        colon2.style.color = '#93e617ff'
        dfms.style.backgroundColor = 'red'
        mode = 2}    
    else{
        body.style.backgroundColor = '#9cc90eff'
        days.style.backgroundColor= '#c5e75eff'
        hours.style.backgroundColor= '#c5e75eff'
        minutes.style.backgroundColor= '#c5e75eff'
        seconds.style.backgroundColor= '#c5e75eff'
        days.style.color= 'black'
        hours.style.color= 'black'
        minutes.style.color= 'black'
        seconds.style.color= 'black'
        colon1.style.color = '#c5e75eff'
        colon2.style.color = '#c5e75eff'
        dfms.style.backgroundColor = '#222a35ff'
        mode = 1}
    
}

timer()
dfmleft()