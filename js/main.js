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
  var gomsg = $("#sendmsgicon");

  gomsg.click(
    function() {
    // variabili interne
    var msgright = $(".msgsent");
    var msgleft = $(".msgreceived");
    var msgarea = $("#typemsg");
    var chatbox = $(".conversation");
    var msggo = msgarea.val();
    // stampo il contenuto inserito in #typemsg dentro un .msgsent
    chatbox.append('<div class="msgsent">'+ msggo +'</div>');
    // ripulisco l'input
    msgarea.val("");
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

  // ricerca tra i contatti tramite nome
  $("#searchuser").keyup(
    function() {
      // salvo cosa inserito nell'input di ricerca utente
      var seeker = $(this).val().toLowerCase();

      // passo in rassegna i nomi inseriti in pippo
      $(".pippo").each(
        function() {
        var friendname = $(this).find("h3").text().toLowerCase();

          // confronto se seeker rientra in friendname
          if(friendname.includes(seeker)){
            $(this).show();
          }else {
            $(this).hide();
          }
        });
    });

});
