( function showDate(){
    var todayDate = new Date()
    document.getElementById('showDate').innerText = todayDate.toDateString()
})()
function time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

//matching 12 hours time format
if (hours == 12){
    var hr = 12;
}
else if (hours == 24){
    var hr = 0;
}
else {
    var hr = hours % 12;
}
//adding zero if hour min sec is less than 10
if(hr<10){
    hr = "0" + hr;
}
if(min<10){
    min = "0" + min;
}
if(sec<10){
    sec = "0" + sec;
}
var ampm = hours< 12? "AM":"PM";
var timed = hr + ":" + min + ":" + sec + ":" + ampm;
document.getElementById('clock').innerText = timed;
}
var interval 
function startClock(){
    var interval = setInterval(time,1000);
}
function stopClock(){
    clearInterval(interval)
}
