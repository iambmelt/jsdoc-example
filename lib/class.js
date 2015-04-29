/**
 * The Point Class responsible for handling 2D points
 * @class
 * @memberOf lib
 * 
 * @param {String|Number} x X Coordinate
 * @param {String|Number} y Y Coordinate
 */
function Point(x, y){
	this.x = Number(x);
	this.y = Number(y);
}

/**
 * Returns a foo string
 * 
 * @public
 * @memberOf lib.Point
 * @method toString
 * 
 * @return {String}
 */
Point.prototype.toString = function() {
	return "("+this.x+", "+this.y+")";
};

/**
 * Updates the foo's internal state. Or something.
 * 
 * @public
 * @memberOf lib.Point
 * @method getPoint
 * @param  {String} x
 * 
 * @return {String}
 */
Point.prototype.addPoint = function(point) {
	this.x += point.x;
	this.y += point.y;
};

/**
 * Updates the foo's internal state. Or something.
 * 
 * @private
 * @memberOf lib.Point
 * @method _secret
 * @param  {Number|String} x [description]
 * 
 * @return {Null}
 */
Point.prototype._secret = function(x){
	this.x = x;
	return null;
};

module.exports = Point;
