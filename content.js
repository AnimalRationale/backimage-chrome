chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.command && (msg.command == "change_background")) {
        document.body.style.backgroundImage = "url('https://img.4plebs.org/boards/hr/image/1374/42/1374429792284.jpg')";
        sendResponse("Background image set.");
    }
});