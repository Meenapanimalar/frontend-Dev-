const h = document.querySelector(".hrs")
const m = document.querySelector(".mins")
const s = document.querySelector(".sec")

function analog(){
    const time = new Date();
    const seconds= (time.getSeconds())/60; 
    const minute = (seconds+time.getMinutes())/60;
    const hour = (minute+time.getHours())/12;

    h.style.setProperty('--rotation',hour*360)
    m.style.setProperty('--rotation',minute*360)
    s.style.setProperty('--rotation',seconds*360)
    


}
setInterval(analog,1000)