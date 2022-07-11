const express = require('express');
const path = require('path');
const config = require('./src/config/App');
const mongoose = require('mongoose');
const {engine} = require('express-handlebars');
const route = require('./src/routes/IndexRoutes');
const app = express();

/**Configure Mogodb */
mongoose.connect(config.db.host+config.db.name,{useNewUrlParser:true})
	.then(res=>{
		console.log('MongoDb Connected Successfully');
	}).catch(err=>{console.log('Database connection failed')});

/**Configure express */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**Configure static file */
app.use('/static', express.static(path.join(__dirname, 'public')));

/**Configure handlebars */
app.engine('hbs', engine({extname:'hbs', defaultLayout:'Main'}));
app.set('view engine', 'hbs');
app.set('views','src/app/views');

/**Configure Routes */
route(app);

app.listen(config.port,()=>{
	console.log(`Server is running on port ${config.port}`);
});

