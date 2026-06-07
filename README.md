# 🚦 AI Smart Pilgrim Navigation

### Smart Transportation & Mobility Management System for Mahakumbh

AI Smart Pilgrim Navigation is an intelligent transportation and crowd management platform designed to improve mobility during large-scale events such as Mahakumbh. The system leverages Machine Learning, Route Optimization, Real-Time Analytics, Interactive Maps, and Generative AI to provide seamless navigation, traffic prediction, parking recommendations, and commuter assistance.

---

## 🎯 Problem Statement

Mahakumbh witnesses millions of pilgrims traveling through roads, railways, buses, parking zones, and pedestrian pathways. Managing transportation efficiently is critical to reduce congestion, improve safety, and enhance the overall pilgrim experience.

This project provides:

* Intelligent traffic congestion prediction
* Smart route optimization
* Parking occupancy monitoring
* AI-powered travel assistance
* Interactive mobility dashboard
* Data-driven transportation insights

---

## ✨ Features

### 🚦 Traffic Congestion Prediction

Predicts congestion levels using Machine Learning based on:

* Vehicle Count
* Crowd Count
* Time of Day

Outputs:

* Low
* Medium
* High Congestion

---

### 🗺️ Interactive Traffic Map

Provides:

* Real-time visualization of important locations
* Interactive navigation using OpenStreetMap
* Mobility monitoring dashboard

---

### 🛣️ Smart Route Planner

Uses Graph Theory and NetworkX to:

* Find shortest paths
* Suggest optimized travel routes
* Reduce travel time and congestion

---

### 🅿️ Smart Parking Management

Displays:

* Parking Capacity
* Occupied Slots
* Available Parking Spaces

Helps users choose less crowded parking areas.

---

### 🤖 AI Travel Assistant

Powered by Google Gemini AI.

Users can ask:

* How do I reach Sangam?
* Which parking area is best?
* Which route has minimum congestion?
* What is the safest route for pilgrims?

The AI provides contextual transportation guidance.

---

### 📊 Analytics Dashboard

Provides key transportation metrics:

* Congestion Level
* Parking Usage
* Average Travel Time
* Estimated Pilgrim Count

---

### 📈 Traffic Trends Visualization

Visual representation of:

* Traffic intensity
* Peak hours
* Congestion forecasting

using interactive charts.

---

## 🏗️ System Architecture

Frontend (React + Vite)
↓
REST APIs
↓
Backend (Flask)
↓
Machine Learning Model
↓
Route Optimization Engine (NetworkX)
↓
Google Gemini AI

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

AI-Smart-Pilgrim-Navigation/

├── backend/
│   ├── app.py
│   ├── chatbot.py
│   ├── route_engine.py
│   ├── traffic_model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   └── package.json
│
└── README.md

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/NAME-GAURAV-KUMAR/AI-Smart-Pilgrim-Navigation.git

cd AI-Smart-Pilgrim-Navigation
```

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

## 🔮 Future Enhancements

* Real-time traffic APIs
* Live GPS tracking
* Emergency response recommendations
* Heatmap-based crowd visualization
* Dynamic parking allocation
* Mobile application
* Predictive congestion forecasting

---

## 🏆 Hackathon Impact

This solution directly addresses:

✅ Transportation Planning

✅ Traffic Management

✅ Route Optimization

✅ Parking Allocation

✅ Crowd Management

✅ Intelligent Commuter Guidance

making it a practical smart-city solution for large-scale events such as Mahakumbh.

---

## 👨‍💻 Developer

**Gaurav Kumar**

B.Tech CSE, VIT Bhopal University

GitHub:
https://github.com/NAME-GAURAV-KUMAR

LinkedIn:
https://www.linkedin.com/in/gaurav-kumar-96655b28a/

---

### ⭐ If you found this project useful, consider giving it a star on GitHub!
