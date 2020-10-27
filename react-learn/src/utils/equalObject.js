export default function equalObject(prevObj,nextObj){
    for(let prop in prevObj){
        if(!Object.is(prevObj[prop],nextObj[prop])){
            return false
        }
    }
    return true
}