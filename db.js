import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI; // Use the value from the .env file
        if (!dbURI) {
            throw new Error("MongoDB URI is missing!");
        }

        // No deprecated options needed for Mongoose v6+
        await mongoose.connect(dbURI);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;
