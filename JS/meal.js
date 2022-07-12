// 처음 실헹


var currentTime = new Date();
var currentYear = String(currentTime.getFullYear());
var currentMonth = String(currentTime.getMonth() + 1);
if (currentMonth.length < 2) {
  currentMonth = '0' + currentMonth;
}
var currentDate = String(currentTime.getDate());
if (currentDate.length < 2) {
  currentDate = '0' + currentDate;
}

var currentDateCopy = currentYear + '-' + currentMonth + '-' + currentDate;
$('.mealTimeInput').val(currentDateCopy);

var mealDay = currentYear + currentMonth + currentDate;
console.log(mealDay);
var apiURL = 'https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010333&MLSV_YMD=' + mealDay;
$.ajax({
  url: apiURL,
  dataType: 'json',
  type: 'GET',
  async: 'false',
  success: function (resp) {
    // 처음 실행 중식
    console.log(resp);
    console.log(resp.mealServiceDietInfo[1].row[0]);
    console.log('학교명 : ' + resp.mealServiceDietInfo[1].row[0].SCHUL_NM);
    $('.schNm').val(resp.mealServiceDietInfo[1].row[0].SCHUL_NM);
    console.log('급식 : ' + resp.mealServiceDietInfo[1].row[0].DDISH_NM);
    $('.L-dishNm').html(resp.mealServiceDietInfo[1].row[0].DDISH_NM);
    console.log('급식 종류: ' + resp.mealServiceDietInfo[1].row[0].MMEAL_SC_NM);
    $('.mealScNm').html(resp.mealServiceDietInfo[1].row[0].MMEAL_SC_NM);
    console.log('일시 : ' + resp.mealServiceDietInfo[1].row[0].MLSV_YMD);
    console.log('영양정보 : ' + resp.mealServiceDietInfo[1].row[0].NTR_INFO);
    $('.orplc').html(resp.mealServiceDietInfo[1].row[0].NTR_INFO);
    var mealTime = String(resp.mealServiceDietInfo[1].row[0].MLSV_YMD);
    var mealYear = mealTime.slice(0, 4);
    var mealMonth = mealTime.slice(4, 6);
    var mealDay = mealTime.slice(6, 8);
    console.log(mealYear);
    console.log(mealMonth);
    console.log(mealDay);
    mealTime = mealYear + '-' + mealMonth + '-' + mealDay;
    $('.mealTimeInput').val(mealTime);
    console.log(mealTime);

    $('.mealTime').html(resp.mealServiceDietInfo[1].row[0].MLSV_YMD);

    // 처음 실행 석식
    console.log(resp);
    console.log(resp.mealServiceDietInfo[1].row[1]);
    console.log('학교명 : ' + resp.mealServiceDietInfo[1].row[1].SCHUL_NM);
    $('.schNm').val(resp.mealServiceDietInfo[1].row[1].SCHUL_NM);
    console.log('급식 : ' + resp.mealServiceDietInfo[1].row[1].DDISH_NM);
    $('.D-dishNm').html(resp.mealServiceDietInfo[1].row[1].DDISH_NM);
    console.log('급식 종류: ' + resp.mealServiceDietInfo[1].row[1].MMEAL_SC_NM);
    // $('.mealScNm').html(resp.mealServiceDietInfo[1].row[1].MMEAL_SC_NM);
    console.log('일시 : ' + resp.mealServiceDietInfo[1].row[1].MLSV_YMD);
    $('.orplc').html(resp.mealServiceDietInfo[1].row[0].NTR_INFO);
    var mealTime = String(resp.mealServiceDietInfo[1].row[1].MLSV_YMD);
    // $('.mealTimeInput').val(mealTimeCopy);
    console.log(mealTime);

    $('.mealTime').html(resp.mealServiceDietInfo[1].row[1].MLSV_YMD);
  }

})


// 날짜 변경시
$('.mealTimeInput').on('change', function () {
  var mealTime = $('.mealTimeInput').val();
  console.log(mealTime);
  var mealTimeCopy = mealTime;
  var mealYear = mealTime.slice(0, 4);
  var mealMonth = mealTime.slice(5, 7);
  var mealDay = mealTime.slice(8, 10);
  console.log(mealYear);
  console.log(mealMonth);
  console.log(mealDay);
  mealTime = mealYear + mealMonth + mealDay;
  var apiURL = 'https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010333&MLSV_YMD=' + mealTime;

  $.ajax({
    url: apiURL,
    dataType: 'json',
    type: 'GET',
    async: 'false',
    success: function (resp) {
      if(resp.RESULT.CODE == undefined){
        console.log('err');
        $('.L-dishNm').html('해당 날짜의 급식 정보가 없습니다.');
        console.log('err2');
        $('.D-dishNm').html('해당 날짜의 급식 정보가 없습니다.');
      } else {
        // 날짜 변경 중식
        console.log(resp);
        console.log(resp.mealServiceDietInfo[1].row[0]);
        console.log('학교명 : ' + resp.mealServiceDietInfo[1].row[0].SCHUL_NM);
        $('.schNm').val(resp.mealServiceDietInfo[1].row[0].SCHUL_NM);
        console.log('급식 : ' + resp.mealServiceDietInfo[1].row[0].DDISH_NM);
        $('.L-dishNm').html(resp.mealServiceDietInfo[1].row[0].DDISH_NM);
        console.log('급식 종류: ' + resp.mealServiceDietInfo[1].row[0].MMEAL_SC_NM);
        $('.mealScNm').html(resp.mealServiceDietInfo[1].row[0].MMEAL_SC_NM);
        console.log('일시 : ' + resp.mealServiceDietInfo[1].row[0].MLSV_YMD);
        $('.orplc').html(resp.mealServiceDietInfo[1].row[0].NTR_INFO);
        var mealTime = String(resp.mealServiceDietInfo[1].row[0].MLSV_YMD);
        $('.mealTimeInput').val(mealTimeCopy);
        console.log(mealTime);
  
        $('.mealTime').html(resp.mealServiceDietInfo[1].row[0].MLSV_YMD);

        // 날짜 변경 석식
        console.log(resp);
        console.log(resp.mealServiceDietInfo[1].row[1]);
        console.log('학교명 : ' + resp.mealServiceDietInfo[1].row[1].SCHUL_NM);
        $('.schNm').val(resp.mealServiceDietInfo[1].row[1].SCHUL_NM);
        console.log('급식 : ' + resp.mealServiceDietInfo[1].row[1].DDISH_NM);
        $('.D-dishNm').html(resp.mealServiceDietInfo[1].row[1].DDISH_NM);
        console.log('급식 종류: ' + resp.mealServiceDietInfo[1].row[1].MMEAL_SC_NM);
        $('.mealScNm').html(resp.mealServiceDietInfo[1].row[1].MMEAL_SC_NM);
        console.log('일시 : ' + resp.mealServiceDietInfo[1].row[1].MLSV_YMD);
        $('.orplc').html(resp.mealServiceDietInfo[1].row[0].NTR_INFO);
        var mealTime = String(resp.mealServiceDietInfo[1].row[1].MLSV_YMD);
        $('.mealTimeInput').val(mealTimeCopy);
        console.log(mealTime);
  
        $('.mealTime').html(resp.mealServiceDietInfo[1].row[1].MLSV_YMD);
      }

    }
    

  })

})

// 급식 종류 표시

$('#dinner').on('click', function(){
  var mealTime = $('.mealTimeInput').val();
  console.log(mealTime);
  var mealTimeCopy = mealTime;
  var mealYear = mealTime.slice(0, 4);
  var mealMonth = mealTime.slice(5, 7);
  var mealDay = mealTime.slice(8, 10);
  console.log(mealYear);
  console.log(mealMonth);
  console.log(mealDay);
  mealTime = mealYear + mealMonth + mealDay;
  var apiURL = 'https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010333&MLSV_YMD=' + mealTime;

  $.ajax({
    url: apiURL,
    dataType: 'json',
    type: 'GET',
    async: 'false',
    success: function (resp) {
      if(resp.RESULT.CODE == undefined){
        console.log('err');
        $('.L-dishNm').html('해당 날짜의 급식 정보가 없습니다.');
        console.log('err2');
        $('.D-dishNm').html('해당 날짜의 급식 정보가 없습니다.');
      } else {
        console.log('급식 종류: ' + resp.mealServiceDietInfo[1].row[1].MMEAL_SC_NM);
        $('.mealScNm').html(resp.mealServiceDietInfo[1].row[1].MMEAL_SC_NM);
        $('.orplc').html(resp.mealServiceDietInfo[1].row[1].NTR_INFO);
      }
    }

  })
})


$('#lunch').on('click', function () {
  var mealTime = $('.mealTimeInput').val();
  console.log(mealTime);
  var mealTimeCopy = mealTime;
  var mealYear = mealTime.slice(0, 4);
  var mealMonth = mealTime.slice(5, 7);
  var mealDay = mealTime.slice(8, 10);
  console.log(mealYear);
  console.log(mealMonth);
  console.log(mealDay);
  mealTime = mealYear + mealMonth + mealDay;
  var apiURL = 'https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010333&MLSV_YMD=' + mealTime;

  $.ajax({
    url: apiURL,
    dataType: 'json',
    type: 'GET',
    async: 'false',
    success: function (resp) {
      if(resp.RESULT.CODE == undefined){

        console.log('err');
        console.log('err2');
      } else {
        console.log('급식 종류: ' + resp.mealServiceDietInfo[1].row[0].MMEAL_SC_NM);
        $('.mealScNm').html(resp.mealServiceDietInfo[1].row[0].MMEAL_SC_NM);
        $('.orplc').html(resp.mealServiceDietInfo[1].row[0].NTR_INFO);
      }
    }

  })
})