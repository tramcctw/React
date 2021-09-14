export default class ListenManager {
    constructor(){
        this.listeners = [];
    }

    addEventListenner(callback){
        this.listeners.push(callback);
        const unListen = () => {
           const currIndex = this.listeners.indexOf(callback);
            this.listeners.splice(currIndex,1);
        }
        return unListen;
    }

    triggerListennerEvent(location,action){
        this.listeners.forEach(item => {
            item(location,action);
        })
    }
}