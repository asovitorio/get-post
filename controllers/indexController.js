const listaClular = require('../models/bdCelulares')


const indexController = {

    home: (req, res) => {

        res.render("index", {
            title: 'Sistema Alessandro'
        });
    },
    viewContato: (req, res) => {

        let {
            nome,
            idade
        } = req.query;
        res.render('contato', {
            title: 'Contato',
            nome: nome,
            idade: idade
        });
        // res.send(`Olá ${nome}! sua idade é de ${idade} anos`);
    },
    confirmarContato: (req, res) => {

        let {
            nome,
            email
        } = req.query;

        res.send(`Nome: ${nome} <br> Email: ${email}`)
    },

    viewCelular: (req, res) => {
        res.render('celulares', {
            title: "Celulares"
        })

    },

    listarCelulares: (req, res) => {
        let lista = listaClular;
        let {
            max
        } = req.query;
       
    
                const list = lista.filter(res =>{
                    return res.preco >= max;
                });

      res.render('celularesListar',{celulares:list,titulo:"Lista de Celular"})
      
    }
}

module.exports = indexController;