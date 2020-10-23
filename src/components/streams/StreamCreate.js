import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {
  
  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
       <StreamForm onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}



const mapStatetoProps = (state) => {
  return {
    userId : state.Auth.userId
  }
};

export default connect(mapStatetoProps, { createStream })(StreamCreate);
