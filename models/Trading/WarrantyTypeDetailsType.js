function WarrantyTypeDetailsType(WarrantyTypeOption, Description) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 */
	this.WarrantyTypeOption = WarrantyTypeOption;
	this.Description = Description;
}
WarrantyTypeDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		WarrantyTypeOption: (this.WarrantyTypeOption === undefined)? null : this.WarrantyTypeOption,
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
module.exports = WarrantyTypeDetailsType;