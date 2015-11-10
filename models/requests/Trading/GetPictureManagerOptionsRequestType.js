function GetPictureManagerOptionsRequestType() {

	/**
	  Documentation
	   Requests a list of Picture Manager options and allowed values, such as subscription type and picture display.
	 */

	/**
	 * Arrays
	 */
}
GetPictureManagerOptionsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
	};
	if(!with_null) {
		for(var k in json) {
			if(json[k] === null) {
				delete json[k];
			}
		}
	}
	return json;
};
module.exports = GetPictureManagerOptionsRequestType;