function ReturnsWithinDetailsType(ReturnsWithinOption, Description) {

	/**
	  Documentation
	   
                Type defining the <b>ReturnPolicyDetails.ReturnsWithin</b> container that is returned in <b>GeteBayDetails</b>. This container contains the values that may be used in the <b>ReturnPolicy.ReturnsWithinOption</b> field
                of Add/Revise/Relist API calls.
            
	 */

	/**
	 * Arrays
	 */
	this.ReturnsWithinOption = ReturnsWithinOption;
	this.Description = Description;
}
ReturnsWithinDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ReturnsWithinOption: (this.ReturnsWithinOption === undefined)? null : this.ReturnsWithinOption,
		Description: (this.Description === undefined)? null : this.Description
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
module.exports = ReturnsWithinDetailsType;