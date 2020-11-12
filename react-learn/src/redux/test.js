import store from './index'
import * as users from './action/usersAction'
import { increase,decrease,asyncDecrease,asyncIncrease, autoIncrease, stopIncrease} from './action/counter'



// store.dispatch(asyncIncrease())
// store.dispatch(asyncDecrease())
// store.dispatch(asyncDecrease())
// store.dispatch(users.setLoading(true))
// store.dispatch(users.fetchStudents());
window.autoIncrease = function () {
    store.dispatch(autoIncrease())
}

window.stopIncrease = function () {
    store.dispatch(stopIncrease())
}

// console.log(store.getState())