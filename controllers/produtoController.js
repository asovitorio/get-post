let produtos = [{
        nome: "Maçã",
        preco: 1.88
    },
    {
        nome: "Pera",
        preco: 1.88
    },
    {
        nome: "Uva",
        preco: 1.88
    },
    {
        nome: "Laranja",
        preco: 1.88
    },
    {
        nome: "Mexerica",
        preco: 1.88
    },
    {
        nome: "Banana",
        preco: 1.88
    },
    {
        nome: "Morango",
        preco: 1.88
    }
];

function inserir(produto) {
    return produtos.push(produto);
}

const produtoController = {


    produtoView: (req, res) => {

        res.render('produtos', {
            titulo: "Produtos"
        });

    },

    listarProduto: (req, res) => {
        res.render('produtoListar', {
            produto: produtos,
            titulo: "Produto"
        })
    },

    salvarProduto: (req, res) => {
        let {
            nome,
            preco
        } = req.body;
        inserir({
            nome: nome,
            preco: preco
        });
        console.log(produtos)
        res.redirect('/produto/listar');
    },
    viewAttform: (req, res) => {
        let {
            id
        } = req.params;
        res.render('editProduto', {
           id:id,nome:produtos[id].nome,preco:produtos[id].preco,
            titulo: "Editar Produto"
        })
    },
    editarProduto: (req, res) => {
       let{id,nome,preco} = req.body;
        produtos[id].nome = nome;
        produtos[id].preco= preco
        res.redirect('/produto/listar');
    },
    deletarProduto: (req,res) =>{
        let{id} = req.params;
        // res.send("DEu certo" + id)
        produtos.splice(id,1);
        res.redirect('/produto/listar');
    }




}

module.exports = produtoController;