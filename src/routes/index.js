

function route(app) {


     //[GET] /
    app.get('/', (req, res, next) => {
        res.render('main/home');
    });
}

module.exports = route;
