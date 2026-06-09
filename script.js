 //Js
  alert("Oi, este é um presente para você, feito por mim")
  const buttons = document.getElementById("buttons");
  let text = "Eu tenho algo para ti dizer... ❤️💜💚";
  let botaoNegar = document.createElement("button");
  let i = 0;
  function type() {
  	if (i < text.length) {
  		document.getElementById("mesg1").innerHTML += text.charAt(i);
  		i++;
  		setTimeout(type, 40);
  	}
  }
  setTimeout(type, 1000);
  
  function show() {
  	let botaoMostrar = document.createElement("button");
  	botaoMostrar.textContent = "Contar";
  	botaoMostrar.className = "mostrar";
  	buttons.appendChild(botaoMostrar);
  	let cliques = 0;
  
  	botaoMostrar.onclick = function () {
  		cliques++;
  
  		if (cliques === 1) {
  			show2(botaoMostrar);
  		} else if (cliques === 2) {
  			show3(botaoMostrar);
  		} else if (cliques === 3) {
  			show4(botaoMostrar);
  		} else if (cliques === 4) {
  			show5(botaoMostrar);
  		} else {
  		  alert("Já foi tudo dito. Boa continuação do dia!")
  		}
  	};
  }
  
  setTimeout(show, 3000);
  
  function show2(botaoMostrar) {
  	let text2 = "És uma pessoa muito especial para mim!🥰 Sabias? Gosto do teu jeito de ser!";
  	let i = 0;
  	function type() {
  		if (i < text2.length) {
  			document.getElementById("mesg2").innerHTML += text2.charAt(i);
  			i++;
  			setTimeout(type, 40);
  		}
  	}
  	type();
  	botaoMostrar.textContent = "Mostrar mais";
  }
  
  function show3(botaoMostrar) {
  	let text3 =
  		"E eu não consigo parar de pensar em você, és muito bonita, o teu olhar me coloca nas nuvens, teu sorriso faz meu coração pulsar forte!";
  	let i = 0;
  	function type() {
  		if (i < text3.length) {
  			document.getElementById("mesg3").innerHTML += text3.charAt(i);
  			i++;
  			setTimeout(type, 40);
  		}
  	}
  	type();
  	botaoMostrar.textContent = "Mostrar mais";
  }
  
  function show4(botaoMostrar) {
  	let text4 =
  		"Eu estou apaixonadinho por você🫠, e saber se você sente o mesmo por mim seria simplemente maravilhoso, você sente o mesmo por mim? ❤️";
  	let i = 0;
  	function type() {
  		if (i < text4.length) {
  			document.getElementById("mesg4").innerHTML += text4.charAt(i);
  			i++;
  			setTimeout(type, 40);
  		}
  	}
  	type();
  	botaoMostrar.textContent = "Sim";
  	botaoNegar.textContent = "Não";
  	botaoNegar.className = "mostrar";
  	buttons.appendChild(botaoNegar);
  	botaoNegar.onclick = function () {
  		alert("💔");
  		alert("Tudo bem ❤️‍🩹, agradeço tua honestidade!");
  	};
  }
  
  function show5(botaoMostrar) {
  	function aceitou() {
  		confetti({
  			particleCount: 300,
  			spread: 120,
  			origin: { y: 0.6 }
  		});
  
  		alert("Você me fez muito feliz! ❤️");
  	}
  
  	aceitou();
  	let text5 =
  		"Você não sabe o quanto estou feliz e grato pelo destino nos unir! E espero que o nosso amor nunca acabe 😍";
  	let i = 0;
  	function type() {
  		if (i < text5.length) {
  			document.getElementById("mesg5").innerHTML += text5.charAt(i);
  			i++;
  			setTimeout(type, 40);
  		}
  	}
  	type();
  	botaoMostrar.textContent = "Feito"
  	botaoNegar.remove()
  }
  for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");

  star.textContent = "✦";
  star.className = "star";

  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";

  star.style.fontSize = (Math.random() * 10 + 5) + "px";

  star.style.animationDuration =
    (Math.random() * 3 + 1) + "s";

  document.body.appendChild(star);
}

const musica = document.getElementById("musica");

musica.volume = 0.3;

document.addEventListener("click", () => {
  musica.play();
}, { once: true });