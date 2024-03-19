function clock () {
    const timeDisplay = document.getElementById('time-display');
    const alarmDisplay = document.getElementById('alarm-display')
    const alarm = alarmDisplay.textContent;
    const setAlarmButton = document.getElementById('set-alarm-button');
    const theWidget = document.getElementById('the-widget');

    // Programming set alarm button
    setAlarmButton.addEventListener('click', (() => {alarmDisplay.textContent = `${h}:${mPadded}:${parseInt(sPadded + 5)} ${ampm}`}));
    
    //get time
    const date = new Date();
    let h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    let ampm = 'am';
    
    // reformat time values
    if (h > 12) {
        h -= 12;
        ampm = "pm";
    } else if ( h === 0) {
        h = 12;
    }

    // const hPadded = (h < 10) ? "0" + h : h;
    const mPadded = (m < 10) ? "0" + m : m;
    const sPadded = (s < 10) ? "0" + s : s;

    // display time
    const time = `${h}:${mPadded}:${sPadded} ${ampm}`;
    timeDisplay.textContent = time;

    // if (time === alarm) {alert('Alarm!')};
    if (time === alarm) {
        console.log(theWidget.src)
        console.log(theWidget.src.includes('auto_play=false'))
        theWidget.src = theWidget.src.replace('auto_play=false', 'auto_play=true')
        console.log(theWidget.src.includes('auto_play=true'))
    };

    // Analog
    // $("#hour").css("transform", `rotate(${h * 30 + m / 2}deg)`);
    // $("#minute").css("transform", `rotate(${m * 6}deg)`);
    // $("#second").css("transform", `rotate(${s * 6}deg)`);


}

export { clock };

