
export function getRem(pwidth, prem) {
  const html = document.getElementsByTagName('html')[0]
  const oWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
  if (oWidth >= 640) {
    html.style.fontSize = '200px'
  } else html.style.fontSize = oWidth / pwidth * prem + 'px'
}
