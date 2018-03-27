const reducer= (state={
  user:null
},action)=>{
  switch (action.type){
    case 'LOGIN_IN':
    return{
      ...state,
      user:'logueado'
    }
    default:
      return state;
  }
}
export default reducer;