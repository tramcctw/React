
// block 只能监听一次
export default class BlockManager {

    constructor(getUserConfirmation){
        this.getUserConfirmation = getUserConfirmation;
        this.prompt = null;
    }

    addBlockEvents = (callback) => {
        this.prompt = callback;
        const unBlock = () => {
            this.prompt = null;
        }
        return unBlock;
    }

    triggerBlockEvents = (location, action, jumpPage) => {
        if(!this.prompt){
            jumpPage(true);
            return;
        }
        if(typeof this.prompt === 'string'){
            this.getUserConfirmation(this.prompt, jumpPage)
            return;
        }
        const msg = this.prompt(location,action);
        this.getUserConfirmation(msg, jumpPage);
    }

}