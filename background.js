var images = ['1.png', '2.png'];
var image_index = 0;
chrome.browserAction.onClicked.addListener(
  function rotateIcon() {
    chrome.browserAction.setIcon({ path: images[image_index] });
    chrome.browserAction.setBadgeText({ text: String(image_index) });
    image_index = (image_index + 1) % images.length;
    window.setTimeout(rotateIcon, 500);
  }
);
