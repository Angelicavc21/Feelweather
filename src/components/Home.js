import React from 'react'
import SelectBar from './Select-bar'
import Main from './Main'
import Header from './Header'

const Home =({user,onLogin,startLogout})=>(
  <div>
  {/*  <Header 
      user={user}
      onLogin={onLogin}
      startLogout={startLogout}/>  */}
   <SelectBar/>
   <Main/>
  </div>
)
export default Home