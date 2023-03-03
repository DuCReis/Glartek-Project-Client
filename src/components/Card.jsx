import React from "react";

function Card({data}) {
  return (
    <div className="card mb-2 ms-1 me-1 col-sm">
      <div className="card-body">
        <h2 className="card-text">
          {Math.round(data.temperature - 273.15)} ºC
        </h2>
        <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt=""/>
      </div>
      <div className="card-body">
        <p>{data.cityName}</p>
        
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Card;
