
function getRandomString() {
  return Math.random().toString(36).substr(2);
}

export default {
  init() {
    return {
      type:`@@init${getRandomString()}`
    }  
  }
}