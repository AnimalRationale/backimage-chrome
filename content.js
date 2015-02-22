chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.command && (msg.command == "change_background")) {
        document.body.style.backgroundImage = "url";
        sendResponse("Background image set.");
    }
});