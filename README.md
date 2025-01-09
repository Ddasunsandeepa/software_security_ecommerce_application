# Secure Food Ordering System
A secure e-commerce platform for food ordering, designed using the MERN stack. This application ensures robust functionality with a strong emphasis on security for three distinct user roles:

Buyers - Browse food items, manage carts, and complete secure payments.
Admins - Manage food inventory, user accounts, and oversee platform security.
Security Engineers - Implement and monitor encryption, multi-factor authentication, and other advanced security measures.

Table of Contents

Features
Demo
Installation
Configuration
Usage
Languages & Tools
Code Formatting Setup
Contributors
License


Features

Node.js - Scalable backend logic.
Express.js - Flexible request and route handling.
Mongoose - Schema-based modeling for MongoDB data.
React - Responsive and reusable UI components.
Redux - Centralized state management.
Redux Thunk - Efficient handling of asynchronous actions.
Multi-Factor Authentication (MFA): Adds an extra layer of login security.
Encryption - Protects sensitive data (e.g., passwords, payment details).

Demo
The application is deployed live! Click here to check it out.

Installation
Follow these steps to set up the project locally:

1. Clone the Repository
bash
Copy code
git clone https://github.com/Ddasunsandeepa/software_security_ecommerce_application.git
cd software_security_ecommerce_application
2. Install Dependencies
Run the following command in the project root to install dependencies for both the client and server:

bash
Copy code
npm install
3. Set Up Environment Variables
Create .env files for both the client and the server based on the provided examples:

Example Frontend .env:
arduino
Copy code
REACT_APP_API_URL=http://localhost:5000
Example Backend .env:
makefile
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
4. Start the Development Server
Run the command below to start both the frontend and backend:

bash
Copy code
npm run dev
Configuration
Ensure the following configurations for seamless development:

MongoDB: Set up a MongoDB instance locally or use a cloud service like MongoDB Atlas.
JWT Secret: Use a strong, secure secret for JSON Web Token authentication in your .env.
API URL: Update the frontend .env to point to your backend server address.
Usage
Buyers: Log in, browse the menu, add items to the cart, and checkout securely.
Admins: Manage food items, users, and review activity logs.
Security Engineers: Access security tools and logs to maintain encryption and MFA configurations.
Languages & Tools
Node.js: Backend runtime environment.
Express.js: Middleware for building robust APIs.
MongoDB: NoSQL database.
React: Component-based front-end framework.
Redux: State management library.
Redux Thunk: Middleware for asynchronous actions in Redux.
Webpack: For bundling and optimizing assets.
Prettier: Code formatter for consistent code style.
Code Formatting Setup
Set up auto-formatting with Prettier for clean, consistent code:

1. Create VSCode Settings
In the project root, create a .vscode directory and add a settings.json file with the following:

json
Copy code
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "prettier.jsxSingleQuote": true,
  "prettier.trailingComma": "none",
  "javascript.preferences.quoteStyle": "single"
}
2. Install Prettier Extension
Install the Prettier - Code formatter extension in VSCode for auto-formatting on save.

Contributors
Your Name
License
This project is licensed under the MIT License. See the LICENSE file for details.

Happy coding! 🚀