console.log("8.日本語テスト");

chrome.extension.sendRequest({"type": "config"}, function(response) {
	console.log(response);
});

chrome.extension.sendRequest({"type": "external_config"}, function(response) {
	console.log(response);
});

chrome.extension.sendRequest({"type": "storage"}, function(response) {
	console.log(response);
});
