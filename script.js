
$(document).ready(function () {
  const times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  const container = $(".container");
  times.forEach(time => {
    container.append(timeSlot(time));
  });
  console.log("ready!");
  $(".button").click(function () {
    var momentObj = moment();
    var newDate = momentObj.format("dddd, MMMM Do YYYY");
    $("#day").text(newDate);

  });

});

function timeSlot(time) {
  let appointmentData = localStorage.getItem(time) || "";
  const slot = $(`<div class="row ${getTimeClass(time)}">
<div class="col-sm-1 time-block">${time}</div>
<div class="col-sm-10 text-area"><textarea id="${time}-data">${appointmentData}
</textarea></div>
</div>`)
  const save = $('<div class="col-sm-1 saveBtn"></div>');
  const saveButton = $(`<i class="fas fa-save fa-2x" id="${time}-button"></i>`);

  saveButton.click(update);
  save.append(saveButton);
  slot.append(save);
  return slot;
}

function getTimeClass(time) {
  var lastHour = moment().hour();
  let hour = parseInt(time);
  if (time.includes('pm') && hour != 12) {
    hour += 12;
  }

  if (hour < lastHour) {
    return "past";
  }
  else if (hour > lastHour) {
    return "future";
  }
  else if (hour === lastHour) {
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





