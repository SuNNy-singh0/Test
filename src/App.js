
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
function App() {
  const apikey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputcity, setinputcity] = useState("")
  const [data, setdata] = useState(null)
  const city = (cityname) => {
    if (!cityname) return
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apikey
    Axios.get(apiurl).then(res => {
      console.log(res);
      setdata(res.data)
    })
      .catch(err => {
        console.log(err);
        setdata(null)
      })
  }
  useEffect(() => {
    city('delhi')
  }, [])
  const handlechange = (e) => {
    setinputcity(e.target.value)
  }
  const handleclick = () => {
    city(inputcity)
  }
  return (
    <div className="App">
      <div className="main">
        <h1>Wheather App</h1>
        <div className="search">
          <input type="text" placeholder="enter the city" id="searchbox" onChange={handlechange}></input>
          <br></br>
          <button id="btn" onClick={handleclick}>search</button>
        </div>
      </div>
      {data?.name ? (  // Optional chaining to safely access nested properties
        <div className="Resultbox">
          <img className="image" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png" alt='hello'></img>
          <h5 className="city">{data.name}</h5>
          <h5 className="temp">{((data.main?.temp) - 273.5).toFixed(2)}°C</h5>  {/* Also use optional chaining for nested properties */}
        </div>
      ) : (
        <div className="Resultbox">
          <p>No data available</p>
        </div>
      )}
       </div>
     );
   
}

export default App;
