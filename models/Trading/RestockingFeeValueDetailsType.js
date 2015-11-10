function RestockingFeeValueDetailsType(RestockingFeeValueOption, Description) {

	/**
	  Documentation
	   
                Type defining the <b>RestockingFeeValue</b> container, which contains the allowed values (and a text description of each value) that may be specified in the <b>RestockingFeeValueOption</b> field of an Add/Revise/Relist API call.
            
	 */

	/**
	 * Arrays
	 */
	this.RestockingFeeValueOption = RestockingFeeValueOption;
	this.Description = Description;
}
RestockingFeeValueDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		RestockingFeeValueOption: (this.RestockingFeeValueOption === undefined)? null : this.RestockingFeeValueOption,
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
module.exports = RestockingFeeValueDetailsType;