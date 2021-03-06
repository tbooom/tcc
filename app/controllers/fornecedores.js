module.exports.create = function(application, req, res)
{
    var dadosform = req.body;
    console.log('\nreq.body: '+dadosform.nome);

    // req.assert('nome', 'O Campo de nome não pode ser vazio').notEmpty();
    // req.assert('categoria','A Identificação do produto nao pode ser vazio').notEmpty();
    // req.assert('preco_venda','O valor de venda não pode ser vazio').notEmpty()
    // req.assert('preco_venda','O valor de venda deve ser um numero').isDecimal();
    // req.assert('preco_venda','O valor deve ser menor que 12 digitos').isByteLength(1,11);
    req.assert('Email_fornecedor','O EMAIL não pode ser vazio').notEmpty();
    req.assert('Email_fornecedor','Email inválido').isEmail();
    req.assert('nome_fornecedor','O nome é obrigatório').notEmpty();
    
    req.assert('','')
    req.assert('','')
    req.assert('','')
    req.assert('','')
    req.assert('','')
    req.assert('','')
    req.assert('','')
    req.assert('','')
    req.assert('','')
    
    var erros = req.validationErrors();
    console.log(erros);
    if(erros)
    {
        res.status(500).send(erros);
       
    }
    else{
        console.log('-------------\nFornecedor.create \n'+dadosform.nome +'\n' + dadosform.categoria +'\n'+ dadosform.preco_venda+'\n'+dadosform.unidade_produto+ '\n-------------');
        var connection = application.config.dbConnection;
        var FornecedoresDAO = new application.app.models.FornecedoresDAO(connection);
        FornecedoresDAO.create(dadosform,req, res);
        

        //res.send('cadastrado com sucesso'+'\n'+ dadosform.nome+ '\n' + dadosform.categoria+ '\n' + dadosform.preco_venda);
    }
    
}
module.exports.produtos = function (application, req, res) {
    // var connection = dbConnection();
    // connection.query('select * from Usuario', function (err, result) {
    //   console.log(result);
    //  });
    console.log('-----------\nchegou na autenticação Fornecedor.show \n' +'Sua sessão está marcada como: ' + req.session.autorizado+'\n--------');
    var connection = application.config.dbConnection;
        var FornecedoresDAO = new application.app.models.FornecedoresDAO(connection);
        FornecedoresDAO.show(req, res);
}
module.exports.delete = function(application, req, res, id)
{
    console.log('-----------\nchegou na autenticação Fornecedor.delete \n' +'Sua sessão está marcada como: ' + req.session.autorizado+'\n--------');
    var connection = application.config.dbConnection;
        var ProduFornecedoresDAOtosDAO = new application.app.models.FornecedoresDAO(connection);
        FornecedoresDAO.delete(req, res, id);
}
module.exports.update = function(application, req, res, id)
{
    console.log('-----------\nchegou na autenticação Fornecedor.update \n' +'Sua sessão está marcada como: ' + req.session.autorizado+'\n--------');
    var connection = application.config.dbConnection;
        var FornecedoresDAO = new application.app.models.FornecedoresDAO(connection);
        FornecedoresDAO.update(req, res, id);
}