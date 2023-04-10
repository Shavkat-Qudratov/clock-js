
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
// console.log(daysEl);

const newYear = "1 Jan 2024";
const countDown = () => {
    const newYearDate = new Date(newYear);//2023-yil
    const currentDate = new Date();//hozirgi vaqt

    const totalSecons = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecons / (3600*24) );
    const hours = Math.floor((totalSecons / 3600) % 24);
    const minutes = Math.floor((totalSecons / 60) % 60);
    const seconds = Math.floor(totalSecons  % 60);

    console.log(days, hours, minutes, seconds);


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
};


function formatTime(time){
    return time < 10 ? time : time;
}

countDown();

setInterval(countDown, 1000);


 