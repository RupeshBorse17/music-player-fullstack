# 🎵 BeatStream – Full Stack Music Player

A modern **full-stack music streaming application** built using the **MERN Stack**. BeatStream enables users to discover music, search songs, manage favorites, and enjoy a seamless audio playback experience with secure authentication.

---

## 🚀 Features

### 🎧 Music Player
- Play, pause, next, and previous controls
- Shuffle and loop playback
- Volume control and playback speed adjustment
- Audio progress tracking with seek functionality

### 🔍 Song Discovery
- Search songs by tags
- Browse dynamically generated playlists
- Real-time search with debouncing
- Integration with the **Jamendo Music API**

### ❤️ Favorites
- Add or remove songs from favorites
- Persistent favorites stored in MongoDB
- Personalized music library for every user

### 🔐 Authentication
- User Signup & Login
- JWT-based Authentication
- Protected API Routes
- Forgot Password via Email
- Secure Password Reset
- Profile Update with Avatar Upload

### 📱 User Experience
- Responsive UI
- Fast API communication using Axios
- Redux Toolkit for authentication state management
- Custom React Hook for audio player logic

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Redux Toolkit
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router

## Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Nodemailer

## Database
- MongoDB
- Mongoose

## Cloud Services
- ImageKit (Avatar Uploads)
- Mailtrap (Email Testing)
- Jamendo Music API

## Tools
- Git
- GitHub
- Postman
- VS Code

---

# 📂 Project Structure

```
BeatStream/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── hooks/
│   ├── css/
│   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── README.md
└── package.json
```

---

# 🔑 Key Functionalities

- JWT Authentication
- Protected Routes
- Music Search
- Playlist Management
- Favorite Songs
- Password Reset
- Profile Management
- Image Upload
- RESTful APIs
- Custom Audio Player

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/RupeshBorse17/music-player-fullstack.git
```

## Navigate to the project

```bash
cd music-player-fullstack
```

## Install Frontend

```bash
cd client
npm install
npm run dev
```

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=

MAILTRAP_HOST=
MAILTRAP_PORT=
MAILTRAP_USER=
MAILTRAP_PASSWORD=

IMAGEKIT_PUBLICKEY=
IMAGEKIT_PRIVATEKEY=
IMAGEKIT_URLENDPOINT=

FRONTEND_URL=
```

---

# 📸 Screenshots

> Add screenshots of:
- Home Page
- Music Player
- Search
- Login
- Signup
- Favorites
- Profile

---

# 👨‍💻 Author

**Rupesh Borse**

GitHub: https://github.com/RupeshBorse17

LinkedIn: *(Add your LinkedIn URL here)*

Email: rupeshborse2005@gmail.com

---

## ⭐ If you found this project useful, don't forget to give it a Star!
