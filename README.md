# Secure Food Ordering System🍔

A secure e-commerce platform for food ordering, built with the MERN stack. This application prioritizes security and seamless functionality for three user roles:

👨‍💻 Buyers: Browse food items, manage carts, and complete secure payments.
🛠️ Admins: Manage inventory, user accounts, and oversee platform security.
🛡️ Security Engineers: Implement encryption, MFA, and advanced security measures.

## 📖 Table of Contents

- ✨ Features
- 🌍 Demo
- ⚙️ Installation
- 🔧 Configuration
- 🚀 Usage
- 🛠️ Languages & Tools
- 🎨 Code Formatting Setup
- 🙌 Contributors
- 📜 License

## ✨ Features

🔥 Node.js: Scalable backend logic.
🚀 Express.js: Flexible request and route handling.
📦 Mongoose: Schema-based modeling for MongoDB data.
💻 React: Responsive and reusable UI components.
🌀 Redux: Centralized state management.
🌐 Redux Thunk: Efficient handling of asynchronous actions.
🔑 Multi-Factor Authentication (MFA): Extra secure login.
🛡️ Encryption: Protects sensitive data like passwords and payment details.

Follow these steps to set up the project locally:

1. Clone the Repository

   1. git clone https://github.com/Ddasunsandeepa/software_security_ecommerce_application.git
   2. cd software_security_ecommerce_application
   3. clodinary_Config_Clod_Name = "dxqzjvplk"
   4. clodinary_Config_api_key = "261339675268571"
   5. clodinary_Config_api_secret = "8O3qtB301XjS0DaxDrcywwJKNR8"

2. Install Dependencies
   Run the following command to install dependencies for both the client and server:
   npm install

3. Set Up Environment Variables
   Create .env files for both the client and the server based on the provided examples:

### Example Frontend .env:

REACT_APP_API_URL=http://localhost:3000

### Example Backend .env:

MONGO_URI= "mongodb+srv://ddswilathgamuwa:HqXDuK0hGCMpc6nU
@cluster0.ncyif.mongodb.net/eshop_db?retryWrites=true&w=majority&appName=Cluster0"

✨ npm start

## 🔧 Configuration

1. MongoDB: Use a local instance or MongoDB Atlas.
2. JWT Secret: Ensure a strong JWT_SECRET for authentication in .env.
3. API URL: Update the frontend .env to point to the backend server.

## 🚀 Usage

👩‍🍳 Buyers: Log in, browse menus, and securely checkout.
🛠️ Admins: Manage users, food items, and oversee activities.
🛡️ Security Engineers: Access and manage encryption and MFA tools.

## 🛠️ Languages & Tools

Node.js: Backend runtime environment.
Express.js: Middleware for building robust APIs.
MongoDB: NoSQL database.
React: Component-based front-end framework.
Redux: State management library.
Webpack: Bundling and optimizing assets.
Prettier: Code formatter for consistent styling.

## Secure Food Ordering System API

#### Base URL

Local Development: http://localhost:<PORT>/api/
Replace <PORT> with the port specified in your .env file.

#### Category Endpoints

1. Get All Categories
   GET /api/category
   Fetches a list of all categories.

Response Example,

[
{
"id": "63a0e77652fcd8e1f5a8a9c9",
"name": "Beverages",
"images": ["https://res.cloudinary.com/..."]
}
]

1. Create Category
   POST /api/category/create
   Adds a new category.

Request Body

{
"name": "Snacks",
"description": "Quick bites and snacks",
"images": ["base64-image"],
"color": "#ff5733"
}

Response

json
Copy code
{
"success": true,
"message": "Category created successfully"
}

1. Delete Category
   DELETE /api/category/:id
   Deletes a category by its ID.

### Product Endpoints

1. Get All Products
   GET /api/products
   Fetches all products, with categories populated.

Response Example:

[
{
"id": "63b0e8f85dfdd8e1f6a8b1b3",
"name": "Chocolate Cake",
"price": 10.99,
"category": { "name": "Desserts" }
}
]

1. Create Product
   POST /api/products/create
   Adds a new product.

Request Body:

{
"name": "Burger",
"category": "63a0e77652fcd8e1f5a8a9c9",
"price": 5.99,
"images": ["base64-image"]
}

## External API Integration

### Get Cities in Sri Lanka

POST https://countriesnow.space/api/v0.1/countries

Request Body:

{ "country": "Sri Lanka" }
Response Example:

{ "cities": ["Colombo", "Kandy", "Galle"] }

## Important Notes

1. Ensure valid .env configurations for MongoDB and Cloudinary.
2. All image uploads should be base64-encoded or valid URLs.
3. Use descriptive error handling for better debugging.

## 🎨 Code Formatting Setup

Set up auto-formatting with Prettier for clean, consistent code:

1. VSCode Settings
   In the project root, create a .vscode/settings.json file:

{
"editor.formatOnSave": true,
"prettier.singleQuote": true,
"prettier.arrowParens": "avoid",
"prettier.jsxSingleQuote": true,
"prettier.trailingComma": "none"
} 2. Install Prettier Extension
Install the Prettier - Code formatter extension in VSCode for auto-formatting on save.

## 🙌 Contributors

🧑‍💻 Dasun Sandeepa

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

![Screenshot 2025-01-10 085514](https://github.com/user-attachments/assets/f7277506-6c46-4640-a0c4-ba525edd1a10)
![Screenshot 2025-01-10 085524](https://github.com/user-attachments/assets/b0272acd-d0da-4c5a-a7f2-1ff1098c6444)

### ✨ Happy Coding! 🚀
