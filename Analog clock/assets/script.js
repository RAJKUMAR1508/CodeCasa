var hour = 0;
var minute = 0;
var second = 0;
var date = new Date();

setInterval(
    function() {
        date = new Date();
        hour = date.getHours() * 30 + Math.round(minute /12);
        minute = date.getMinutes() * 6;
        second = date.getSeconds() * 6;
        document.getElementById("hours").style.transform = "rotate(" + hour + "deg)";
        document.getElementById("minutes").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("seconds").style.transform = "rotate(" + second + "deg)";
    }, 1000
);