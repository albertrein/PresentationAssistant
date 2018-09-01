class Ela {
	constructor(){
		//INicia variáveis
		this.slidesTitleText = ['Olá ... Eu sou a assistente de apresentação.', 'FreeBSD Histórico:', 'FreeBSD Histórico:', 'FreeBSD características e recursos:', 'FreeBSD características e recursos:', 'FreeBSD aplicações:','Orbis OS:', 'Obrigado pela Atenção. Boa Noite!'];
		this.slidesBodyText = [
		'ORBIS OS/FreeBSD',
		' <ul>      <li>Berkeley Software Distribution (BSD):</li>          <ol>              <li>Versão do UNIX desenvolvida na Universidade da Califórnia, em Berkeley</li>              <li>Distribuído de 1977 a 1995;</li>              <li>Produtos baseados no BSD:</li>              	<ol>              		<li>386BSD, FreeBSD, NetBSD...</li>              	</ol> </ol>  </ul>',
		' <ul>    <li>Consequência do conjunto de manutenção não-oficial do 386BSD;</li>      <li>Lançamento:	1 de novembro de 1993;</li>      <li>Versão mais recente: 11.2 (Junho de 2018);</li>      <li>Distribuição BSD de código aberto mais usada;</li>      <li>Produtos baseados no FreeBSD:</li>          <ol>              <li>DragonFly BSD, PC-BSD, Darwin, Orbis OS...</li>          </ol>  </ul>',
		'<ul>	<li>Sistema Operacional de propósito geral;</li>	<li>Sistema Operacional completo (kernel, drivers de dispositivos, espaço de usuário, documentação);</li>	<li>Kernel monolítico com módulos de kernel carregáveis e um sistema de configuração flexível;</li>	<li>Interface: Linha de comandos;</li>	<li>Software livre e de código aberto;</li>	<li>Distribuído sob uma licença BSD liberal;</li></ul>',
		'<ul>	<li>Arquiteturas: IA-32, x86-64, SPARC64, IA-64, PowerPC, ARM, MIPS;</li>	<li>Funcionalidades avançadas de rede:</li>		<ol><li>Firewalls, gerenciamento de QoS, rede TCP/IP de alta performance;</li></ol>	<li>Ports Collection: sistema de instalação de pacotes prático e eficiente;</li><li>Suporta a emulação de binários do Linux;</li><li>Suporte para os binários dos drivers de rede do Windows;</li></ul>',
		'<ul>	<li>Serviços da Internet;</li>	<li>Estação de trabalho X Window;</li>	<li>Networking;</li>	<li>Desenvolvimento de software;</li>	<li>Educação e pesquisa: inclui um código fonte completo;</li></ul>',
		'<ul>	<li>Desenvolvido por Sony Interactive Entertainment;</li>	<li>Sistema operacional do PlayStation 4;</li>	<li>Lançamento: 15 de novembro de 2013;</li><li>É um fork da versão 9.0 do FreeBSD lançada em 12 de janeiro de 2012;</li><li>Última versão: 5.55, lançada em 17 de maio de 2018;</li><li>Tipo de kernel: Modular;</li>	<li>Software proprietário;</li></ul>',		
		'<img src="../media/osguris.jpg" />'
		];
		this.currentSlide = 0;
		this.title = document.querySelector('p.titulo');
		this.body = document.querySelector('p.corpo-texto');
		this.imagem = document.querySelector('div.assistent');

		this.setSlide(0); //Inicia apresentação
	}

	
	verificaAcao(movimento){
		if(movimento >= 0 && movimento < this.slidesBodyText.length)
			return 1; //OK
		console.log("verifivaAcao:"+this.currentSlide);
		return 0; //Not OK - Error
	}

	action(){
		this.title.innerHTML = this.slidesTitleText[this.currentSlide];
		this.body.innerHTML = this.slidesBodyText[this.currentSlide];
		this.newFace();
		this.speak(this.slidesTitleText[this.currentSlide]);
	}

	nextSlide(){
		if(this.verificaAcao(this.currentSlide+1) == 0){
			console.log("Erro. NextSLide. Impossivel de continuar.");
			return 0//impossivel de continuar
		}

		this.currentSlide++;
		this.action();
	}

	backSlide(){
		if(this.verificaAcao(this.currentSlide-1) == 0){
			console.log("Erro. NextSLide. Impossivel de continuar.");
			return 0//impossivel de continuar
		}

		this.currentSlide--;
		this.action();
	}

	setSlide(posicaoSlide){
		if(this.verificaAcao(posicaoSlide) == 0){
			console.log("Erro. NextSLide. Impossivel de continuar.");
			return 0//impossivel de continuar
		}

		this.currentSlide = posicaoSlide;
		this.action();
	}


	newFace(){
	  let string = "assistent t"+Math.floor(Math.random() * 7);
	  this.imagem.classList = string;
	}

	speak(textoFala){
		responsiveVoice.speak(textoFala,"Brazilian Portuguese Female");
	}


	executar(command){
		command = command.toLowerCase();
	    if(command == "log"){
	      console.log(command);
	    }else if(command == "próximo slide" || command == "próximo"){
	      console.log("Próximo slide");
	      this.nextSlide();
	      this.apagaArquivo();
	    }else if(command == "voltar slide" || command == "anterior" || command == "slide anterior"){
	      console.log("Slide anterior");
	      this.backSlide();
	      this.apagaArquivo();
	    }else{
	    	console.log(">>"+command+" não foi reconhecido");
	    	this.apagaArquivo();
	    }
	}


	apagaArquivo(){
		var data = {
           	apaga: "text"
        };			
		var x = $.post("controle/controle.php", data);
	}

}