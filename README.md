# Echo App Backend

## Description
Echo is a versatile chat and payment app that combines secure messaging, financial transactions, and advanced privacy features. This backend repository provides the necessary APIs and real-time communication support for the Echo app.

## Features
- User registration and login
- Real-time messaging using Socket.IO
- Secure transaction handling
- Advanced privacy settings for users
- Swagger documentation for easy API reference

## Getting Started

### Prerequisites
- Node.js
- MongoDB (local or remote instance, e.g., MongoDB Atlas)
- Any other specific dependencies or services used in the project

### Installation
1. Clone the repository:
git clone https://github.com/your-username/echo-app-backend.git

2. Navigate to the project directory:
cd echo-app-backend

3. Install dependencies:
npm install


### Configuration
Create a `.env` file in the project root with the following contents:
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000

Replace `your_mongodb_uri` and `your_jwt_secret` with your actual MongoDB URI and JWT secret.

### Running the Server
Start the server by running:
node server.js

The server will start on `http://localhost:3000`.

### API Documentation
Access the Swagger API documentation at `http://localhost:3000/api-docs` for a detailed overview of the API endpoints and their usage.

## Testing
To test the API endpoints, use API testing tools like Postman. Import the Postman collection provided in the repository (if available) or manually configure the requests according to the Swagger documentation.

## Authors
- Your Name - Initial work - [Mouhamd Ali Chahine](https://github.com/your-username)
