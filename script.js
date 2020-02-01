// var clickSaveBtn = document.getElementById("#fgbtn");
// var event6am = document.getElementById(initInput6am);


// clickSaveBtn.addEventListener("click", function () {
//    console.log("im in");
//    console.log(initInput6am.value)
// });
// var { DateTime } = require('luxon');
// DateTime.local();
// $(document).ready(function() {
// var test = $(`#initInput6am`).val();
// console.log(DateTime)
// console.log("test")
// });
// {/* <p id="currentDay" class="lead"></p> */}



/************************Count down counter */
var endTime = "12:00:00"
var nowTime;
var remainTimeHours;
var timeRows = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"];
var timeRowsElement = "6am";
var futureYes = false;
var timer = setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    /* gets the curent time*/
    nowTime = moment().format('ha')
    // console.log(nowTime);
    /*finds out how many hours are lef in today*/
    remainTimeHours = parseInt(endTime) - parseInt(nowTime);
    // console.log(parseInt(remainTimeHours));
    futureYes = false;
    var element = "6am";
    var extElement = "." + element;
    for (let index = 0; index < timeRows.length; index++) {
        element = timeRows[index];
        extElement = "." + element;

        if (nowTime === timeRows[index]) {
            $(extElement).addClass("present");
            futureYes = true;
        }
        if (futureYes && nowTime !== timeRows[index]) {
            $(extElement).addClass("future");
        } else if (!futureYes && nowTime !== timeRows[index])
            $(extElement).addClass("past");
    };
//console.log(nowTime)

}, 1000);

