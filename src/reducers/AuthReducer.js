const INIT_STATE = {
    isSignin: null,
    userId: null
}

export default (state = INIT_STATE , action) => {
    switch (action.type) {
        case "SIGN_IN" : {
            return {...state, isSignin : true , userId : action.payload};
        }
        case "SIGN_OUT" : {
            return {...state, isSignin : false, userId : null};
        }
        default :{
            return state;
        }
    }
}