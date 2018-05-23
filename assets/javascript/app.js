function displayClock(
  $display,
  years,
  days,
  hours,
  minutes,
  seconds,
  duration,
  clock
) {
  // Display the result in the element with id="demo" Display the result in the
  // element with id="#countdown"

  $display.html(
    "<h4>" +
      ("0" + years).slice(-2) +
      ": " +
      ("0" + days).slice(-2) +
      ": " +
      ("0" + hours).slice(-2) +
      ": " +
      ("0" + minutes).slice(-2) +
      ": " +
      ("0" + seconds).slice(-2) +
      "</h4>"
  );
  if (duration < 0) {
    clearInterval(clock);
    $display.html("<h4>Countdown Expired</h4>");
  }
}

function initTimer(deadLineMilliseconds, $display) {
  // Update the count down every 1 second
  var clock = setInterval(function() {
    var now = new Date().getTime();
    var x = new moment(deadLineMilliseconds);
    var y = new moment(now);

    // https://momentjs.com/docs/#/durations/diffing/
    var duration = moment.duration(x.diff(y));

    // Time calculations for years days, hours, minutes and seconds
    var years = duration.get("years");

    var days = duration.get("days");

    var hours = duration.get("hours");

    var minutes = duration.get("minutes");

    var seconds = duration.get("seconds");

    displayClock($display, years, days, hours, minutes, seconds, duration, clock);
  }, 1000);
}

$(document).ready(function() {
  /* Materialize functionality code  */
  // Init Side nav
  $(".button-collapse").sideNav();

  // Init Slider
  $(".slider").slider({
    indicators: false,
    height: 600,
    transition: 500,
    interval: 6000
  });

  // Date Picker
  var dateNow = new Date();
  $(".datepicker").pickadate({
    disable: [
      {
        from: [2009, 5, 1],
        to: [dateNow]
      }
    ],
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 25, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: false // Close upon selecting a date,
  });

  // Time Picker
  $(".timepicker").pickatime({
    default: "now", // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: "OK", // text for done-button
    cleartext: "Clear", // text for clear-button
    canceltext: "Cancel", // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function() {} //Function for after opening timepicker
  });

  // INIT SELECT LIST
  $("select").material_select();

  // Init Scrollspy
  $(".scrollspy").scrollSpy();

  /* end of materialize code */

  /* get input from form-input */
  $("#form-input").on("submit", function(e) {
    e.preventDefault();

    // setting the display var
    var $display = $(".card #countdown");

    //Getting the date
    var countDownDate = $(".datepicker").val();

    //Getting the time input
    var countDownTime = $("#time").val();
    var deadLine = countDownDate + " " + countDownTime;

    var deadLineMilliseconds = new Date(deadLine).getTime();

    initTimer(deadLineMilliseconds, $display);
   
    $('.reset').on('click', function(){
      window.location.reload ();
    })
  });
});
