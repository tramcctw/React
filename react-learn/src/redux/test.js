import store from './index'
import * as users from './action/usersAction'
import { increase,decrease,asyncDecrease,asyncIncrease} from './action/counter'



store.dispatch(asyncIncrease())



// console.log(store.getState())