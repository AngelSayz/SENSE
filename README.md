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

   ```bash
   git clone https://github.com/AngelSayz/SENSE.git
   cd SENSE
