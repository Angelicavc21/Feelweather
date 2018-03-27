import{firebase, googleAuthProvider} from './firebase';

export const login =({uid})=>({
  type:'LOGIN',
  uid
});

export const startLogin = ()=>{
  /* return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }; */
  const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  /* return dispatch=>{
    return firebase.auth().signInWithPopup(googleAuthProvider);
      return firebase.auth().signInWithPopup(googleAuthProvider)
           .then(result=>console.log(`${result.user.email} ha iniciado sesión`))
           .catch(error => console.log(`Error ${error.code}: ${error.message}`)); */
  
};
export const logout=()=>({
  type: 'LOGOUT'
});

export const startLogout = ()=>{
  return() =>{
    return firebase.auth().signOut();
  }
}