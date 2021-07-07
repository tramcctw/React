
import students from "./student"
import counter from "./counter"
import { combineReducers } from "../../redux/combinReducers"


export default combineReducers({
    students,
    counter
})