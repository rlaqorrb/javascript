var h1태그 = document.querySelector('h1');
var text = document.querySelector('h1').innerHTML;

var h3태그 = document.querySelector('h3');
var text3 = document.querySelector('h3').innerHTML;

var p태그 = document.querySelector('.ty-p');
var text4 = document.querySelector('.ty-p').innerHTML;

function typewrite (h1태그, text){
  $(h1태그).html('');
  for (let i = 0; i < text.length; i++){
    setTimeout(function(){
      h1태그.innerHTML = h1태그.innerHTML + text[i]
    }, 80*i);
  }
}


$(document).ready(function(){
  $('.hw').html('');
  $('.ex-btn').hide();
  $('.ty-p').hide();

  typewrite(h1태그, text);
  setTimeout(function(){    
    typewrite(h3태그, text3);
  }, 1000)
  setTimeout(function(){
    $('.ex-btn').slideDown();
  }, 3000)
  setTimeout(function(){
    $('.ty-p').show();
    typewrite(p태그, text4);
  }, 3000)
})
