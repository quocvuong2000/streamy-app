import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";
import flv from 'flv.js';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
}

componentDidUpdate() {
    this.buildPlayer();
}

componentWillUnmount() {
    this.player.destroy();
}

buildPlayer() {
    if(!this.props.stream || this.player) {
        return null;
    }
    this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load(); 
}

  renderWarning() {
    return (
      <div className="ui warning message">
        <div className="header">Streaming tool!</div>
        you need streaming tool to go livestream such as "Open Broadcaster Software"
      </div>
    );
  }

  render() {
    if (!this.props.stream) {
      return (
        <div className="ui segment" style={{ width: "80%" , height:"500px"}}>
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.renderWarning()}
        <video ref={this.videoRef} style={{ width: "70%" }} controls />
        <h2>{this.props.stream.title}</h2>
        <h4>{this.props.stream.description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.Streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
