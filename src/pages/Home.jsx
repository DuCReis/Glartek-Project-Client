import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Error from "../components/Error";

function Home() {
  const [backendData, setBackendData] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api");
        const data = await response.json();

        setBackendData(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container mt-3">
      {typeof backendData[0].cod === "undefined" ? (
        <div>
          {error && (
            <Error message={error.message || "An unknown error occurred."} />
          )}
        </div>
      ) : (
        <div className="row align-items-start">
          {backendData.map((key, i) => (
            <Card
              key={backendData[i].city.name}
              data={{
                cityName: backendData[i].city.name,
                temperature: backendData[i].list[0].main.temp,
                icon: backendData[i].list[0].weather[0].icon,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
