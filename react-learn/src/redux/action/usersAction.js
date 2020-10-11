export const ADDUSER = 'add-user'
export const DELETEUSER = 'delete-user'
export const UPDATEUSER = 'update-user'

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


