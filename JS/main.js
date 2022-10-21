
const hoursHand = document.querySelector('.hoursHand')
const minutesHand = document.querySelector('.minutesHand')
const secondsHand = document.querySelector('.secondsHand')

function displayTime(){
    let laDate = new Date()

    let seconds = laDate.getSeconds()
    let degreeSeconds = seconds*6

    let minutes = laDate.getMinutes()
    let degreeMinutes = minutes*6+seconds/10

    let heures = laDate.getHours()
    let degreeHeures = heures*30+minutes/2

    secondsHand.style.transform = `rotate(${degreeSeconds}deg)`
    minutesHand.style.transform = `rotate(${degreeMinutes}deg)`
    hoursHand.style.transform = `rotate(${degreeHeures}deg)`
}

setInterval(displayTime, 1000)


