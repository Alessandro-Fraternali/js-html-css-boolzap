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
  }
);

  // cliccando l'icona telegram appare un .msgsent con
  // il contenuto inserito in #typemsg
  var msgright = $(".msgsent");
  var msgleft = $(".msgreceived");
  var gomsg = $("#sendmsgicon");
  var msgarea = $("#typemsg");
  var chatbox = $(".conversation");

  gomsg.click(
    function() {
    var msgready = msgarea.val();
    chatbox.append('<div class="msgsent">'+ msgready +'</div>');
    msgarea.val(" ");
    // creazione di .msgreceived in risposta
    setTimeout(answerFunction, 1500);
    function answerFunction(){
      chatbox.append('<div class="msgreceived">Come sarebbe?</div>');
    }
    setTimeout(answerFunction2, 3000);
    function answerFunction2(){
      chatbox.append('<div class="msgreceived">VIIINOH!</div>');
    }
        }
  );

});
