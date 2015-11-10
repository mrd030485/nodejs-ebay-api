function RefundDetailsType(RefundOption, Description) {

	/**
	  Documentation
	   Type defining the <b>ReturnPolicyDetails.Refund</b> container that is returned in <b>GeteBayDetails</b>. All of the values (along with descriptions for each value) that can be used as a Refund Option when listing
                    an item is returned under the <b>ReturnPolicyDetails.Refund</b> container.
	 */

	/**
	 * Arrays
	 */
	this.RefundOption = RefundOption;
	this.Description = Description;
}
RefundDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundOption: (this.RefundOption === undefined)? null : this.RefundOption,
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
module.exports = RefundDetailsType;