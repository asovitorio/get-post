var express = require('express');
var router = express.Router();
var produtoController = require('../controllers/produtoController')

router.get('/',produtoController.produtoView);
router.get('/listar',produtoController.listarProduto);
router.post('/listar',produtoController.salvarProduto);
router.get('/:id/editar',produtoController.viewAttform);
router.put('/editar',produtoController.editarProduto);
router.delete('/delete/:id',produtoController.deletarProduto);




module.exports = router;