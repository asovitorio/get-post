const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let usuariosJson = path.join('\models', 'usuarios.json')


const usuarioController = {
   listar: (req, res) => {
      // res.send("deu Certo");
      res.render("listaUsuario", {
         titulo: "Lista de Usuarios"
      })
   },
   cadastrar: (req, res) => {
      // res.send("deu Certo");

      res.render("usuario", {
         titulo: "Cadastro de Usuarios"
      })
   },

   salvarCadastro: (req, res) => {
      // res.send("deu Certo");
      let {
         nome,
         email,
         senha,

      } = req.body;
      let {
         files
      } = req;
      let senhaC = bcrypt.hashSync(senha, 10);
      console.log(req.body);
      console.log(req);
      let usuario = {
         nome: nome,
         email: email,
         senha: senhaC,
         foto: files[0].originalname
      };
      let listaUsusario = JSON.parse(fs.readFileSync(usuariosJson, {
         encoding: 'utf-8'
      }));
      listaUsusario.push(usuario);
      fs.writeFileSync(usuariosJson, JSON.stringify(listaUsusario));
      res.render('login', {
         titulo: "login"
      });

   },
   login: (req, res) => {
      // res.send("deu Certo");
      res.render("login", {
         titulo: "Login"
      });
   },
   logar: (req, res) => {
      let {
         email,
         senha
      } = req.body;
      let usuarioSalvo = fs.readFileSync(usuariosJson, {
         encoding: 'utf-8'
      });
      user = JSON.parse(usuarioSalvo);
      let cont = 0;
      let logar = false

      let logando = () => {
         for (let usuario of user) {
            if (email == usuario.email && bcrypt.compareSync(senha, usuario.senha) == true) {
               return res.render('listaUsuario', {
                  usuarios: user,
                  titulo: "Lista de usuarios"
               });

            }
         }
         return false;
      }

      console.log(logando());




   }

}


module.exports = usuarioController

// const bcrypt = require("bcrypt");

// let hash = bcrypt.hashSync("ale1228579",10)
// console.log(hash)