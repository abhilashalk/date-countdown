$(document)
  .ready(function () {
    var clock;

    function displayClock(t, duration) {
      $('#years').html(('0' + t.years).slice(-2) + '<span>Year(s)</span>');
      $('#months').html(('0' + t.months).slice(-2) + '<span>Months</span>');
      $('#days').html(('0' + t.days).slice(-2) + '<span>Days</span>');
      $('#hours').html(('0' + t.hours).slice(-2) + '<span>Hours</span>');
      $('#minutes').html(('0' + t.minutes).slice(-2) + '<span>Minutes</span>');
      $('#seconds').html(('0' + t.seconds).slice(-2) + '<span>Seconds</span>');

      if (duration < 0) {
        clearInterval(clock);
        $('#countdown').html('<h4>Countdown Expired</h4>');
        $('.message').hide();
        $('#future-date').hide();
        setTimeout(function () {
          window
            .location
            .reload();
        }, 3000);

      }
    }

    function initTimer(deadLineMilliseconds, $display) {
      clock = setInterval(function () {
        var x = new moment(deadLineMilliseconds);
        var y = new moment(new Date().getTime());
        var duration = moment.duration(x.diff(y));

        // Time calculations for years days, hours, minutes and seconds
        var t = {
          'years': duration.get('years'),

          'months': duration.get('months'),

          'days': duration.get('days'),

          'hours': duration.get('hours'),

          'minutes': duration.get('minutes'),

          'seconds': duration.get('seconds')
        }

        displayClock(t, duration);
      }, 1000);
    }

    function reset() {
      $('#form-input')[0].reset()
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
        // Getting the time input
        var countDownTime = $('#time').val();
        var deadLine = countDownDate + ' ' + countDownTime;

        var deadLineMilliseconds = new Date(deadLine).getTime();

        initTimer(deadLineMilliseconds, $display);

        $('#future-date').text(`Time until ${deadLine}`)
      });

    $('.reset').on('click', reset);
  });