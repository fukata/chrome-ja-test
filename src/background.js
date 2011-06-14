console.log("1.日本語テスト");

chrome.contextMenus.create({
	title: "2.日本語テスト",
	contexts: ['all'],
	onclick: function(info, tab) {
		console.log("3.日本語テスト");
		notification_request();
	}
});

function notification_request() {
	var notification = webkitNotifications.createNotification(
		'images/icon-48.png',                      // The image.
		'4.日本語テスト', // The title
		"5.日本語テスト"      // The body.
	);
	notification.show();	
}
