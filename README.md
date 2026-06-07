# 🚦 AI Smart Pilgrim Navigation

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask-000000?logo=flask)
![Python](https://img.shields.io/badge/Python-3.11-yellow?logo=python)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

AI Smart Pilgrim Navigation is an intelligent transportation and mobility management platform designed for large-scale events such as **Mahakumbh**. The system leverages **Machine Learning**, **Route Optimization**, **Interactive Maps**, and **Generative AI** to provide real-time traffic insights, parking recommendations, route guidance, and commuter assistance.

---

## 🎯 Problem Statement

Mahakumbh involves the movement of millions of pilgrims through roads, railways, buses, parking areas, and pedestrian pathways. Efficient transportation planning is essential to:

* Reduce congestion
* Improve mobility
* Optimize parking allocation
* Provide intelligent route guidance
* Enhance pilgrim safety

This project addresses these challenges through AI-powered transportation management.

---

## ✨ Features

### 🚦 Traffic Congestion Prediction

Predicts congestion levels using Machine Learning based on:

* Vehicle Count
* Crowd Count
* Hour of the Day

Outputs:

* Low Congestion
* Medium Congestion
* High Congestion

---

### 🗺️ Interactive Traffic Map

* OpenStreetMap Integration
* Live Location Visualization
* Crowd Monitoring Interface
* Interactive Navigation Support

---

### 🛣️ Smart Route Planner

Uses NetworkX graph algorithms to:

* Find shortest routes
* Optimize travel paths
* Reduce congestion
* Improve travel efficiency

---

### 🅿️ Smart Parking Management

Displays:

* Parking Capacity
* Occupied Spaces
* Available Slots

Helps pilgrims select the least crowded parking area.

---

### 🤖 AI Travel Assistant

Powered by Google Gemini AI.

Users can ask:

* How do I reach Sangam?
* Which parking area is best?
* Which route has minimum congestion?
* What is the fastest route available?

---

### 📊 Analytics Dashboard

Provides transportation insights including:

* Congestion Level
* Parking Usage
* Average Travel Time
* Estimated Pilgrim Count

---

### 📈 Traffic Trends Visualization

Interactive charts displaying:

* Traffic intensity
* Peak travel hours
* Congestion forecasts

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
          │
          ▼
     REST APIs
          │
          ▼
    Flask Backend
          │
 ┌────────┼────────┐
 ▼        ▼        ▼
ML Model  Gemini   Route Engine
          AI      (NetworkX)
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Leaflet
* Recharts
* React Icons

### Backend

* Flask
* Flask-CORS
* Python

### Machine Learning

* Scikit-learn
* Pandas
* NumPy

### AI Integration

* Google Gemini API

### Route Optimization

* NetworkX

### Maps

* OpenStreetMap
* Leaflet

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
AI-Smart-Pilgrim-Navigation
│
├── backend/
│   ├── utils/
│   │
│   ├── app.py
│   ├── chatbot.py
│   ├── generate_data.py
│   ├── parking_data.py
│   ├── route_engine.py
│   ├── traffic_model.pkl
│   ├── traffic.csv
│   └── train_model.py
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── ChatAssistant.jsx
│   │   │   ├── CrowdMap.jsx
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParkingCard.jsx
│   │   │   ├── RouteForm.jsx
│   │   │   └── TrafficChart.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.css
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/NAME-GAURAV-KUMAR/AI-Smart-Pilgrim-Navigation.git

cd AI-Smart-Pilgrim-Navigation
```

---

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📸 Screenshots

### Dashboard

```text
Add screenshot here:
screenshots/dashboard.png
```

### Route Planner

```text
Add screenshot here:
screenshots/route-planner.png
```

### AI Assistant

```text
Add screenshot here:
screenshots/ai-assistant.png
```

---

## 🔮 Future Enhancements

* Real-time Traffic APIs
* GPS-Based Tracking
* Heatmap Visualization
* Emergency Route Guidance
* Dynamic Parking Allocation
* Mobile Application
* Smart Crowd Management

---

## 🏆 Hackathon Impact

This project directly addresses:

✅ Transportation Planning

✅ Traffic Management

✅ Route Optimization

✅ Parking Allocation

✅ Crowd Management

✅ AI-Powered Commuter Guidance

making it a practical smart-city solution for large-scale events such as Mahakumbh.

---

## 👨‍💻 Developer

### Gaurav Kumar

🎓 B.Tech CSE, VIT Bhopal University

🔗 GitHub:
https://github.com/NAME-GAURAV-KUMAR

🔗 LinkedIn:
https://www.linkedin.com/in/gaurav-kumar-96655b28a/

---

## ⭐ Support

If you found this project useful, please consider giving it a **Star ⭐** on GitHub.

It helps support the project and motivates future development.
