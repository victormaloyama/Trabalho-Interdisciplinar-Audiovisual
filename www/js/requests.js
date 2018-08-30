$(document).ready(function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "./home-data.json");
	
	xhr.addEventListener("load", function(){
		var receitas = JSON.parse(xhr.responseText);
		var conteudo = "";
		for (var i = 0; i < receitas.length; i++) {
			conteudo += "<div class='receita-div'" + receitas[i].diretorio + "><h1>" + receitas[i].nome + "</h1>";
			conteudo += "<img src='" + receitas[i].imagem + "' class='receita-img'>";
			conteudo += "<h4 class='receita-tipo'>" + receitas[i].tipo + "</h4></div>";
		}	
		$("#receitas-conteudo").append(conteudo);
	});
	
	xhr.send();
});