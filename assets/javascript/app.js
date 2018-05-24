$(document)
  .ready(function () {
    var clock;

    function displayClock($display, years, months, days, hours, minutes, seconds, duration, clock) {
      // Display the result in the element with id="demo" Display the result in the
      // element with id="#countdown" if (years > 0) {   $('#years').html(('0' +
      // years).slice(-2) + '<span>Year(s)</span>'); } else {   $('#years').hide(); }
      $('#years').html(('0' + years).slice(-2) + '<span>Year(s)</span>');
      $('#months').html(('0' + months).slice(-2) + '<span>Months</span>');
      $('#days').html(('0' + days).slice(-2) + '<span>Days</span>');
      $('#hours').html(('0' + hours).slice(-2) + '<span>Hours</span>');
      $('#minutes').html(('0' + minutes).slice(-2) + '<span>Minutes</span>');
      $('#seconds').html(('0' + seconds).slice(-2) + '<span>Seconds</span>');
      if (duration <= 0) {
        clearInterval(clock);
        $('#countdown').html('<h4>Countdown Expired</h4>');
      }
    }

    function initTimer(deadLineMilliseconds, $display) {
      // Update the count down every 1 second
      clock = setInterval(function () {
        var now = new Date().getTime();
        var x = new moment(deadLineMilliseconds);
        var y = new moment(now);

        // https://momentjs.com/docs/#/durations/diffing/
        var duration = moment.duration(x.diff(y));

        // Time calculations for years days, hours, minutes and seconds
        var years = duration.get('years');

        var months = duration.get('months');

        var days = duration.get('days');

        var hours = duration.get('hours');

        var minutes = duration.get('minutes');

        var seconds = duration.get('seconds');

        displayClock($display, years, months, days, hours, minutes, seconds, duration, clock);
      }, 1000);
    }

    /* get input from form-input */
    $('#form-input')
      .on('submit', function (e) {
        clearInterval(clock);
        e.preventDefault();

        // Getting the title
        var $title = $('#title').val();
        var $event = $('#event');
        if ($title === '') {
          $event.text('Event');
        } else {
          $event.text($title);
        }

        // setting the display var
        var $display = $('#countdown');

        //Getting the date
        var countDownDate = $('.datepicker').val();
        console.log(countDownDate);
        // Verify date input Getting the time input
        var countDownTime = $('#time').val();
        var deadLine = countDownDate + ' ' + countDownTime;
        console.log(deadLine);

        var deadLineMilliseconds = new Date(deadLine).getTime();

        initTimer(deadLineMilliseconds, $display);
      });

    $('.reset').on('click', function () {
      window
        .location
        .reload();
    });
  });