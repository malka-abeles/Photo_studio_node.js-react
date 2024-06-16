import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  const mongoDB = process.env.MONGODB_URI || "mongodb://localhost:27017/Photo_studio";
  
  try {
    await mongoose.connect(mongoDB);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    throw error;
  }
};
