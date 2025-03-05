# SENSE Project Setup Guide

This guide will help you set up the SENSE project on your local machine.

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Initial Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/AngelSayz/SENSE.git
   cd SENSE
   ```

2. **Backend Setup:**
   ```
   cd backend
   npm install
   ```

3. **Frontend Setup:**
   ```
   cd ../frontend/Sense
   npm install
   ```

4. **Environment Configuration:**
   The `.env` file has been created in the backend directory with the following configuration:
   ```
   # MongoDB Connection String
   MONGO_URI=mongodb://localhost:27017/sense_db

   # Server Port
   PORT=5000

   # JWT Secret for Authentication
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   ```

   **Note:** You should modify the `MONGO_URI` if you're using MongoDB Atlas or a different local MongoDB configuration.

## Running the Application

1. **Start the Backend:**
   ```
   cd backend
   npm run dev
   ```
   This will start the Node.js server with nodemon for auto-reloading.

2. **Start the Frontend:**
   ```
   cd ../frontend/Sense
   npm start
   ```
   For mobile development, you may need to set up additional tools:
   - For Android: `npm run android`
   - For iOS: `npm run ios` (requires macOS)

## Project Structure

- **Backend:** Node.js server with Express, MongoDB
- **Frontend:** React Native mobile application

## Next Steps

1. Set up your MongoDB database (local or Atlas)
2. Modify the `.env` file with your specific configuration
3. Start developing your features! 