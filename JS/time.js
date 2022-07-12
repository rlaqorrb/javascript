setInterval(function () {
  var time = new Date();
  var hour = String(time.getHours());
  var min = String(time.getMinutes());
  var sec = String(time.getSeconds());
  if (hour.length < 2) {
    hour = "0" + hour;
  }
  if (min.length < 2) {
    min = "0" + min;
  }
  if (sec.length < 2) {
    sec = "0" + sec;
  }
  if (hour <= 6 || hour >= 22) {
    $('#emot').html('<i class="wi wi-night-clear"></i>');
    $('.container').css('background-image', 'linear-gradient(to right bottom, #051937, #062140, #06284a, #053153, #03395d, #0b3d61, #124066, #18446a, #224469, #2b4368, #314367, #374366)')
  } else {
    $('#emot').html('<i class="wi wi-day-sunny"></i>');
  }
  $('#time').html(hour + ":" + min + ":" + sec);
}, 1000);