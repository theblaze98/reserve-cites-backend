import { connect } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/reserve-cites-app';

(async () => {
    try {
        const db = await connect(MONGO_URI);
		console.log(`Connected to database ${db.connection.name}`);
    } catch (error: any) {
        throw new Error(`Connection wiht the database failed: ${error.message}`)
    }
})()
