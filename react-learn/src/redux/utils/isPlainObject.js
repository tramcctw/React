
export default function (args) {
  if (typeof args !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(args)  === Object.prototype
}