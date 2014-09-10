/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request, 
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);

/*Function which create a sidebar*/
var sidebarOpen = false;

function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		document.body.style.width="100%";
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('div');
		sidebar.id = "mySidebar";
		
		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			right:0px;\
			width:30%;\
			height:100%;\
			border-width: 3px;\
			border-left-style: solid;\
			background:white;\
			z-index:999999;\
		";
		document.body.style.width="70%";

		document.body.appendChild(sidebar);

		$("#mySidebar").load(chrome.extension.getURL("popup.html"));
		
		//console.log(chrome.extension.getURL("./images/expand.png"));

		sidebarOpen = true;
	}
}