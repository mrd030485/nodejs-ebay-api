function WarrantyOfferedDetailsType(WarrantyOfferedOption, Description) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 */
	this.WarrantyOfferedOption = WarrantyOfferedOption;
	this.Description = Description;
}
WarrantyOfferedDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		WarrantyOfferedOption: (this.WarrantyOfferedOption === undefined)? null : this.WarrantyOfferedOption,
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
module.exports = WarrantyOfferedDetailsType;