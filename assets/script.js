let timeId = $(".timeId")
let saveBtnEl = $('.savebtn')
let hourValue = 9
let currentHour = new Date().getHours();
//displays current date 
let today = new Date().toLocaleDateString();
$("#currentDay").text(today);


// checks time and sets css classes
timeId.each(function () {
  $(this).attr("data-value", hourValue);
  hourValue++
 if (parseInt($(this).attr("data-value")) > currentHour){
  $(this).addClass("future");
} else if ( parseInt($(this).attr("data-value")) < currentHour){
  $(this).addClass("past");
} else {
  $(this).addClass("present");
} 
})
// adds values to an array for local storage
saveBtnEl.click(function(){
let textValArr = [
  $('#textval0').val(), 
  $('#textval1').val(), 
  $('#textval2').val(), 
  $('#textval3').val(), 
  $('#textval4').val(), 
  $('#textval5').val(), 
  $('#textval6').val(), 
  $('#textval7').val(), 
  $('#textval8').val()
];  
// sets item to local storage
localStorage.setItem("savedtext", JSON.stringify(textValArr));
})
// gets local storage string and parses said string
let getStorage = localStorage.getItem("savedtext") || "[]";
let storageParse = JSON.parse(getStorage);
function getLocalData(){
$('#textval0').val(storageParse[0] || ""), 
$('#textval1').val(storageParse[1] || ""), 
$('#textval2').val(storageParse[2] || ""), 
$('#textval3').val(storageParse[3] || ""), 
$('#textval4').val(storageParse[4] || ""), 
$('#textval5').val(storageParse[5] || ""), 
$('#textval6').val(storageParse[6] || ""), 
$('#textval7').val(storageParse[7] || ""), 
$('#textval8').val(storageParse[8] || "")
}
// start as page is loaded
getLocalData()