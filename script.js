// add accessability to the modal

//onclick the modal button will alert the user of modal status and set focus
$('.modal-launch-button').on('click', function(e) {
  if ($('.modal-content').hasClass('m-closed')) {
    $('.modal-content').focus();
    $('.modal-live-text').html('The modal is opening');
    $('.modal-content').removeClass('m-closed').addClass('m-open');
  }else if ($('.modal-content').hasClass('m-open')) {
    $('.modal-live-text').html('The modal is closing');
    $('.modal-content').removeClass('m-open').addClass('m-closed');
  }
});

//on click modal buttons will update modal status
$('.modal button').on('click', function(e) {
    $('.modal-live-text').html('The modal is closing');
    $('.modal-content').removeClass('m-open').addClass('m-closed');
});

// create key loop so tab user must select a modal button before they can exit
$('.modal-last').on('keydown', function(e) {
  if(e.keyCode == 9) {
    e.preventDefault();
    $('.modal-button-1').focus();
  }
  if(event.shiftKey) {
    if(e.keyCode == 9){
    e.preventDefault();
    $('.modal-button-2').focus();
  }}
});

$('.modal-button-1').on('keydown', function(e) {
  if(event.shiftKey) {
    if(e.keyCode == 9){
    e.preventDefault();
    $('.modal-last').focus();
  }}
});
