import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "323843512843-lfbcrogrbfdr8lq1gmu2sosapnagl9fi.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.Auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.Auth.isSignedIn.get());
          this.Auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignin) => {
    if(isSignin) {
      this.props.signIn(this.Auth.currentUser.get().getId());
    }else {
      this.props.signOut();
    }
  };

  renderAuth() {
    if (this.props.isSignin === null) return null;
    else if (this.props.isSignin === true)
      return (
        <div>
          <button className="ui red button" onClick={()=> this.Auth.signOut()}>
          <span style={{marginRight:"10px"}}>Sign out</span>
            <i className="google icon"></i>
          </button>
        </div>
      );
    else
      return (
        <div>
          <button className="ui red button" onClick={()=> this.Auth.signIn()}>
            <span style={{marginRight:"10px"}}>Sign in with</span>
            <i className="google icon"></i>
          </button>
        </div>
      );
  }

  render() {
    return <div style={{marginTop:"6px"}}>{this.renderAuth()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignin : state.Auth.isSignin
  }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
