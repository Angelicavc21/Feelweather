import React from 'react';

const Login =({signInGoogle})=>{


  return (
    <a href="" className="btn btn-light" onClick={signInGoogle}>Login with Google</a>
  )
}
const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({

})

export default connect(mapStateToProps,mapDispatchToProps) (Login);

