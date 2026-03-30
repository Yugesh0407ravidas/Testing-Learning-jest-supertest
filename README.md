# 🧪 Express Validation Testing API

A lightweight Node.js project built to learn and implement request validation using **Express.js** and **express-validator**.
This project demonstrates how to validate user input and handle errors cleanly.

---

## 🚀 Features

✅ Input Validation using express-validator
📦 Clean Middleware Structure
⚡ Fast Express Server
🧪 Test-ready Architecture
📡 REST API Endpoint

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* express-validator

---

## 📁 Project Structure

```id="f0k3d2"
src/
│── middleware/
│   └── validation.middleware.js
│
│── test/
│   └── app.test.js
│
│── app.js
│── server.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```id="d9k2l1"
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

---

### 2. Install dependencies

```id="x7m8n2"
npm install
```

---

### 3. Run the server

```id="q3w4e5"
npm run dev
```

Server will run at:
👉 http://localhost:3000

---

## 📌 API Endpoint

### 🔹 Register User

**POST** `/register`

#### Request Body:

```id="a8b7c6"
{
  "username": "yugesh",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## ❌ Validation Rules

* Username must be a string
* Username length: 3–20 characters
* Email must be valid
* Password must be at least 6 characters

---

## ✅ Success Response

```id="m1n2b3"
{
  "message": "User registered successfully",
  "user": {
    "username": "yugesh",
    "email": "test@gmail.com"
  }
}
```

---

## ⚠️ Error Response

```id="z9y8x7"
{
  "errors": [
    {
      "msg": "Invalid email address",
      "param": "email"
    }
  ]
}
```

---

## 🧠 Learning Goals

* Understand middleware in Express
* Learn request validation flow
* Handle errors properly
* Structure scalable backend code

---

## 🔮 Future Improvements

* 🧪 Add unit tests (Jest / Supertest)
* 🔐 Add authentication (JWT)
* 📊 Add logging & debugging tools

---

## 👨‍💻 Author

**Yugesh Ravidas**

---

## ⭐ Support

If you found this useful, give it a ⭐ on GitHub!
