/**
 * @namespace main
 */

var lib = require('lib');
var Events = lib.Events;

/**
 * Log each update
 * 
 * @function onUpdate
 * @memberOf main
 * @listens lib.Events#update
 */
function onUpdate(){

	Events.on('update', function(data){
		console.log(data.isUpdate);
	});

}

onUpdate();


