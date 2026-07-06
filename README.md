# DocuZen

docuzen is a powerful tool that allows developers to manage their API documentation effortlessly. With features like login, registration, and AI-powered document creation, you can easily generate, update, and manage your API docs.

## Features

- **User Authentication**
  - **Login:** Securely log in to your account using your credentials.
  - **Register:** Create a new account to start managing your API documentation.

- **AI-Powered Document Creation**
  - **Create API Documentation:** Utilize AI to automatically generate comprehensive documentation for your API code, saving time and ensuring consistency.

## Getting Started

### Prerequisites

- Node.js 
- NPM or Yarn
- MongoDB 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/docuzen.git
   ```
   
2. Navigate to the project frontend directory:
   ```bash
   cd docuzen/frontend
   ```
   
3. Install the dependencies:
   ```bash
   npm install
    ```
   or
   ```bash
   yarn install
    ```
   
4. Navigate to backend directory
   ```bash
   cd docuzen/backend
   ```

5. Install the dependencies:
     ```bash
   npm install
    ```
   or
   ```bash
   yarn install
    ```

6. Set up your environment variables:
- Rename a .env-sample file to .env in the backend directory
- Change the following variables
    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    GOOGLE_API_KEY=your_ai_api_key
    GOOGLE_AUTH_CLIENT_ID=your_auth_key
    GOOGLE_AUTH_CLIENT_SECRET=your_auth_key
    ```

7. Start backend Server:
   ```bash
   cd docuzen/backend
   node index.js
   ```
   
8. Start frontend Server:
    ```bash
    cd docuzen/frontend
    npm run dev
    ```


# Usage
- Login/Register:

    - Access the login or register page to authenticate yourself.
    - Once logged in, you can start creating or managing your API documentation.
    
- Create API Documentation:

    - Use the AI-powered tool to generate documentation from your API code.
    - The AI will analyze your code and create detailed documentation, including endpoint descriptions, parameters, and response formats.


# Contributing
We welcome contributions! Please fork the repository and submit a pull request.


# License
This project is licensed under the MIT License - see the LICENSE file for details.

```bash
Feel free to customize the details as needed, such as the installation steps, project description, or any additional sections you want to include.
```
