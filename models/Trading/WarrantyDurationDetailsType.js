function WarrantyDurationDetailsType(WarrantyDurationOption, Description) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 */
	this.WarrantyDurationOption = WarrantyDurationOption;
	this.Description = Description;
}
WarrantyDurationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		WarrantyDurationOption: (this.WarrantyDurationOption === undefined)? null : this.WarrantyDurationOption,
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
module.exports = WarrantyDurationDetailsType;