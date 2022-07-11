const newsRouter = require('./NewsRoutes');


function route(app){
	app.use('/news', newsRouter);
}

module.exports = route;