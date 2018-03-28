  import React, {Component} from 'react'
  import firebase from 'firebase'
  import Header from './Header'
  import Home from './Home'


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
         startLogout={this.handleLogout}/>
        
        )
      }else {
        return(<div className="col-lg-12 text-cente">
        <input type="button" value="Login with Googlre" onClick={this.handleLogin} />
      </div>)
      }
    }
    render(){
      return(
        <div className="container">
    <div className="row">
    {this.renderSignInBtn()}
      
    </div>
  </div> 
      )
    }
  }

  export default SignIn;
