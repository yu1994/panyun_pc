export function deg (num) {
  const step = 300;
  const deg = 5.5;
  const center = 5500;
  if (num == center){
    return 0
  } else
    return ((num - center)/step*deg)
}
export function getRequest() {
  const url = location.search
  const theRequest = new Object()
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
