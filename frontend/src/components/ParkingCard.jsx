import { useEffect, useState } from "react";
import axios from "axios";

function ParkingCard() {

  const [parking, setParking] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/parking")
      .then((res) => {
        setParking(res.data);
      });

  }, []);

  return (
    <div>

      <h2>Parking Status</h2>

      {parking.map((lot) => (

        <div key={lot.id}>

          <h3>{lot.id}</h3>

          <p>
            Capacity: {lot.capacity}
          </p>

          <p>
            Occupied: {lot.occupied}
          </p>

        </div>

      ))}

    </div>
  );
}

export default ParkingCard;