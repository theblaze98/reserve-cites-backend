import { Schema, model } from 'mongoose';

const CiteSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
	fecha: {
		type: String,
		trim: true,
		required: true,
	},
	hora: {
		type: String,
		trim: true,
		required: true,
		unique: true,
	},
});

export default model('cites', CiteSchema);
