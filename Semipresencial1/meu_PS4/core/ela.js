class Ela {
	constructor(){
		this.slidesTitleText = ['Title #0', 'Tilte #1', 'Title #2', 'FIM DA APRESENTAÇÃO'];
		this.slidesBodyText = [
		'Silvio Santos Ipsum ma tem ou no tem o celular do milhouamm? Valendo um milho de reaisammm. Eu no queria perguntar isso publicamente, ma vou perguntar. Carla, voc tem o ensino fundamentauam? Mah roda a roduamm. Vem pra l, mah voc vai pra c. Agora vai, agora vem pra lamm. Eu no queria perguntar isso publicamente, ma vou perguntar. Carla, voc tem o ensino fundamentauam? Ma! Ao adquirir o carn do Ba, voc estar concorrendo a um prmio de cem mil reaisam. O prmio  em barras de ouro, que vale mais que dinheiroam.  com voc Lombardiam.',
		'Ma vai pra l. Voc veio da caravana de ondeammm?  bom ou no am? O Raul Gil  gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil  gayamm! Ma voc, topa ou no topamm. Patrciaaammmm... Luiz Ricardouaaammmmmm. Mah voc mora com o papai ou com a mamem? Ma vai pra l. Ma voc est certo dissoam? Mah ooooee vem pra c. Vem pra c. Mah roda a roduamm. Vem pra l, mah voc vai pra c. Agora vai, agora vem pra lamm.  dinheiro ou no am?',
		'Mah ooooee vem pra c. Vem pra c. Ha haeeee. Hi hi. O arriscam tuduam, valendo um milho de reaisuam. Estamos em ritmo de festamm. Mah  a porta da esperanaam.  namoro ou amizadeemm? Estamos em ritmo de festamm. Patrciaaammmm... Luiz Ricardouaaammmmmm.',
		'Obrigado!'
		];
		this.currentSlide = 0;
		this.title = document.querySelector('p.titulo');
		this.body = document.querySelector('p.corpo-texto');
		this.imagem = document.querySelector('div.assistent');		
		this.setSlide(0);
		this.newFace();
	}

	iniciarGravacao() {
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

	verificaAcao(movimento){
		if(movimento >= 0 && movimento < this.slidesBodyText.length)
			return 1; //OK
		console.log("verifivaAcao:"+this.currentSlide);
		return 0; //Not OK - Error
	}

	nextSlide(){
		//this.currentSlide += 1;
		if(this.verificaAcao(this.currentSlide+1) == 0){
			console.log("Erro. NextSLide. Impossivel de continuar.");
			return 0//impossivel de continuar
		}

		this.currentSlide++;
		
		this.title.textContent = this.slidesTitleText[this.currentSlide];
		this.body.textContent = this.slidesBodyText[this.currentSlide];
		this.newFace();
	}

	backSlide(){
		if(this.verificaAcao(this.currentSlide-1) == 0){
			console.log("Erro. NextSLide. Impossivel de continuar.");
			return 0//impossivel de continuar
		}

		this.currentSlide--;		
		this.title.textContent = this.slidesTitleText[this.currentSlide];
		this.body.textContent = this.slidesBodyText[this.currentSlide];
	}

	setSlide(posicaoSlide){
		if(this.verificaAcao(posicaoSlide) == 0){
			console.log("Erro. NextSLide. Impossivel de continuar.");
			return 0//impossivel de continuar
		}

		this.currentSlide = posicaoSlide;		
		this.title.textContent = this.slidesTitleText[this.currentSlide];
		this.body.textContent = this.slidesBodyText[this.currentSlide];
	}

	comando(command){
	    if(command == "log"){
	      console.log("Helloooo");
	    }else{
	      console.log("Erro. Comando não reconhecido.");
	    }
	}

	newFace(){
	  let string = "assistent t"+Math.floor(Math.random() * 7);
	  this.imagem.classList = string;
	}
}

