$(document).ready(function () {
  $(".menu__button").click(function () {
    $("#cabecalho__menu").slideToggle();
  });
    $(".show__Text").click(function () { 
    $('.show__Text').html("▼")
    $(".apresentacao__colaborador").slideToggle();
    $(this).toggleClass("show__active");
    $(".show__active").html("▲");
  }); 
    
});
