module.exports = function (application) {
    application.post('/produtos/create', function (req, res) {
        application.app.controllers.produtos.create(application, req, res);
    });

    application.get('/produtos', function (req, res) {
        application.app.controllers.produtos.produtos(application, req, res);
    });
    application.delete('/produtos', function (req, res) {
        id = req.body.id;
        application.app.controllers.produtos.delete(application, req, res,id);
    });
    application.put('/produtos', function (req, res) {
        id = req.body.id;
        application.app.controllers.produtos.update(application, req, res,id);
    });
}