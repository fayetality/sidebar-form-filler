jQuery(document).ready(function() {
	document.getElementById("osf_project").addEventListener("change",
	    function() {
	    	var project_id = $('#osf_project option:selected').val();
	  		window.postMessage({ type: "PROJECT_CHANGE", text: project_id }, "*");
	}, false);

	document.getElementById("osf_select").addEventListener("change",
	    function() {
	    	var selected_name = $("#osf_select option:selected").text();
	    	var selected_name_value = $("#osf_select option:selected").val();
	  		window.postMessage({ type: "FULL_NAME_CHANGE", text: selected_name, value: selected_name_value }, "*");
	}, false);

	document.getElementById("osf_result").addEventListener("change",
	    function() {
	    	var version_name = $("#osf_result option:selected").val();
	  		window.postMessage({ type: "NAME_VERSION_CHANGE", text: version_name}, "*");
	}, false);

	document.getElementById("fill_form").addEventListener("click",
	    function() {
		    var osf_title = $("#osf_project option:selected").text();
    		var osf_author = $("#osf_select option:selected").text();
	  		window.postMessage({ type: "FILL_FORM_BUTTON", title: osf_title, author: osf_author}, "*");
	}, false);
});