$('.list').click(function(e){

    탭열기(e.target.dataset.id);

});

function 탭열기(숫자){
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');

  $('.tab-button').eq(숫자).addClass('active');
  $('.tab-content').eq(숫자).addClass('show');
};





// for (let i = 0; i < $('.tab-button').length; i++){
//   $('.tab-button').eq(i).click(function(){
//     탭열기(i);
//   });
// };



$('.black-background').click(function(e){
  if (e.target == this){
    $('.black-background').removeClass('slide-down');
  };
});


$('body').click(function(p){
  if (p.target == this){
    $('.left-menu').removeClass('slide-right');
  }
});