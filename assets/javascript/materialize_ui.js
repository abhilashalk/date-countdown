$(function () {
  $.validate({
    modules : 'date'
  });

  /* Materialize functionality code  */
  // Init Side nav
  $('.button-collapse').sideNav();

  // Init Slider
  $('.slider').slider({
    indicators: false,
    height: 600,
    transition: 500,
    interval: 6000,
  });

  // Date Picker
  var dateNow = new Date();
  $('.datepicker').pickadate({
    disable: [{
      from: [2009, 5, 1],
      to: [dateNow],
    }, ],
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 25, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
  });

  // Time Picker
  $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function () {}, //Function for after opening timepicker
  });

  // INIT SELECT LIST
  $('select').material_select();

  // Init Scrollspy
  $('.scrollspy').scrollSpy();

  /* end of materialize code */
})