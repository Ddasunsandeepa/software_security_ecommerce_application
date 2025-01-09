<span style="font-family: Arial, sans-serif; color: #2D89EF;">Secure Food Ordering System</span> 🍔
A secure e-commerce platform for food ordering, built with the MERN stack. This application prioritizes security and seamless functionality for three user roles:

👨‍💻 Buyers: Browse food items, manage carts, and complete secure payments.
🛠️ Admins: Manage inventory, user accounts, and oversee platform security.
🛡️ Security Engineers: Implement encryption, MFA, and advanced security measures.
📖 Table of Contents
✨ Features
🌍 Demo
⚙️ Installation
🔧 Configuration
🚀 Usage
🛠️ Languages & Tools
🎨 Code Formatting Setup
🙌 Contributors
📜 License
✨ Features
🔥 Node.js: Scalable backend logic.
🚀 Express.js: Flexible request and route handling.
📦 Mongoose: Schema-based modeling for MongoDB data.
💻 React: Responsive and reusable UI components.
🌀 Redux: Centralized state management.
🌐 Redux Thunk: Efficient handling of asynchronous actions.
🔑 Multi-Factor Authentication (MFA): Extra secure login.
🛡️ Encryption: Protects sensitive data like passwords and payment details.
🌍 Demo
This application is deployed live! Check it out here 🎉

⚙️ Installation
Follow these steps to set up the project locally:

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/Ddasunsandeepa/software_security_ecommerce_application.git
   cd software_security_ecommerce_application
2. Install Dependencies
   Run the following command to install dependencies for both the client and server:

bash
Copy code
npm install 3. Set Up Environment Variables
Create .env files for both the client and the server based on the provided examples:

Example Frontend .env:
arduino
Copy code
REACT_APP_API_URL=http://localhost:5000
Example Backend .env:
makefile
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret 4. Start the Development Server
bash
Copy code
npm run dev
🔧 Configuration
MongoDB: Use a local instance or MongoDB Atlas.
JWT Secret: Ensure a strong JWT_SECRET for authentication in .env.
API URL: Update the frontend .env to point to the backend server.
🚀 Usage
👩‍🍳 Buyers: Log in, browse menus, and securely checkout.
🛠️ Admins: Manage users, food items, and oversee activities.
🛡️ Security Engineers: Access and manage encryption and MFA tools.
🛠️ Languages & Tools
Node.js: Backend runtime environment.
Express.js: Middleware for building robust APIs.
MongoDB: NoSQL database.
React: Component-based front-end framework.
Redux: State management library.
Webpack: Bundling and optimizing assets.
Prettier: Code formatter for consistent styling.
🎨 Code Formatting Setup
Set up auto-formatting with Prettier for clean, consistent code:

1. VSCode Settings
   In the project root, create a .vscode/settings.json file:

json
Copy code
{
"editor.formatOnSave": true,
"prettier.singleQuote": true,
"prettier.arrowParens": "avoid",
"prettier.jsxSingleQuote": true,
"prettier.trailingComma": "none"
} 2. Install Prettier Extension
Install the Prettier - Code formatter extension in VSCode for auto-formatting on save.

🙌 Contributors
🧑‍💻 Your Name
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

✨ Happy Coding! 🚀
