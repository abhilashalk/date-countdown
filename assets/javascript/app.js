$(document).ready(function () {
    /* Materialize functionality code  */
    // Init Side nav
    $('.button-collapse').sideNav();

    // Init Slider
    $('.slider').slider({
        indicators: false,
        height: 600,
        transition: 500,
        interval: 6000
    });

    // Date Picker
    var dateNow = new Date();
    $('.datepicker').pickadate({
        disable: [{
            from: [2009, 5, 1],
            to: [dateNow]
        }],
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 25, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
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
        aftershow: function () {} //Function for after opening timepicker
    });

    // INIT SELECT LIST
    $('select').material_select();

    // Init Scrollspy
    $('.scrollspy').scrollSpy();

    /* end of materialize code */

    /* get input from form-input */
    $('#form-input').on('submit', function (e) {
        e.preventDefault();


        //Getting the date
        var countDownDate = $('.datepicker').val()

        //Getting the time input
        var countDownTime = $('#time').val()
        var deadLine = countDownDate + " " + countDownTime;
        console.log('deadLine', deadLine);
        console.log(countDownTime);

        var deadLineMilliseconds = new Date(deadLine).getTime();
        console.log('deadLineMilliseconds', deadLineMilliseconds);

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();




            var distance = deadLineMilliseconds - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);


            // Display the result in the element with id="demo" Display the result in the
            // element with id="#countdown"
            var display = $(".card #countdown");
            display.html('<h3>' + days + "d " + hours + "h " + minutes + "m " + seconds + "s </h3>")
            if (distance < 0) {
                clearInterval(x);
                document
                    .getElementById("#countdown")
                    .innerHTML = "EXPIRED";
            }
        }, 1000);
    });

});