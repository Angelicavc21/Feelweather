import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(  
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));


 firebase.auth().onAuthStateChanged((user) => {
  if (user) {   store.dispatch(login(user.uid));}
}); 

