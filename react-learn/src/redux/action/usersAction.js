import {getAllStudents} from '../../service/student'

export const ADDUSER = 'add-user'
export const DELETEUSER = 'delete-user'
export const UPDATEUSER = 'update-user'
export const SETUSER = 'set-user'
export const SETLOADING = 'set-loading'

export const addUser = (payload) => ({
    type: ADDUSER,
    payload
})

export const deleteUser = (payload) => ({
    type: DELETEUSER,
    payload
})

export const updateUser = (id,user) => ({
    type: UPDATEUSER,
    payload:{user,id}
})

export const setUser = (payload)=>({
    type:SETUSER,
    payload
})

export const setLoading = (isLoading)=>({
    type:SETLOADING,
    isLoading
})

export const fetchStudent = ()=>{
    // thunk 允许action是一个有副作用的函数
    return async (dispatch,getState,extra)=>{
        console.log(getState());
        console.log(extra);
        dispatch(setLoading(true))
        const users = await getAllStudents()
        dispatch(setUser(users))
        dispatch(setLoading(false))
    }
}


