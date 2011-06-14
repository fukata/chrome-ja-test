console.log(config);

// simple
context_menu_create("2.日本語テスト", {title:"3.日本語テスト", body:"4.日本語テスト"});

// i18n
context_menu_create(chrome.i18n.getMessage('context_menu_title'), {title:chrome.i18n.getMessage('notification_title'), body:chrome.i18n.getMessage('notification_body')});


var c = JSON.parse( $.ajax({ async:false, url:'./config.json' }).responseText );
chrome.extension.onRequest.addListener(function(request, sender, func)  {
	switch(request.type) {
		case "config":
			func(config);
			break;
		case "external_config":
			//var c = JSON.parse( $.ajax({ async:false, url:'./config.json' }).responseText );
			func(c);
			break;
		case "storage":
			func(localStorage);
			break;
		default:
			break;
	}
});

function context_menu_create(title, notification_options) {
	console.log(title);
	console.log(notification_options);
	chrome.contextMenus.create({
		title: title,
		contexts: ['all'],
		onclick: function(info, tab) {
			notification_request(notification_options.title, notification_options.body);
		}
	});
}

function notification_request(title, body) {
	var notification = webkitNotifications.createNotification(
		'images/icon-48.png',                      // The image.
		title, // The title
		body      // The body.
	);
	notification.show();	
}
