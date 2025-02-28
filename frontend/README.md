# Frontend - SENSE

## Overview

The frontend of the SENSE application is built using **React Native**. It provides the user interface for reporting and viewing incidents on an interactive map, handling user interactions and communicating with the backend API.

## Features

- **Cross-Platform Mobile Application:** Works on both iOS and Android devices.
- **Interactive UI:** Developed with React Native components.
- **API Integration:** Fetches and sends data to the backend for real-time incident reporting.
- **User Authentication:** Supports secure user login and registration through the backend.

## Getting Started

### Prerequisites

- **Node.js:** v12 or higher
- **npm** or **yarn**
- **React Native CLI** (if not using Expo)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/AngelSayz/SENSE.git
Navigate to the Frontend Directory:

bash
Copiar
Editar
cd SENSE/frontend
Install Dependencies:

bash
Copiar
Editar
npm install
# or
yarn install
Running the Application
For Android:

bash
Copiar
Editar
npx react-native run-android
For iOS:

bash
Copiar
Editar
npx react-native run-ios
Folder Structure
bash
Copiar
Editar
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── screens/       # Application screens
│   ├── services/      # API service integration
│   └── assets/        # Images, fonts, and static resources
└── App.js             # Application entry point
Environment Variables
If needed, create a .env file in the frontend directory to store environment-specific variables, such as the API endpoint.

Contributing
Contributions are welcome! Please fork the repository, create your feature branch, and submit a pull request.

License
This project is licensed under the MIT License.
