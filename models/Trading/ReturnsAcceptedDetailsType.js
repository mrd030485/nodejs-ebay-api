function ReturnsAcceptedDetailsType(ReturnsAcceptedOption, Description) {

	/**
	  Documentation
	   
                Type defining the <b>ReturnPolicyDetails.ReturnsAccepted</b> container that is returned in <b>GeteBayDetails</b>. This container contains the values that may be used in the <b>ReturnPolicy.ReturnsAcceptedOption</b>
                field of Add/Revise/Relist API calls.
            
	 */

	/**
	 * Arrays
	 */
	this.ReturnsAcceptedOption = ReturnsAcceptedOption;
	this.Description = Description;
}
ReturnsAcceptedDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ReturnsAcceptedOption: (this.ReturnsAcceptedOption === undefined)? null : this.ReturnsAcceptedOption,
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
module.exports = ReturnsAcceptedDetailsType;