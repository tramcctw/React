import store from './index'
import * as users from './action/usersAction'


store.dispatch(users.fetchStudent())





// console.log(store.getState())