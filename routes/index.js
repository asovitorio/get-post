var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home)
router.get('/contato', indexController.viewContato)
router.get('/confirmarContato', indexController.confirmarContato)
router.get('/celulares', indexController.viewCelular);
router.get('/celularesListar', indexController.listarCelulares)


module.exports = router;
