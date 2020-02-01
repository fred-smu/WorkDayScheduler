
/************************Count down counter */
var endTime = "12:00:00"
var nowTime;
var remainTimeHours;
var timeRows = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"];
var eventSave=[];
var myJsonObj = JSON.stringify(eventSave);
var timeRowsElement = "6am";
var futureYes = false;
var timer = setInterval(function () {
    /*sets Date and time on display*/
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    /* gets the curent time*/
    nowTime = moment().format('ha')
    /*finds out how many hours are lef in today*/
    remainTimeHours = parseInt(endTime) - parseInt(nowTime);
    /* vars used for the past future and present settings*/
    futureYes = false;
    var element = "6am";
    var extElement = "." + element;
    /*for loop sets events to past future and present*/
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
}, 1000);
/*saves all event entrys to  event save*/
$(".btn").on("click",function (parms) {
    var element = "6am";
    var extElement = "." + element;
    for (let index = 0; index < timeRows.length; index++) {
        element = timeRows[index];
        extElement = "." + element;
        eventSave[index] = $(extElement).val();
        console.log($(extElement).val());
    };
    /* saving event arry to localstorage*/
    myJsonString = JSON.stringify(eventSave);
})
