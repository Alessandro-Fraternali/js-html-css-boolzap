$(document).ready(function(){

// Se si vuole scrivere un msg l'icona del microfono sparisce e appare quella dell'invio
$("#typemsg").click(
  function(){
    // rimuovo la classe microfono
    $("#sendmsgicon").removeClass("fas fa-microphone");
    // inserisco la classe telegram
    $("#sendmsgicon").addClass("fab fa-telegram-plane");
  }
)
// cliccando altrove, l'icona telegram torna un microfono
$("nav, .conversation, .chatinfo").click(
  function(){
  // rimuovo la classe telegram
  $("#sendmsgicon").removeClass("fab fa-telegram-plane");
// inserisco la classe microfono
  $("#sendmsgicon").addClass("fas fa-microphone");
});

});
