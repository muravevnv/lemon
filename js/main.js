
// fullpage customization
$('#fullpage').fullpage({

  navigation: true,

}); 

// phone mask

$(".js-phone").inputmask({"mask": "+7(999) 999-9999"});

// modal

$('.js-open-modal').on('click', () => {
  $('.modal').show();
})

$(document).on('click', '.modal__close', () => {
  $('.modal').hide();
})

$(document).on('click','.modal-overlay', () => {
  $('.modal').hide();
})