$(function(){

    const tbody = $(".table tbody");

    function obterDados() {
        $.ajax("https://api.openweathermap.org/data/2.5/weather?q=blumenau&appid=4018606516ae80368ba9f427e29abb65", {
            type : 'GET',
            beforeSend: function() {
                $('.table').after('<p class="loading">Aguarde! Carregando... </p>')
            },
            error: function() {
                $('.table').after('<p class="loading">Deu ruim</p>')
            },
            success: function(dados) {
                console.log(dados);
                mostrarDados(dados);
            },
            complete: function() {
                $(".loading").remove()
            }
        })

    }

    $('form').on('submit', function(e) {
        e.preventDefault();
        const dados = {};

        $('form').find('input').each(function(i, el){
            dados[el.id] = el.value;
        })

        $.ajax("https://api.openweathermap.org/data/2.5/weather?q=blumenau&appid=4018606516ae80368ba9f427e29abb65", {
            type : "POST",
            headers: {
                "x-rapidapi-key": "02f4a9d12amsh8f71f5869f2058fp1ea1d9jsn4632ebb87ff5",
                "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                "useQueryString": true
            },
            data: dados,
            success: function(_dados) {
                console.log(_dados);
                mostrarDados(_dados);
                alert("sucesso!")
            },
            error: function() {
                alert("Erro!")
            }
        })
    })


    function mostrarDados(dados) {
        // $.each(dados, (i, el) => {

            tbody.append(`<tr class="linha">
                            <th scope="row">${dados.id}</th>
                            <td class="nome">${dados.name}</td>
                            <td class="username">${dados.timezone}</td>
                            <td class="email">${dados.cod}</td>
                          </tr>
            `)
        // }
        // );
    }

    obterDados();
    tbody.on('click', (e) => {    
        $linha = $(e.target).closest(".linha");
        $("#name").val($linha.children(".nome").text());
        $("#username").val($linha.children(".username").text());
        $("#email").val($linha.children(".email").text());
        $("#endereco").val($linha.children(".endereco").text());
    })
})