import mongoose, { ConnectOptions } from 'mongoose';


interface connectedOptions extends ConnectOptions {
}

const options: connectedOptions = {
    serverSelectionTimeoutMS: 10000 // Increase timeout to 30 seconds
};

// connecting to database
const connectToDB = async () => {
    const connectionUrl: string = process.env.MONGODB_URI as string;
    if (mongoose.connection.readyState === 1) {
        // If already connected, don't connect again
        console.log('Already connected to MongoDB');
    } else {
        try {
            mongoose.connect(connectionUrl!,options);
            const connection = mongoose.connection;
    
            connection.on('connected', () => {
                console.log('MongoDB connected successfully');
            })
    
            connection.on('error', (err) => {
                console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
                process.exit();
            })
    
        } catch (error) {
            console.log('Something goes wrong!');
            console.log(error);
            
        }
    }
};

export default connectToDB;   