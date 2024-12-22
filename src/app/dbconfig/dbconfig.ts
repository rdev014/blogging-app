import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('Connected',()=>{
            console.log('MongoDB Connected Successfully');
         })
         connection.on('error',(error)=>{
            console.log('MongoDb Not Connection Failed', +error);
           process.exit();
            
         }) 
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
        
        
    }
    
}