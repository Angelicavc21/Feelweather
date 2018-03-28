import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
import {firebase} from './firebase';
import {login} from './actions';

ReactDOM.render(  
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));


 firebase.auth().onAuthStateChanged((user) => {
  if (user) {   store.dispatch(login(user.uid));}
}); 

