import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions';

const Login =(props)=>(
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <input type="button" value="Login with Google" onClick={props.login} />
      </div>
    </div>
  </div> 
)
const mapStateToProps=({state})=>({

})

const mapDispatchToProps=(dispatch)=>({
  login:()=>(startLogin())
});

export default connect(null,mapDispatchToProps)(Login);

