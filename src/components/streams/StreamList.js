import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id} style={{background: "#fff",
          borderRadius: "15px",
          padding: "10px 10px"}}>
          <div className="right floated content">
            {this.renderDeleteAndEdit(stream)}
          </div>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
           <Link to={`streams/${stream.id}`}><h3 style={{marginBottom:"0"}}>{stream.title}</h3></Link> 
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderDeleteAndEdit = (stream) => {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
          <Link to={`/streams/${stream.id}`} className="ui button purple">Live!</Link>
        </div>
        
      )
    }
  }

  renderCreateStream ()  {
    if(this.props.isSignedIn) {
      return (
        <div style={{textAlign : "right"}}>
          <Link to={`/streams/create`} className="ui button primary">Create new stream</Link>
        </div>
      )
    }
  }

  render() {
    return(
    <div style={{background: "#7884c147",
      padding: "20px 20px 0px 20px",
      borderRadius: "41px",
      height:"600px"}}>
      <h2>ALL STREAMS</h2>
      <div className="ui celled list">{this.renderList()}</div>
      {this.renderCreateStream()}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.Streams),
    currentUserId: state.Auth.userId,
    isSignedIn: state.Auth.isSignin
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
