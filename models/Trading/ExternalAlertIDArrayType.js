function ExternalAlertIDArrayType() {
	/**
	 * Arrays
	 */
}
ExternalAlertIDArrayType.prototype.toJSON = function(with_null) {
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
module.exports = ExternalAlertIDArrayType;