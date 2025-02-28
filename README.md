# SENSE

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node-%3E=12.0.0-brightgreen.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-green.svg)](https://www.mongodb.com/)
[![React Native](https://img.shields.io/badge/React_Native-0.64-blue.svg)](https://reactnative.dev/)

Sense is a hybrid mobile application designed to keep communities informed about incidents in their surroundings. The app allows users to report and view accidents, thefts, lost items, missing pets, missing persons, and other relevant events on an interactive map.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Real-time Incident Reporting:**  
  Users can report accidents, thefts, and other incidents in real-time.

- **Interactive Map:**  
  Incidents are displayed on an interactive map with filters for type, date, and proximity.

- **Community Interaction:**  
  Users can comment on reports, mark incidents as resolved or false, and engage with their community.

- **Cross-Platform:**  
  Built with React Native, ensuring a seamless experience on both iOS and Android devices.

- **Secure & Scalable:**  
  Implements JWT authentication, data encryption, and a robust architecture designed for future scalability.

---

## Architecture

This project uses a **monorepo** structure that contains both the **frontend** and the **backend**:

- **Frontend:**  
  Developed using React Native, it handles the UI, user interactions, and API requests.

- **Backend:**  
  Built with Node.js and MongoDB, it manages the business logic, data storage, and integrates third-party services like Mapbox, Google OAuth, and News API.

---

## Getting Started

### Prerequisites

- **Node.js:** v12 or higher  
- **MongoDB:** Either installed locally ([MongoDB Community Server](https://www.mongodb.com/try/download/community)) or using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based development  
- **Git:** For version control

### Installation

1. **Clone the Repository:**

   
bash
   git clone https://github.com/AngelSayz/SENSE.git
   cd SENSE
   Setup Environment Variables:

Create a .env file in the backend directory with your MongoDB connection string and other configuration details:

env
Copiar
Editar
MONGO_URI=mongodb://localhost:27017/sense_db
PORT=3000
JWT_SECRET=your_jwt_secret
Install Dependencies:

For the backend:

bash
Copiar
Editar
cd backend
npm install
For the frontend:

bash
Copiar
Editar
cd ../frontend
npm install
Running the Application
Backend:

In the backend directory, start the server. Using nodemon is recommended for development:

bash
Copiar
Editar
npm run dev
Frontend:

In the frontend directory, launch the React Native app:

bash
Copiar
Editar
npx react-native run-android
# or for iOS:
npx react-native run-ios
Project Structure
A typical structure for this monorepo might look like:

plaintext
Copiar
Editar
SENSE/
├── backend/                # Node.js server and API
│   ├── controllers/        # Business logic and controllers
│   ├── models/             # Mongoose models for MongoDB
│   ├── routes/             # API routes
│   ├── config/             # Database connection and configuration
│   ├── .env                # Environment variables (not tracked)
│   └── app.js              # Main server file
├── frontend/               # React Native mobile application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── screens/        # Application screens
│   │   ├── services/       # API service integration
│   │   └── assets/         # Images, fonts, etc.
│   └── App.js              # Entry point for React Native
├── .gitignore              # Excludes node_modules, .env, etc.
└── README.md               # This file
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create your feature branch:

bash
Copiar
Editar
git checkout -b feature/YourFeature
Commit your changes with descriptive messages:

bash
Copiar
Editar
git commit -m 'Add some feature'
Push your branch:

bash
Copiar
Editar
git push origin feature/YourFeature
Open a Pull Request for review.

For detailed contribution guidelines, please see CONTRIBUTING.md.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions, suggestions, or collaboration, please reach out:

Project Manager: Mayo Ramos Angel David
Backend/Database Developer: Alvarez Galido Aldo Yamil
Frontend/Designer: Muñoz Reynoso Oscar Gael
