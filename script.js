// const clock = getElementById("currentDay");
// var now = moment();
// setInterval(() => {
//     const now = moment();
//     console.log(moment());
// const humanReadable = now.format('dddd');
// console.log(humanReadable);
//   }, 1000);
// var timeInc = 9;
//     var timeOfDay = " AM";
//     for (var i = 0; i < 9; i++){
//       $(".row").append(dateRow)
//       if(timeInc < 12){
//         var previousText = localStorage.getItem(timeInc)
//         var dateRow = $('<div class="col-sm-2">'+ timeInc + timeOfDay +'</div><div class="col-sm-8"><input type="text" class='+ timeInc + ' > ' + previousText + '</div><div class="col-sm-2"><button class="btn btn-primary" data-name='+ timeInc + '>*</button></div>')
//         timeInc++;
//       }
//       else{
//         timeOfDay = " PM"
//         timeInc = 1;
//         timeInc++;
//       }

// import { create } from "domain";

// A $( document ).ready() block.
$( document ).ready(function() {
  const times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  const container = $(".container");
  times.forEach(time => {
  container.append(timeSlot(time));
  });
  console.log( "ready!" );
  $(".button").click(function() {
    var momentObj = moment();
    var newDate = momentObj.format("dddd, MMMM Do YYYY");
    $("#day").text(newDate);

  });
  
});

function timeSlot(time) {
  let appointmentData = localStorage.getItem(time)||"";
  const slot = $(`<div class="row ${getTimeClass(time)}">
<div class="col-sm-1 time-block">${time}</div>
<div class="col-sm-10"><textarea id="${time}-data">${appointmentData}
</textarea></div>
</div>`)
const save = $('<div class="col-sm-1 saveBtn"></div>');
const saveButton = $(`<i class="fas fa-save" id="${time}-button"></i>`);
  
saveButton.click(update);
save.append(saveButton);
slot.append(save);
  return slot;
}
    
function getTimeClass(time) {
  var lastHour = moment().hour();
  let hour = parseInt(time);
  if(time.includes('pm') && hour != 12) {
	hour += 12;
}

if(hour < lastHour) {
  return "past";
}
else if (hour > lastHour) {
  return "future";
}
else if(hour === lastHour) {
  return "present";
}
}

function update(event) {
  const time = event.target.id.split('-')[0];
  console.log(time);
  const appointmentData = $(`#${time}-data`).val(); //text inside the textarea
  console.log(appointmentData);
  localStorage.setItem(time, appointmentData);
  console.log(event.target);
}




      
      