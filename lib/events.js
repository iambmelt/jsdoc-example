var util = require('util');
var EventEmitter = require('events').EventEmitter;
/**
 * Event example for JsDocs
 * @class Events
 * @memberOf lib
 * @extends {EventEmitter}
 * 
 */
function Events(){

}

util.inherit(Events, EventEmitter);

/**
 * 
 * Update an Object.
 * @public 
 * @method update
 * @memberOf lib.Events
 * 
 * @fires lib.Events#update
 */
Events.prototype.update = function(){
	
	/**
	 * Update Event
	 * @event lib.Events#update
	 * @type {Object}
	 * @param {Boolean} isUpdate Whether or not the update is an update.
	 */
	this.emit('update', {
		isUpdate: true
	});
};

module.exports = Events;
