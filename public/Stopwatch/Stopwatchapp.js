var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;
var minute = document.getElementById('min');
var second = document.getElementById('sec');
var millisec = document.getElementById("msec");
var hours = document.getElementById("hour");
var interval;
function timer(){
	msec++
	millisec.innerHTML = msec;
	if (msec >= 100) {
		sec++
		second.innerHTML = sec + ":";
		msec = 0;
	}else if (sec >= 60) {
		min++
		minute.innerHTML = min +":";
		sec = 0;
	}else if(min >= 60){
		hour++
		hours.innerHTML = hour + ":";
		min =0;

	}
}
function start(){
	interval = setInterval(timer,10);
}
function pause() {
	clearInterval(interval)
}
function reset(){
	min = "00 :";
	sec = "00 :";
	msec = "00";
	hour = "00 :";
	hours.innerHTML = hour;
	minute.innerHTML = min;
	second.innerHTML = sec;
	millisec.innerHTML = msec;
}
