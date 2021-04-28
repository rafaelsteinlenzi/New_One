$(function() {
    var nomeJogador;
    var jogador = 1;
    var jogadorVencedor = "";
    var numeroJogadas = 0;

    function colunasIguais (a,b,c) {
        var colunaA = $("#coluna" + a);
        var colunaB = $("#coluna" + b);
        var colunaC = $("#coluna" + c);

        var backgroundA = $("#coluna" + a).css("background-image");
        var backgroundB = $("#coluna" + b).css("background-image");
        var backgroundC = $("#coluna" + c).css("background-image");

        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")) {
            if(backgroundA.indexOf("1.png") >= 0) {
                jogadorVencedor = "1";
                nomeJogador = $("#Jogador1").val();
            } else {
                jogadorVencedor = "2";
                nomeJogador = $("#Jogador2").val();
            }
            return true;
        } else {
            return false;
        }
    }



        
        function verificarFimDeJogo() {

            if(colunasIguais(1,2,3) || colunasIguais(4,5,6) || colunasIguais(7,8,9) || 
                colunasIguais(1,4,7) || colunasIguais(2,5,8) || colunasIguais(3,6,9) ||
                colunasIguais(1,5,9) || colunasIguais(3,5,7)

            ){
            var image;
            image = document.createElement("IMG");
            image.src=jogadorVencedor + ".png";
            $("#imagem").html(image);
            $("#resultado").html("<h2>0 Player " + nomeJogador + " ganhou! <\h2>")
            $(".coluna").off("click");
        } else {
            $("#resultado").html("<h2>Empate! <\h2>")
        }


    } 

        $(".coluna").click(function() {
          var bg = $(this).css("background-image");  
          if (bg == "none" || bg == "") {
              var fig = "url(" + jogador.toString() + ".png)";
              $(this).css("background", fig);
              jogador = (jogador == 1 ? 2 : 1);
              verificarFimDeJogo();
          }
        
        });
        /*$("#significado").click(function(){
            $("#significado").load("jogo_velha.txt");
        });*/       
    });
    $("#significado").click(function(e) {
        e.preventDefault(); //não atualizar a paina
        console.log("Botão clicado");            
    $.ajax({
         url: "http://localhost:8585/Jogo_Velha.txt",
        dataType: 'text',
        success: function(data) {
            console.log(data)
        }
    });
});
    
 
    
