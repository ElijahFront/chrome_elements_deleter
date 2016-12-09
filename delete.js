
function functionName() {
  console.log('her');
  chrome.runtime.sendMessage({mes:'hell'}, function () {
  });
}
var interval = setInterval(functionName,1000);

function removeClass (elem, className){
  elem.classList.remove(className)
};
function showBorder(el){
  el.classList.add('superExtraUniqueAndLongClassNameWithSomeSymbolsqqq');
  setTimeout(removeClass, 500, el, 'superExtraUniqueAndLongClassNameWithSomeSymbolsqqq')
}
function deleteElement(element){
  element.parentNode.removeChild(element)
}

function detectElement(cursorX, cursorY, callback){
  var element = document.elementFromPoint(cursorX, cursorY);
  callback(element);
}

function main(isTurnedOn){

  while (isTurnedOn){

  window.onmousemove = e => {
    posX = e.clientX;
    posY = e.clientY;

    detectElement(posX, posY, showBorder);

  }

  window.onclick = e => {
    e.preventDefault();
    posX = e.clientX;
    posY = e.clientY;

    detectElement(posX, posY, deleteElement)
  }
}
}


chrome.runtime.onMessage.addListener(function(message) {
    clearInterval(interval);

    main(message)

});
