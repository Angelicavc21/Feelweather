  import React, {Component} from 'react'
  import firebase from 'firebase'
  import Header from './Header'
  import logoclimablanco from '../assets/brand/logoclimablanco.png'
  import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
  import '../style/main.css'
  import Home from './Home'
  import About from './About'

  class SignIn extends Component{
    constructor(){
      super()
      this.handleLogin=this.handleLogin.bind(this);
      this.handleLogout=this.handleLogout.bind(this);
    }
    state={
      user:null
    }

    componentWillMount (){
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user })
      })
      //firebase.database().ref('clima').on('child_addedd',snapshot =>)
    }

    handleLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout(){
      firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }
    renderSignInBtn(){
      if(this.state.user){
        return(
          <div>
            <Header
         user={this.state.user}
         onLogin={this.handleLogin}
         startLogout={this.handleLogout}/> 
          <Router>
    <div className="list">
      <ul className="route container-fluid">
        <li  className=" col-5 text-center">
          <NavLink activeStyle = {{borderBottom : ' 3px solid rgb(255, 205, 0)'}}  className="" to="/reto-clima">AHORA</NavLink>
        </li>
        <li className="col-5 text-center">
          <NavLink activeStyle = {{borderBottom : ' 3px solid rgb(255, 205, 0)'}} to="/diario">DIARIO</NavLink>
        </li>
      </ul>
    <hr />
      <Route exact path="/reto-clima" component={Home} />
      <Route path="/diario" component={About} />
    </div>
  </Router>
          </div>
                
        )
      }else {
        return(
          <div className="body-app">
            <div className="form-signin">
              <div className="text-center mb-4">
                <img className="mb-4 img-fluid" src={logoclimablanco} alt="" width="200" height="200"/>
              </div>
              <div className="text-center mb-4">
                <button className="btn-register" value="Inicia sesión con"onClick={this.handleLogin}>
              Registrate con <span className="fab fa-google"></span>
                </button>
              </div> 
              <div className="text-center mb-4">
                <button className="btnsign" value="Inicia sesión con"onClick={this.handleLogin}>
              Inicia sesión con <span className="fab fa-google"></span>
                </button>
              </div> 
            </div>
          </div>      
        )
      }
    }
    render(){
      return(
        <div>
          {this.renderSignInBtn()}
        </div>   
      )
    }
  }

  export default SignIn;
