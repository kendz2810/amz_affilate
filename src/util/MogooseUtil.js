class MogooseUtil{
	listToObject(mongooses){
		return mongooses.map(mongoose => mongoose.toObject());
	}
	oneToObject(mogoose){
		return mogoose ? mogoose.toObject() : mogoose;
	}
}
module.exports = new MogooseUtil;