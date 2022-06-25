var city = 'Yangsan';
var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&lang=kr&appid="+"fcb2d546dc53b2af908245747b80b64f";
  $.ajax({
      url: apiURI,
      dataType: "json",
      type: "GET",
      async: "false",
      success: function(resp) {
          console.log(resp);
          console.log("현재온도 : "+ (parseInt(resp.main.temp- 273.15)) );
          $('.tmp').html(parseInt(resp.main.temp-273.13)+'°');
          console.log("현재습도 : "+ resp.main.humidity);
          $('.reh').html('<i class="fa-solid fa-droplet"></i><br>습도<br>'+resp.main.humidity+'%');
          console.log("날씨 : "+ resp.weather[0].main );
          $('.sky').html(resp.weather[0].main);
          console.log("상세날씨설명 : "+ resp.weather[0].description );
          $('.sky').append(','+resp.weather[0].description);
          console.log("날씨 이미지 : "+ resp.weather[0].icon );
          var img = resp.weather[0].icon;
          if(img == '01d'){
            $('.w-ico').html('<i class="wi wi-day-sunny"></i>')
          } else if(img == '01n'){
            $('.w-ico').html('<i class="wi wi-night-clear"></i>')
          } else if(img == '02d'){
            $('.w-ico').html('<i class="wi wi-day-cloudy"></i>')
          } else if(img == '02n'){
            $('.w-ico').html('<i class="wi wi-night-alt-cloudy"></i>')
          } else if(img == '03d'){
            $('.w-ico').html('<i class="wi wi-cloud"></i>')
          } else if(img == '03n'){
            $('.w-ico').html('<i class="wi wi-cloud"></i>')
          } else if(img == '04d'){
            $('.w-ico').html('<i class="wi wi-cloudy"></i>')
          } else if(img == '04n'){
            $('.w-ico').html('<i class="wi wi-cloudy"></i>')
          } else if(img == '09d'){
            $('.w-ico').html('<i class="wi wi-showers"></i>')
          } else if(img == '09n'){
            $('.w-ico').html('<i class="wi wi-showers"></i>')
          } else if(img == '10d'){
            $('.w-ico').html('<i class="wi wi-day-rain"></i>')
          } else if(img == '10n'){
            $('.w-ico').html('<i class="wi wi-night-rain"></i>')
          } else if(img == '11d' || img == '11n'){
            $('.w-ico').html('<i class="wi wi-thunderstorm"></i>')
          } else if(img == '13d' || img == '13n'){
            $('.w-ico').html('<i class="wi wi-snow"></i>')
          } else if(img == '50d'){
            $('.w-ico').html('<i class="wi wi-day-fog"></i>')
          } else if(img == '50n'){
            $('.w-ico').html('<i class="wi wi-night-fog"></i>')
          } else {
            $('.w-ico').html('<i class="wi wi-na"></i>')
          }
          console.log("바람   : "+ resp.wind.speed );
          $('.wsd').html('<i class="fa-solid fa-wind"></i><br>풍속<br>'+resp.wind.speed+'m/s');
          console.log("나라   : "+ resp.sys.country );
          console.log("도시이름  : "+ resp.name );
          $('.location').html('<i class="fa-solid fa-location-dot"></i> '+resp.name+','+resp.sys.country);
          console.log("체감온도  : "+ (resp.main.feels_like-273.13) +"°" );                 
          $('.pop').html('<i class="wi wi-thermometer"></i><br>체감온도<br>'+parseInt(resp.main.feels_like-273.13)+'°')
      }
  })





$('#w-search').on('change', function(){
  var loc = $('#w-search').val();
  console.log(loc);
  let city = loc;

  var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&lang=kr&appid="+"fcb2d546dc53b2af908245747b80b64f";
  $.ajax({
      url: apiURI,
      dataType: "json",
      type: "GET",
      async: "false",
      success: function(resp) {
          console.log(resp);
          console.log("현재온도 : "+ (parseInt(resp.main.temp- 273.15)) );
          $('.tmp').html(parseInt(resp.main.temp-273.13)+'°');
          console.log("현재습도 : "+ resp.main.humidity);
          $('.reh').html('<i class="fa-solid fa-droplet"></i><br>습도<br>'+resp.main.humidity+'%');
          console.log("날씨 : "+ resp.weather[0].main );
          $('.sky').html(resp.weather[0].main);
          console.log("상세날씨설명 : "+ resp.weather[0].description );
          $('.sky').append(','+resp.weather[0].description);
          console.log("날씨 이미지 : "+ resp.weather[0].icon );
          var img = resp.weather[0].icon;
          if(img == '01d'){
            $('.w-ico').html('<i class="wi wi-day-sunny"></i>')
          } else if(img == '01n'){
            $('.w-ico').html('<i class="wi wi-night-clear"></i>')
          } else if(img == '02d'){
            $('.w-ico').html('<i class="wi wi-day-cloudy"></i>')
          } else if(img == '02n'){
            $('.w-ico').html('<i class="wi wi-night-alt-cloudy"></i>')
          } else if(img == '03d'){
            $('.w-ico').html('<i class="wi wi-cloud"></i>')
          } else if(img == '03n'){
            $('.w-ico').html('<i class="wi wi-cloud"></i>')
          } else if(img == '04d'){
            $('.w-ico').html('<i class="wi wi-cloudy"></i>')
          } else if(img == '04n'){
            $('.w-ico').html('<i class="wi wi-cloudy"></i>')
          } else if(img == '09d'){
            $('.w-ico').html('<i class="wi wi-showers"></i>')
          } else if(img == '09n'){
            $('.w-ico').html('<i class="wi wi-showers"></i>')
          } else if(img == '10d'){
            $('.w-ico').html('<i class="wi wi-day-rain"></i>')
          } else if(img == '10n'){
            $('.w-ico').html('<i class="wi wi-night-rain"></i>')
          } else if(img == '11d' || img == '11n'){
            $('.w-ico').html('<i class="wi wi-thunderstorm"></i>')
          } else if(img == '13d' || img == '13n'){
            $('.w-ico').html('<i class="wi wi-snow"></i>')
          } else if(img == '50d'){
            $('.w-ico').html('<i class="wi wi-day-fog"></i>')
          } else if(img == '50n'){
            $('.w-ico').html('<i class="wi wi-night-fog"></i>')
          } else {
            $('.w-ico').html('<i class="wi wi-na"></i>')
          }
          console.log("바람   : "+ resp.wind.speed );
          $('.wsd').html('<i class="fa-solid fa-wind"></i><br>풍속<br>'+resp.wind.speed+'m/s');
          console.log("나라   : "+ resp.sys.country );
          console.log("도시이름  : "+ resp.name );
          $('.location').html('<i class="fa-solid fa-location-dot"></i> '+resp.name+','+resp.sys.country);
          console.log("체감온도  : "+ (resp.main.feels_like-273.13) +"°" );                 
          $('.pop').html('<i class="wi wi-thermometer"></i><br>체감온도<br>'+parseInt(resp.main.feels_like-273.13)+'°')
      }
  }).done(function(){
    console.log('done');
  }).fail(function(){

    var err = $('#w-search').val();
    $('#w-search').val('');
    $('#w-search').attr("placeholder", '\"'+err+'\"도시를 찾을 수 없음').placeholder();
  })
})