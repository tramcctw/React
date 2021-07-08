export const actionTypes = {
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading"),
    fetchStudents: Symbol("fetchStudents")
}

export function fetchStudents(){
    return {
        type: actionTypes.fetchStudents
    }
}


export function setStudentsAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}
