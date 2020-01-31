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

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

