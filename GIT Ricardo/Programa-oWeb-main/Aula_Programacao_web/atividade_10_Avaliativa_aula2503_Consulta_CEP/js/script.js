const cep = document.querySelector("#cep")

const showData = (result)=>{ //Criamos a variável showData e atribuimos à ela o resultado
    for(const campo in result){//Para cada um dos campos que veio nesse objeto, para cada "resultado" armazena o nome deles na variável campo
        if(document.querySelector("#"+campo)){//Esse if verifica se algum campo do resultado é igual ao Id do campo do formulário html 
            document.querySelector("#"+campo).value = result[campo]//Caso seja igual ele coloca esse resultado no campo e preenche o formulário dinamicamente
        }
    }
}




cep.addEventListener("blur",(e)=>{  //O blur serve para quando a pessoa tira o foco disparar o evento que vem na sequência
    let search = cep.value.replace("-","") // criamos uma variável para armazenar esse valor que foi editado retirando o traço no replace
    const options = {// criamos uma constante do tipo objeto para armazenar os valores das opções que serão usadas na consulta da API
        method: 'GET',//método de acesso padrão
        mode: 'cors',//modo de acesso quando estamos trabalhando com "servidores" diferentes, no caso estamos com uma origem de servidor diferente do Via Cep
        cache: 'default'//
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)//passamos a variável do valor digitado como parâmetro na url de consulta no fetch, passamos as opções através da constante "options"
    //No retorno da promisse temos as respostas abaixo
    .then(response =>{ response.json()// caso dê certo "então" traz a reposta no formato json
        .then( data => showData(console.log(data))) //caso consiga trazer a resposta "então" mostra o arquivo
    })
    .catch(e => console.log('Deu Erro: '+ e,message))//caso dê errado trata a excessão, captura o erro e mostra no log do console   
})