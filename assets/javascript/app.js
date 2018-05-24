$(document)
  .ready(function () {
    var clock;

    function displayClock(t, duration) {
      $('#years').html(('0' + t.years).slice(-2) + '<span>YEARS</span>');
      $('#months').html(('0' + t.months).slice(-2) + '<span>MONTHS</span>');
      $('#days').html(('0' + t.days).slice(-2) + '<span>DAYS</span>');
      $('#hours').html(('0' + t.hours).slice(-2) + '<span>HOURS</span>');
      $('#minutes').html(('0' + t.minutes).slice(-2) + '<span>MINUTES</span>');
      $('#seconds').html(('0' + t.seconds).slice(-2) + '<span>SECONDS</span>');

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

    function initTimer(deadLineMilliseconds) {
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

        //Getting the date
        var countDownDate = $('.datepicker').val();
        // Getting the time input
        var countDownTime = $('#time').val();

        var deadLine = countDownDate + ' ' + countDownTime;

        var deadLineMilliseconds = new Date(deadLine).getTime();

        initTimer(deadLineMilliseconds);

        $('#future-date').text(`Time until ${countDownDate}`)
      });

    $('.reset').on('click', reset);
  });