import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import CrowdMap from "./components/CrowdMap";
import RouteForm from "./components/RouteForm";
import ParkingCard from "./components/ParkingCard";
import ChatAssistant from "./components/ChatAssistant";
import DashboardCards from "./components/DashboardCards";
import TrafficChart from "./components/TrafficChart";

import "./App.css";

function App() {
  const [vehicleCount, setVehicleCount] = useState("");
  const [crowdCount, setCrowdCount] = useState("");
  const [hour, setHour] = useState("");
  const [result, setResult] = useState("");

  const predictTraffic = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        {
          vehicle_count: Number(vehicleCount),
          crowd_count: Number(crowdCount),
          hour: Number(hour),
        }
      );

      setResult(response.data.congestion);
    } catch (error) {
      console.error(error);
      alert("Backend not running!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        {/* LEFT PANEL */}
        <div className="card">

          <h2>🚦 Traffic Congestion Prediction</h2>

          <input
            type="number"
            placeholder="Vehicle Count"
            value={vehicleCount}
            onChange={(e) => setVehicleCount(e.target.value)}
          />

          <br /><br />

          <input
            type="number"
            placeholder="Crowd Count"
            value={crowdCount}
            onChange={(e) => setCrowdCount(e.target.value)}
          />

          <br /><br />

          <input
            type="number"
            placeholder="Hour (0-23)"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />

          <br /><br />

          <button
            className="primary-btn"
            onClick={predictTraffic}
          >
            Predict Congestion
          </button>

          <br /><br />

          {result && (
            <div className="prediction-result">
              <h3>Predicted Congestion</h3>
              <h2>{result}</h2>
            </div>
          )}
        </div>

        {/* CENTER PANEL */}
        <div className="card">
          <CrowdMap />
        </div>

        {/* RIGHT PANEL */}
        <div className="card">
          <ParkingCard />
        </div>

      </div>

      {/* SECOND ROW */}

      <div className="bottom-section">

        <div className="card">
          <RouteForm />
        </div>

        <div className="card">
          <ChatAssistant />
        </div>

        <DashboardCards />

      </div>

      {/* THIRD ROW */}

      <div className="chart-section">

        <TrafficChart />

      </div>

    </>
  );
}

export default App;