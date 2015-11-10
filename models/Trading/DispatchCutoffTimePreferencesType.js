function DispatchCutoffTimePreferencesType(CutoffTime) {

	/**
	  Documentation
	   Contains a seller's cut off time preferences for same day handling for item shipping.
	 */

	/**
	 * Arrays
	 */
	this.CutoffTime = CutoffTime;
}
DispatchCutoffTimePreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		CutoffTime: (this.CutoffTime === undefined)? null : this.CutoffTime
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
module.exports = DispatchCutoffTimePreferencesType;