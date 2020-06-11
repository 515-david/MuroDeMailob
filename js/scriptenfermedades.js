//  $(document).mousemove(function(){

//     console.log("Y: ", + event.clientY);
//     console.log("X: ", + event.clientX);

//     $('body').css("cursor","none");
//     $('#follow').css("top", event.clientY).css("left", event.clientX);
// });


$('.cambia-color').mouseover(function(){
    $(this).css("background","black").css("color","white");
});

$('.cambia-color').mouseout(function(){
    $(this).css("background","white").css("color","black");
});