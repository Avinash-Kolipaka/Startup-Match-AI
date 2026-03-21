const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
    try {
        let uri = process.env.MONGO_URI;
        
        // If on Render but no cloud URI is provided, use in-memory DB so the server doesn't crash
        if (process.env.RENDER && (!uri || uri.includes('localhost'))) {
            console.log("Starting in-memory MongoDB because no cloud DB was provided on Render...");
            const mongoServer = await MongoMemoryServer.create();
            uri = mongoServer.getUri();
            
            // Set a fallback JWT secret if missing so auth doesn't crash
            if (!process.env.JWT_SECRET) {
                process.env.JWT_SECRET = 'fallback_secret_for_render_2026';
            }
        }
        
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;