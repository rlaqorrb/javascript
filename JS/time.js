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
    $('#emot').html('🌙');
  } else {
    $('#emot').html('☀️');
  }
  $('#time').html(hour + ":" + min + ":" + sec);
}, 1000);