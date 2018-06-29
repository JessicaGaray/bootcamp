$(function () {
  $('h2').hide(300).delay(500).show(300).delay(500).hide(400).slideDown(300).slideUp(300).slideDown(300);
});

$(function () {
  $('.jumbotron p').css({color:"blue"});
});

/*$(function () {
  $('#button1').on('click',function(){
    $('#card1').fadeToggle(300);
  });
});

$(function () {
  $('#button2').on('click',function(){
    $('#card2').slideToggle(300);
  });
});

$(function () {
  $('#button3').on('click',function(){
    $('#card3').fadeToggle(300);
  });
});

the code replacing this is the jbutton
make custom attricute
*/

$(function () {
  $('.jbutton').on('click',function () {
    var cardId = $(this).attr('data-cardid');
    $('#'+cardId).toggle(100);
  });
});

$(function () {
  $('#cardbtn1').on('click',function(){
    $("#card1").fadeOut(300).fadeIn(300);
  });
});

$(function () {
  $('#cardbtn2').on('click',function(){
    $("#card2").fadeOut(300).fadeIn(300);
  });
});

$(function () {
  $('#cardbtn3').on('click',function(){
    $("#card3").fadeOut(300).fadeIn(300);
  });
});

/*safest way*/
$(document).ready(function() {
  $('#button').click/*or onClick*/(function () {
    $('#text').slideToggle('fast',function () {
      alert('Element Toggled/Clicked');
    });
  });
});
