function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
        window.cache.cleartemp();
    
};

function onPause() {
    // Handle the pause event
    alert("On Pause");
    /*
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
        window.cache.cleartemp(); // 
        */
};

function onResume() {
    // Handle the resume event
    alert("On Resume");
    /*
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
        */
};

function onMenuKeyDown() {
    // Handle the menubutton event
    alert("On Menu Key Down");
    /*
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.cache.clear( success, error );
        */
};

function clearCache() {
    // Handle the pause event
    /*
    var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }
    */
        window.cache.clear( success, error );
        window.cache.cleartemp(); // 
};