var 탭버튼 = $('.tab-button');
var 탭내용 = $('.tab-content');




for(let i = 0; i < 탭내용.length; i++){
  $('.tab-button').eq(i).on('click', function(){
    탭버튼.removeClass('orange');
    탭버튼.eq(i).addClass('orange');
    탭내용.removeClass('show');
    탭내용.eq(i).addClass('show')
  })
}
var a = ['a', 'v', 'b', 'd', 'd'];
const contnes = [{A1 : 'aa', a2 : 'aaa'}, {b : 'bb'}];


var 책소개 = contnes[0].A1;
console.log(책소개)
console.log(content);



const contents = [
  { A1 : '책 소개',
  A2 : '책 선정이유',
  A3 : '책 목차 소개 및 간단한 설명' },
  { B1 : '프로그래밍이란?',
  B2 : '프로그래밍 언어',
  B3 : 'JavaScript' },
  { C1 : '프로그래머에 대해',
  C2 : '웹 프로그래머' }];
  
  console.log(contents);
  