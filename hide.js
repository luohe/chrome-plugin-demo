
function stepNode(element) {
  do{
    if (element.hasChildNodes()) {
      stepNode(element.firstChild)
    }
  }while(element = element.nextSibling)
}

var frame = document.querySelector("#main-frame frame").document;
var iframeDocument = frame.contentWindow.document;
