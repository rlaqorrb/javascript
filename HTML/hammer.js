var np = 1;
$('.counter').html(`${np}/3`);


$('.next').click(function(){
  if (np < 3){
    $('.img-container').css('transform', `translateX(-${np}00vw)`);
    console.log(np);
  } else if (np = 3){
    np = np-3;
    $('.img-container').css('transform', `translateX(-${np}00vw)`);
  }
  np = np+1;
  console.log(np);
  $('.counter').html(`${np}/3`);
});

$('.previous').click(function(){
  if (np > 1){
    np = np-2;
    $('.img-container').css('transform', `translateX(-${np}00vw)`);
    console.log(np);
  } else if (np = 1){
    np = np + 1;
    $('.img-container').css('transform', `translateX(-${np}00vw)`);
    // np = np-2;
  }
  np = np+1;
  console.log(np);
  $('.counter').html(`${np}/3`);
});


var h1태그 = document.querySelector('h1');
var text = document.querySelector('h1').innerHTML;

$('.btn').ready(function(){
  $(h1태그).html('');
  for (let i = 0; i < text.length; i++){
    setTimeout(function(){
      h1태그.innerHTML = h1태그.innerHTML + text[i]
    }, 100*i);

  }

})