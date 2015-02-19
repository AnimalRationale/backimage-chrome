chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {
            command: "change_background"
        },
        function(msg) {
            console.log("Response:", msg);
        });
});