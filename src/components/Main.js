import React from 'react';
import fetch from 'fetch-with-proxy';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = { temperatura: '',
                    humedad: '' ,
                    Uv :''              
                  }
  }
  componentWillMount() {
    var lat, lng;
    navigator.geolocation.getCurrentPosition(handle_geolocation_query);  
    function handle_geolocation_query(position){  
        lat = position.coords.latitude;    
        lng =  position.coords.longitude; 
        console.log(lat)
    } 
        const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ef053d30e83f21037db223112b6728ed/-12.168251699999999,-77.0046148?lang=es'
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ temperatura: data.currently.temperature,
                         humedad : data.currently.humidity, 
                         Uv: data.currently.uvIndex                                 
                      })
        console.log(data.currently)
      })
    }
  render() {
          return (
        <div className="container">
          <div  />
          <p>{((this.state.temperatura- 32) * 5 / 9).toFixed(2)}<span>°</span></p>
        </div>
      )
  }
}

export default Main
