import Streams from '../apis/streamApi';
import history from '../history';

export const signIn =(userId) => {
    return {
        type: "SIGN_IN",
        payload : userId
    }
}

export const signOut =() => {
    return {
        type: "SIGN_OUT"
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().Auth;
    const response  = await Streams.post("/streams",{...formValues,userId});

    return dispatch({ type:"CREATE_STREAM", payload: response.data } ,history.push("/") );
    
}

export const fetchStream = (id) => async dispatch => {
    const response  = await Streams.get(`/streams/${id}`);

    return dispatch({ type:"FETCH_STREAM", payload: response.data })
}

export const fetchStreams = () => async dispatch => {
    const response  = await Streams.get("/streams");

    return dispatch({ type:"FETCH_STREAMS", payload: response.data })
}

export const editStream = (id,formValues) => async dispatch => {
    const response  = await Streams.put(`/streams/${id}`,formValues);

    return dispatch({ type:"EDIT_STREAM", payload: response.data },history.push("/") )
}
export const deleteStream = (id) => async dispatch => {
    await  Streams.delete(`/streams/${id}`);
    return dispatch({ type:"DELETE_STREAM", payload: id },history.push("/"))
}