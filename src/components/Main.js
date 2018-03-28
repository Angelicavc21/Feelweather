import React, {Component} from 'react';
import fetch from 'fetch-with-proxy';
import cloudy from '../assets/icons/cloudy.png';
import ReactHover from 'react-hover'
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: -600
}

class Main extends React.Component {
    constructor(props) {
    super(props)
    this.state = { temperatura: '',
                    humedad:'' ,
                    Uv :'',
                    icon:''
                  }
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
    function (position){  
        let lat = position.coords.latitude;    
        let lng =  position.coords.longitude; 
        console.log(lat)
      }) 
        /*const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ef053d30e83f21037db223112b6728ed/-12.168251699999999,-77.0046148?lang=es'*/
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ef053d30e83f21037db223112b6728ed/-12.168251699999999,-77.0046148?lang=es`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ temperatura: data.currently.temperature,
                         humedad : data.currently.humidity, 
                         Uv: data.currently.uvIndex,
                         icon:'https://sasgspe.blob.core.windows.net/images/'+data.currently.icon+'.png'                                 
                      })
        console.log(data.currently)
      })
   }
  render() {
          return (
        <div className="container wheather">
        <div className=" text-center">
          <div className="text-center icon-msj">
            <img src={this.state.icon} alt="icon"/>
            <h5> Tendrás un poco de calor, rehidrátate</h5>
          </div>        
          <h2>{((this.state.temperatura- 32) * 5 / 9).toFixed(2)}<span>°</span></h2>
          <div className="text-left offset-2 col-8 offset-md-5 col-md-3">
          <p><span>Humedad: </span> {(this.state.humedad)*100}<span>%</span></p>
          <ReactHover>
              <ReactHover.Trigger type='trigger'>
              <p><span>Indice UV : </span> <span style={{...(this.state.Uv < 3 ? {background:'rgb(72, 242, 29)',padding:'0px 10px'} : {background:'red',padding:'0px 10px'})}}>{(this.state.Uv)}</span></p>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover'>
                <div className=" text-center">
                  <div className="triangulo"></div>
                  <div className=" uv-hover text-center">
                  <p style={{width:'200px',color:'black',fontWeight:'700'}}>Riesgo mínimo</p>
                  </div>
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
        </div>
        </div>
      )
  }
}

export default Main
