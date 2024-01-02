import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.PASSWORD;

const Connection = async () => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-zex0216-shard-00-00.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-01.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-02.lr90jd5.mongodb.net:27017/googleclone?ssl=true&replicaSet=atlas-6cplmm-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true})
        console.log('Database connected successfully');
    }catch(error){
        console.log('error while connenting with the database', error.message);
    }
};

export default Connection;