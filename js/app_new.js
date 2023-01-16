function display_clock(){
    const hh = document.querySelectorAll('.hh');
    const mm = document.querySelectorAll('.mm');
    const ss = document.querySelectorAll('.ss');

    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let text = "AM";

    
    //setting 12 hrs format AM/PM
    if(hrs>12){
        hrs = hrs - 12;
        text = "PM";
    }else if(hrs == 0 ){
        hrs = 12;
        text = "AM";
    }

    //set two digit display
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    //display the values
    hh[0].innerHTML = hrs[0];
    hh[1].innerHTML = hrs[1];

    mm[0].innerHTML = min[0];
    mm[1].innerHTML = min[1];
    
    ss[0].innerHTML = sec[0];
    ss[1].innerHTML = sec[1];

    // console.log(hrs + ":" + min + ":" + sec);
}

setInterval(display_clock, 1000);