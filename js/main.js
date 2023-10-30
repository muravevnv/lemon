
// fullpage customization
$('#fullpage').fullpage({

  navigation: true,
  // onLeave: function(index, nextIndex, direction){
  //   //leaving 1st section
  //   if(index == 3){
  //      $('.header').addClass('header--grey');
  //   }
  //   //back to the 1st section
  //   if(nextIndex == 3){
  //       $('.header').removeClass('header--grey');
  //   }
  // } 

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