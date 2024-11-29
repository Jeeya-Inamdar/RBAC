
# 🛡️ RBAC (Role-Based Access Control) App

A **Role-Based Access Control (RBAC)** system built with Node.js, Express, and MongoDB to manage user roles, permissions, and secure access to APIs.

---

## 🚀 Features
- 👤 **User Management**: Register and login users with roles like `admin`, `user`, or `moderator`.
- 🔑 **Authentication & Authorization**: Secured with JWT.
- 📜 **CRUD Operations**: Create, read, and delete posts with role-based access.
- ✅ **Role-Based Testing**: Endpoint access varies based on roles.

---

## 📂 Folder Structure
```bash
RBAC
├── backend/
│   ├── models/       # Database models (User, Role, etc.)
│   ├── routes/       # API routes (User, Auth, Posts)
│   ├── controllers/  # Logic for each route
│   ├── middleware/   # Auth and role-check middleware
│   ├── utils/        # Utility functions
│   ├── .env          # Environment variables
│   └── server.js     # Main entry point
└── README.md         # Project documentation
```

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Atlas)  
- **Authentication**: JSON Web Tokens (JWT)  
- **Environment Variables**: dotenv  

---

## ⚡ Getting Started

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/your-username/rbac.git
```

### 2️⃣ Install dependencies:
```bash
cd backend
npm install
```

### 3️⃣ Configure environment variables:
Create a `.env` file in the `backend` directory:
```env
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

### 4️⃣ Run the server:
```bash
npm start
```
The server will run at `http://localhost:3000`.

---

## 📮 API Endpoints

### User Routes
- **Register a user**  
  `POST /api/user/auth/sign-up`  
  Example body:  
  ```json
  {
    "firstName": "Alex",
    "lastName": "Volkov",
    "email": "alex@gmail.com",
    "password": "password123",
    "role": "admin"
  }
  ```

- **Login a user**  
  `POST /api/user/auth/sign-in`  
  Example body:  
  ```json
  {
    "email": "alex@gmail.com",
    "password": "password123"
  }
  ```

### Post Routes
- **Create a post**  
  `POST /api/posts`  
  Example body:  
  ```json
  {
    "title": "My Second Post",
    "content": "This is the content of my second post.",
    "user": "Jeeya"
  }
  ```

- **Get all posts**  
  `GET /api/posts`

- **Delete many posts**  
  `DELETE /api/posts`
  
---

## 👨‍💻 Testing the Endpoints

### Role-based Access Tests
- **Access-User**
  - **Method**: GET
  - **URL**: `{{URL}}/api/user/test/access-user`

- **All-access**
  - **Method**: GET
  - **URL**: `{{URL}}/api/user/test/all-access`

- **Access-admin**
  - **Method**: GET
  - **URL**: `{{URL}}/api/user/test/access-admin`
  - **Header**:
    ```json
    {
      "key": "authorization",
      "value": "Bearer <token>",
      "type": "text"
    }
    ```

- **Access-Moderator**
  - **Method**: GET
  - **URL**: `{{URL}}/api/user/test/access-moderator`
  - **Header**:
    ```json
    {
      "key": "authorization",
      "value": "Bearer <token>",
      "type": "text"
    }
    ```

## Usage

1. Import the collection into Postman.
2. Set the `{{URL}}` environment variable to the base URL of your API.
3. Use the endpoints to interact with the RBAC API.

