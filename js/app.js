function display_clock(){
    const clock = document.querySelector('.clock');

    let time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let text = "AM";

    //display AM / PM format
    if(hrs > 12){
        hrs = hrs - 12;
        text = "PM";
    }else if(hrs == 0){
        hrs = 12;
        text = "AM";
    }

    //display in two-digit format
    hrs = hrs < 10 ? '0'+ hrs : hrs;
    min = min < 10 ? '0'+ min : min;
    sec = sec < 10 ? '0'+ sec : sec;

    clock.innerHTML = `${hrs} : ${min} : ${sec} ${text}`;
    // console.log( hrs + " : " + min + " : " + sec);
}

setInterval(display_clock, 1000);