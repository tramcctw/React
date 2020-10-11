import * as users from '../action/usersAction' 
const initialState = [
    {id:1,name:"用户1"},
    {id:2,name:'用户2'}
]
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case users.ADDUSER:
        return [...state,payload]
    case users.DELETEUSER:
        return state.filter(it=>(it.id !== payload))
    case users.UPDATEUSER:
        return state.map(it=> it.id === payload.id ? {...payload.user} : it)
    default:
        return state
    }
}
