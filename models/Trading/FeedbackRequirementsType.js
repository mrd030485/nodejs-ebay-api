function FeedbackRequirementsType(minimum) {
	/**
	 * Arrays
	 */
	this.minimum = minimum;
}
FeedbackRequirementsType.prototype.toJSON = function(with_null) {
	var json = { 
		minimum: (this.minimum === undefined)? null : this.minimum
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
module.exports = FeedbackRequirementsType;