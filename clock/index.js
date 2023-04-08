function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // let session = 'AM';


    let time = `${formatTime(h)} : ${formatTime(m)} : ${formatTime(s)} `;
    document.getElementById('clock').innerHTML = time;
    document.getElementById('clock').textContent = time;

    setTimeout(showTime, 1000);//vaqtni harakatlantirishni birinchi usuli
}

showTime()
   function formatTime(vaqt){
    return vaqt < 10 ? `0${vaqt}` : vaqt;
   
}

// setInterval(showTime, 1000);//vaqtni harakatlantirishni ikkichi usuli