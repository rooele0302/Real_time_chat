# Real-Time Chat Application  
A simple real-time chat application built using Node.js, Express.js, and Socket.io. This project enables real-time messaging between multiple users in a browser-based interface.

## 🚀 Features
- Real-time messaging using Socket.io
- Web-based chat interface
- Broadcast messages to all connected users
- Lightweight and easy to set up

## 🛠 Tech Stack
- Backend: Node.js, Express.js, Socket.io  
- Frontend: HTML, CSS, JavaScript  

## 📂 Project Structure
```
/chat-app
│── /public            # Frontend files (HTML, CSS, JS)
│── server.js          # Main backend file
│── package.json       # Dependencies and scripts
│── README.md          # Documentation
```

## 🚀 Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/rooele0302/Real_time_chat
cd Real_time_chat
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
node server.js
```
or use Nodemon for development:
```bash
npx nodemon server.js
```

### 4. Open the Application
Go to `http://localhost:8000/` in your browser.

## 📜 How It Works
1. A user opens the chat application in their browser.
2. They enter a message in the input field and click Send.
3. The message is sent to the server via Socket.io.
4. The server broadcasts the message to all connected users.
5. All users see the new message in real-time.

## ✨ Future Improvements
- Store messages in a database (MongoDB)
- Add user authentication
- Deploy on AWS
- Add support for private messages

## 📄 License
MIT License  
