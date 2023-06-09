// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {

  var allHours = $(".time-block");
  var currentTime = dayjs().format('H');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click", function() {
    // console.log("saveBtn")
    var userInput = $(this).siblings(".description").val()
    console.log(userInput)
    var id = $(this).parent().attr("id")
    localStorage.setItem(id, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  for (var i = 0; i < allHours.length; i++){

    var currentTimeElement = $(allHours[i])
    console.log(currentTime)
    console.log(currentTimeElement)
    var currentTimeBlock = parseInt($(allHours[i]).attr("id").split("-")[1])
    console.log(currentTimeBlock)

    if (currentTimeBlock < currentTime) {
      currentTimeElement.addClass("past")
      currentTimeElement.removeClass("present")
      currentTimeElement.removeClass("future")
  
    } else if (currentTimeBlock > currentTime) {
      currentTimeElement.addClass("future")
      currentTimeElement.removeClass("present")
      currentTimeElement.removeClass("past")

    } else if (currentTimeBlock == currentTime) {
      currentTimeElement.addClass("present")
      currentTimeElement.removeClass("past")
      currentTimeElement.removeClass("future")
    }
}

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  console.log("hour9")

  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  console.log("hour10")

  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  console.log("hour11")

  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  console.log("hour12")

  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  console.log("hour13")

  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  console.log("hour14")

  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  console.log("hour15")

  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  console.log("hour16")

  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  console.log("hour17")


  // TODO: Add code to display the current date in the header of the page.

 $(document).ready(function(){
  var currentDay = dayjs().format("MMMM D, YYYY, h:mm a");
  $("#currentDay").text(currentDay);
})
});