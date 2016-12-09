var button = document.getElementsByClassName('turnOn')[0];
var turnedOn = false;

button.innerHTML = 'Включить';
chrome.runtime.onMessage.addListener(function(message, sender) {

  var tabID = sender.tab.id;

  button.onclick = function(){
    if (!turnedOn){
      turnedOn = true;
      this.innerHTML = 'Выключить';
      chrome.tabs.sendMessage(tabID,turnedOn)
    } else {
      turnedOn = false;
      this.innerHTML = 'Включить';
      chrome.tabs.sendMessage(tabID,turnedOn)
    }
  }
});
