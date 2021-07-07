import searchCondition from "./searchCondition"
import searchResult from "./searchResult"
import { combineReducers } from "../../../redux/combinReducers"

export default combineReducers({
    condition: searchCondition,
    result: searchResult
})