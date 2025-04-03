# Profile Management App

## 📌 Overview
The **Profile Management App** is a full-stack web application designed to manage user profiles efficiently. Users can create, edit, delete, and filter profiles, including adding location data. The app features a responsive UI, state management, and secure authentication.

## 🚀 Features
- ✅ **Add Profiles** - Create user profiles with name, description, image, latitude, and longitude.
- ✅ **Edit Profiles** - Modify existing profiles via an intuitive interface.
- ✅ **Delete Profiles** - Remove profiles when needed.
- ✅ **Admin Dashboard** - Secure management panel for administrators.
- ✅ **Geolocation Support** - Manual latitude and longitude input for accurate location tracking.
- ✅ **State Management** - Uses Zustand/Redux for efficient profile handling.
- ✅ **Responsive UI** - Fully mobile-friendly with a modern design.
- ✅ **Secure Authentication** - JWT-based authentication for secure user sessions.
- ✅ **Search & Filter** - Quickly find profiles with search and filter options.

---

## 🛠️ Tech Stack
| Component       | Technology Used                  |
|----------------|----------------------------------|
| **Frontend**   | React, React Router, Zustand, Tailwind CSS |
| **Backend**    | Node.js, Express, MongoDB        |
| **Authentication** | JWT Authentication               |
| **State Management** | Zustand/Redux                |
| **Deployment** | Vercel (Frontend), Render (Backend) |
| **Version Control** | Git & GitHub                   |

---

## 📂 Project Folder Structure
```
my-app/  
│── public/                  # Static assets (images, icons)  
│── src/  
│   ├── assets/              # Images, icons, and static files  
│   │   ├── images/  
│   │   ├── icons/  
│   ├── components/          # Reusable UI components  
│   │   ├── AdminPanel.jsx  
│   │   ├── Navbar.jsx  
│   │   ├── ProfileCard.jsx  
│   │   ├── ProfileFilter.jsx  
│   │   ├── ProfileForm.jsx  
│   │   ├── ProfileList.jsx  
│   │   ├── UI/              # Buttons, Modals, Inputs  
│   ├── data/                # Local JSON or API data  
│   │   ├── profiles.js  
│   ├── hooks/               # Custom React hooks  
│   │   ├── useFetchProfiles.js  
│   ├── pages/               # Page components  
│   │   ├── Home.jsx  
│   │   ├── AdminDashboard.jsx  
│   │   ├── ProfileDetails.jsx  
│   ├── services/            # API functions  
│   │   ├── profileService.js  
│   ├── store/               # Zustand or Redux state  
│   │   ├── profileStore.js  
│   ├── utils/               # Helper functions  
│   │   ├── formatDate.js  
│   ├── styles/              # CSS/Tailwind styles  
│   │   ├── App.css  
│   ├── App.jsx              # Main React App  
│   ├── index.js             # Root entry point  
│── .gitignore               # Git ignored files  
│── index.html               # Main HTML file  
│── package.json             # Dependencies  
│── tailwind.config.js       # Tailwind configuration  
│── README.md                # Documentation  
```

---

## ⚙️ Installation & Setup
### **Clone the Repository**
```bash
   git clone https://github.com/KrishChouhan486/Profile-Management-App.git
   cd Profile-Management-App
```

### **Install Dependencies**
**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### **Environment Setup**
Create a `.env` file in the **backend** folder with the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 🚀 Running the Application
### **Start Backend Server**
```bash
cd backend
npm start
```

### **Start Frontend Application**
```bash
cd frontend
npm start
```

🔗 **The application will be available at:**
```bash
http://localhost:3000/
```

---

## 🔬 How It Works
1. **Admin logs in** to manage profiles.
2. **Adds or edits user profiles** with name, image, and location.
3. **Stores profiles securely in the database**.
4. **Provides geolocation support** for latitude and longitude input.
5. **Enables users to delete unwanted profiles**.
6. **Implements search and filter functionality** for quick access.

---

## 📡 Deployment
- **Frontend (Vercel)**: `https://your-frontend.vercel.app`
- **Backend (Render)**: `https://your-backend.render.com`
- **GitHub Repository**: [Profile Management App](https://github.com/KrishChouhan486/Profile-Management-App)

---

## 💡 Future Enhancements
- 🚀 **Role-based access control** (Admins & Users)
- 🚀 **Advanced search and filtering**
- 🚀 **Profile image cropping and enhancement**
- 🚀 **Improved UI with animations**
- 🚀 **Multi-language support**

---

## 🤝 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📸 Screenshots
![Screenshot 1](https://github.com/KrishChouhan486/Bynry-Task/blob/21d9649c905aefb18e21fbfc827dbd968aee97cb/Screenshot%202025-04-03%20111924.png)
![Screenshot 2](https://github.com/KrishChouhan486/Bynry-Task/blob/21d9649c905aefb18e21fbfc827dbd968aee97cb/Screenshot%202025-04-03%20111935.png)
![Screenshot 3](https://github.com/KrishChouhan486/Bynry-Task/blob/21d9649c905aefb18e21fbfc827dbd968aee97cb/Screenshot%202025-04-03%20111948.png)
![Screenshot 4](https://github.com/KrishChouhan486/Bynry-Task/blob/21d9649c905aefb18e21fbfc827dbd968aee97cb/Screenshot%202025-04-03%20112004.png)

---

## 📄 License
This project is open-source and available under the MIT License.

---

## 📞 Contact
📧 **Krish Chouhan**  
📞 **9691264709**  
🔗 **LinkedIn:** [www.linkedin.com/in/krishchouhan](https://www.linkedin.com/in/krishchouhan)

