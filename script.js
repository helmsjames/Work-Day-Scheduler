const clock = getElementById("currentDay");

var now = moment();
setInterval(() => {
    const now = moment();
    console.log(moment());
const humanReadable = now.format('dddd');
console.log(humanReadable);
  }, 1000);






var timeInc = 9;
    var timeOfDay = " AM";
    for (var i = 0; i < 9; i++){
      $(".row").append(dateRow)
      if(timeInc < 12){
        var previousText = localStorage.getItem(timeInc)
        var dateRow = $('<div class="col-sm-2">'+ timeInc + timeOfDay +'</div><div class="col-sm-8"><input type="text" class='+ timeInc + ' > ' + previousText + '</div><div class="col-sm-2"><button class="btn btn-primary" data-name='+ timeInc + '>*</button></div>')
        timeInc++;
      }
      else{
        timeOfDay = " PM"
        timeInc = 1;
        timeInc++;
      }
    

      
      