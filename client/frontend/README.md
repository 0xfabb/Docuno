# DocuSense Frontend

## 🚀 Overview
DocuSense is an AI-powered predictive healthcare platform designed to help patients and doctors manage medical records efficiently. The frontend is built using **React.js** with a focus on a seamless user experience.

## 🛠 Tech Stack
- **React.js** – Frontend framework
- **Tailwind CSS** – Styling
- **React Router** – Navigation
- **Axios** – API requests
- **Recharts** – Data visualization (charts for health stats)
- **Firebase/Auth0** – Authentication (optional)

## 📂 Folder Structure
```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # App pages (Dashboard, Profile, Reports)
│   ├── services/    # API calls
│   ├── utils/       # Helper functions
│   ├── App.js       # Main app component
│   ├── index.js     # Entry point
│   └── styles/      # Custom styles
└── package.json     # Dependencies and scripts
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/DocuSense.git
cd DocuSense/client
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm start
```
> The app will run at `http://localhost:3000/`

## 🚀 Features
✅ **User Authentication** – Secure login and signup 
✅ **Dashboard** – View patient history, reports, and AI insights 
✅ **AI-Powered Research** – Summarized research based on medical data 
✅ **Charts & Reports** – Visual representation of vitals (BP, sugar levels) 
✅ **Doctor's Portal** – Easy access to patient records & recommendations 

## 🔄 API Integration
Make sure the backend is running before fetching data. Update API endpoints in `services/api.js`.

Example API call:
```js
import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const fetchPatientData = async (patientId) => {
  const response = await axios.get(`${API_URL}/patients/${patientId}`);
  return response.data;
};
```

## 🏗️ To-Do
- [ ] Implement authentication (Google OAuth/Auth0)
- [ ] Add mobile responsiveness
- [ ] Improve AI research section UI

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit changes (`git commit -m 'Added feature X'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License. 

---
💡 **Need help?** Open an issue or reach out! 🚀