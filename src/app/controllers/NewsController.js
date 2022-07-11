const Course = require('../models/Course');
const mongooseUtil = require('../../util/MogooseUtil');
class NewController{
	/**[GET] /news */
	index(req, res, next){

		Course.find({})
			.then(courses =>{
				res.render('client/News', {courses: mongooseUtil.listToObject(courses)})
			})
			.catch(next);
	};

	/**[GET] /news/:slug */
	show(req, res){
		console.log(req);
		res.render('client/Detail');
	}
}

module.exports = new NewController;