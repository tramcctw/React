import * as actionType from '../action/action-type'

// 约定action {type:'操作类型',payload:"附加数据"}
// 每次增加还是减少 1
/**
 * reducer 本质上就是一个函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要做什么的对象
 */
export default function reducer(state=10,action) {
    // 返回一个新的状态
    if(action.type === actionType.INCREASE){
        return state + 1 
    }else if(action.type === actionType.DECREASE){
        return state - 1
    }else if(action.type === actionType.SET){
        return action.payload
    }
    return state        //既不加也不减
}