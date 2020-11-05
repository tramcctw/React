import * as loginUser from '../action/loginUserAction' 

const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case loginUser.LOGINUSERS:
        return payload
    default:
        return state
    }
}
