import React from "react";
import Modal from "../../modal";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions/index";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderTitle = () => {
        if(!this.props.stream) {
            return <h4>Are you sure you want to delete this stream?</h4>;
        }

        return (<h4>Are you sure you want to delete "{this.props.stream.title}" stream?</h4>)
    }

  render() {
    return (
        <Modal 
        title= {this.renderTitle()}
        onSubmit={()=> {this.props.deleteStream(this.props.match.params.id)}}
        />
    );
  }
}

const mapStateToProps = (state,ownProps) => {
    console.log(state);
    return {
        stream: state.Streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
