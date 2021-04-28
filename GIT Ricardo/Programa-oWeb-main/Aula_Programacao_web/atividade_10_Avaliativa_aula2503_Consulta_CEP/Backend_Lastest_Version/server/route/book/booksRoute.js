const express = require('express');
const router = express.Router();
const booksService = require('../../service/book/booksService')

// vai retornar todos os livros inseridos no banco de dados
router.get('/books', async function(req, res){
    const books = await booksService.getBooks();
    res.json(books);
});

// vai retornar todos o livro por di passado na URL
router.get('/book/:id', async function(req, res) {
  const book = await booksService.getBook(req.params.id);
  res.json(book);
});

router.delete('/book/:id', async function(req, res){ 
    await booksService.deleteBook(req.params.id);
    return res.send('Registro Excluído com sucesso!');
   // return res.json([{message: 'registro excluído com sucesso'}]);
}); 

router.put('/book', async function(req, res){
    const book = req.body;
    console.log(book);
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

module.exports = router;