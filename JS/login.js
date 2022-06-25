$('#login').on('click', function () {
  $('.login-modal-black-bg').addClass('show');
  $('.login-modal').addClass('show');
})

$('#close').on('click', function () {
  $('.login-modal-black-bg').removeClass('show');
  $('.login-modal').removeClass('show');
})