function ExternalAlertIDArrayType(ExternalAlertID) {
	/**
	 * Arrays
	 */
	this.ExternalAlertID = ExternalAlertID;
}
ExternalAlertIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ExternalAlertID: (this.ExternalAlertID === undefined)? null : this.ExternalAlertID
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