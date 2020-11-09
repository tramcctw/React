import loginUserReduer from './loginUserReducer'
import usersReducer from './usersReducer'
import counterReducer from "./counterReducer";
import {combineReducers} from 'redux'


// export default function reducer(state = {},action) {
//   // 这里的state表示的是仓库里面的状态
//     const newState = {
//         longinUser:loginUserReduer(state.longinUser,action),
//         users:usersReducer(state.users,action)
//     }
//     // console.log(newState.longinUser);
//     return newState
// }

export default combineReducers({
    loginUser:loginUserReduer,
    users:usersReducer,
    counter:counterReducer
})