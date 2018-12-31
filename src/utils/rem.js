export function getRem (doc, win) {
  let docEl = doc.documentElement;
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      if (clientWidth >= 1920) {
        docEl.style.fontSize = '100px'
      }else if (clientWidth <= 1080){
        docEl.style.fontSize = '56px'
      }  else  {
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
      }
 // if (!doc.addEventListener) return
 // win.addEventListener('resize', recalc, false)
}
