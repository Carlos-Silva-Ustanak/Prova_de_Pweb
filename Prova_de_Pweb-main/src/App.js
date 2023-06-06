import React, { useState } from "react";
import axios from "axios";


function App() {

  const [Data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt_br&appid=f03349471e16b3172c93ae29225e1bcb`

  const Searchlocation = (event)=>{
if(event.key === 'Enter'){
  axios.get(url).then((response)=>{
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
    }
}


  return (
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event =>setLocation(event.target.value)}
        onKeyPress={Searchlocation}
        placeholder='Inserir localização'
         type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{Data.name}</p>
          </div>
          <div className="temp">
            {Data.main ? <h1>{Data.main.temp.toFixed()}°C</h1>: null}
          </div>
          <div className="description">
           {Data.weather ? <p className="bold">{Data.weather[0].main}</p>: null}
          </div>
        </div>
       
          {Data.name != undefined &&
           <div className="bottom">
           <div className="feels">
           {Data.main ? <p className="bold">{Data.main.feels_like.toFixed()}°C</p>: null}
             <p>Sensação</p>
           </div>
           <div className="humidty">
               {Data.main ? <p className="bold">{Data.main.humidity}%</p>: null}
               <p>Humidade</p>
           </div>
           <div className="wind">
             {Data.wind ? <p>{Data.wind.speed.toFixed()} Km/h</p>: null}
             <p>Vento</p>
           </div>
         </div>}

      </div>
    </div>
  );
}

export default App;
