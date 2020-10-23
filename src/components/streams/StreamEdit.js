import React from 'react';
import { connect } from 'react-redux';
import { editStream,fetchStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onFormSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,formValues)
    }
    
    render() {
        console.log(this.props);
        return (<div>
            <StreamForm 
            initialValues = {this.props.stream}
            onSubmit={this.onFormSubmit} />
        </div>)
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.Streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);