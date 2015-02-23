chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.command && (msg.command == "change_background")) {
        document.body.style.background = "#f3f3f3 url('url') no-repeat right top";
        sendResponse("Background image set.");
    }
});