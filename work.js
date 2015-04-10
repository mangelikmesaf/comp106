$(document).ready(function (){
    console.log("my js is loaded");
    $('.hide-tittle img').mouseenter(function () {
        $(this).siblings().css('opacity', '1');
    });
    $('.hide-tittle img').mouseleave(function () {
         $(this).siblings().css('opacity', '0');
    });
});