const { request } = require('express');
const express = require('express');
app.use(express.json());
const app = express();





/*const hostname = 'https://jsonplaceholder.typicode.com/users';
const path = '/users';

request(`${hostname}${path}`, (err, res, body) => {
    console.log(body)
}) */


app.get('/users', (request, response) => {
    return response.json(
        
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                }
              },
              "phone": "1-770-736-8031 x56442",
              "website": "hildegard.org",
              "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
              }
            },
    );
});
 
app.get('/', (request, response) => {
    console.log(response.query);
    return response.send('olá mundo');
});



app.get('/usuario/:id', (request, response) => {
   console.log(request.params);
    return response.json({
        id: 1,
        name: 'Joãozinho da Silva asdsd'
    });
});

app.get('/produto', (request, response) => {
   console.log(request.body);
    return response.json({
        id: 1,
        descricao: 'Carro',
        preco: 19
        
    });
});

app.listen(3333);




