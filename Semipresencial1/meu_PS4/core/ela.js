function iniciarGravacao() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "pr-BR";
        recognition.start();

        recognition.onresult = function(e) {
            recognition.stop();
            comando(e.results[0][0].transcript);
        };

        recognition.onerror = function(e) {
            console.log("Erro ... Encerrando a gravação");
            recognition.stop();
        }
    }
}

function comando(command){
    if(command == "log"){
      console.log("Helloooo");
    }else{
      console.log("Erro. Comando não reconhecido.");
    }
}

function newFace(){ //!!! IMPORTANTE !!! REVER ESTÁ FUNÇÃO ... COMO ATUALIZAR A IMAGEM?
  return "t"+Math.floor(Math.random() * 9);
}

