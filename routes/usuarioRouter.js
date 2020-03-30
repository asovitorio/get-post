var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
var usuarioController = require('../controllers/usuarioController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
       
      cb(null, file.originalname)
    }
  });

var upload = multer({ storage: storage });

router.get('/',usuarioController.listar);
router.get('/cadastrar',usuarioController.cadastrar);
router.post('/cadastrar',upload.any(),usuarioController.salvarCadastro);
router.get('/login',usuarioController.login);
router.post('/login',usuarioController.logar);



module.exports = router