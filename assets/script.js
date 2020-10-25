let availableHours = ["3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00"];
//displays current date 
let today = new Date().toLocaleDateString()
$("#currentDay").text(today)

// displays input field times available hours
for (i = 0; i < availableHours.length; i++) {
    $(".container").append(`
    <div class="row border border-dark">
    <div class="col-sm-1 text-center">` +
      availableHours[i] +
    `</div>
    <div class="col-sm-10 text-center">
      <input type="text" class="form-control" placeholder="Task To Do:">
    </div>
    <div class="col-sm-1 text-center">
      <button type="button" class="btn btn-primary">Save</button>
    </div>
  </div>`)
}


