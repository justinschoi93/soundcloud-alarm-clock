$(document).ready(function () {
    function updateClock () {
        const date = new Date();
        let h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        let ampm = 'am';
        
        
        if (h > 12) {
            h -= 12;
            ampm = "pm";
        } else if ( h === 0) {
            h = 12;
        }

        // const hPadded = (h < 10) ? "0" + h : h;
        const mPadded = (m < 10) ? "0" + m : m;
        const sPadded = (s < 10) ? "0" + s : s;

        // Digital
        $("#time-display").text(`${h}:${mPadded}:${sPadded} ${ampm}`);

        // Analog
        // $("#hour").css("transform", `rotate(${h * 30 + m / 2}deg)`);
        // $("#minute").css("transform", `rotate(${m * 6}deg)`);
        // $("#second").css("transform", `rotate(${s * 6}deg)`);
    }
    
    setInterval(updateClock, 1000);
    updateClock();
});