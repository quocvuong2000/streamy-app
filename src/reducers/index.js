import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import StreamsReducer from './streamsReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    Auth: AuthReducer,
    form : formReducer,
    Streams: StreamsReducer
})