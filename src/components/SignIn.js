  import React, {Component} from 'react'
  import firebase from 'firebase'
  import Header from './Header'
  import Home from './Home'
  import logoclimablanco from '../assets/brand/logoclimablanco.png'

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
        <Header
         user={this.state.user}
         onLogin={this.handleLogin}
         startLogout={this.handleLogout}/>
        
        )
      }else {
        return(
          <div className="body-app">
            <div className="form-signin">
              <div className="text-center mb-4">
                <img className="mb-4 img-fluid" src={logoclimablanco} alt="" width="200" height="200"/>
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
