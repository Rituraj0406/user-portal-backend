import mongoose from 'mongoose';
import {DB_NAME} from '../constant.js';

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !!!: ${connectionInstance.connection.host}` );
    } catch (error) {
        console.log('mOngoDb connection failed!!!', error);
        process.exit(1); // its a method which exit the method process
    }
}

export default connectDB;