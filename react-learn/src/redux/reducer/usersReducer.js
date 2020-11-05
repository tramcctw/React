import * as users from '../action/usersAction' 

const initialState = {
    isLoading:false,
    datas:[]
}


export default (state=initialState, { type, payload }) => {
    switch (type) {
    case users.ADDUSER:
        return {
            ...state,
            datas:[...state.datas,payload]
        }
    case users.DELETEUSER:
        return{
            ...state,
            datas:state.datas.filter(it=>(it.id !== payload))
        } 
  
    case users.UPDATEUSER:
        return {
            ...state,
            datas:state.datas.map(it=> it.id === payload.id ? {...payload.user} : it)
        }   
    case users.SETUSER:
        return {
            ...state,
            datats:payload
        }
    case users.SETLOADING:
        return {
            ...state,
            isLoading:payload
        }
    default:
        return state
    }
}
