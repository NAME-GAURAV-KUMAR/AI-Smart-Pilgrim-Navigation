import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

function RouteForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [route, setRoute] = useState([]);

  const getRoute = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/route`,
        {
          params: {
            source,
            destination
          }
        }
      );

      setRoute(response.data.route || []);
    } catch (error) {
      console.error("Route Error:", error);
      alert("Unable to fetch route");
    }
  };

  return (
    <div>
      <h2>Route Planner</h2>

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
      >
        <option value="">Select Source</option>
        <option value="Railway Station">
          Railway Station
        </option>
        <option value="Road A">
          Road A
        </option>
        <option value="Road B">
          Road B
        </option>
      </select>

      <br /><br />

      <select
        value={destination}
        onChange={(e) =>
          setDestination(e.target.value)
        }
      >
        <option value="">Select Destination</option>
        <option value="Sangam">
          Sangam
        </option>
      </select>

      <br /><br />

      <button onClick={getRoute}>
        Find Route
      </button>

      <h3>
        {route.length > 0
          ? route.join(" ➜ ")
          : ""}
      </h3>
    </div>
  );
}

export default RouteForm;