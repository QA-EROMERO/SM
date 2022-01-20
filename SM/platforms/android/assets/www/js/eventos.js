function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
	//alert("Phonegap se ha cargado correctamente...");
	document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
};

function onPause() {
    // Handle the pause event
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
};

function onResume() {
    // Handle the resume event
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
};

function onMenuKeyDown() {
    // Handle the menubutton event
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
};