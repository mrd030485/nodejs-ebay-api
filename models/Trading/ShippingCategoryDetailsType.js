function ShippingCategoryDetailsType(ShippingCategory, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                This type defines the <b>ShippingCategoryDetails</b> container. When the <b>DetailName</b> field is set to ShippingCategoryDetails in a GeteBayDetails request, one <b>ShippingCategoryDetails</b> container is returned
                for each valid shipping category used on the eBay site. Besides being useful to view the list of valid shipping categories, this container is also useful to discover when the last update to shipping categories was made by eBay.
            
	 */

	/**
	 * Arrays
	 */
	this.ShippingCategory = ShippingCategory;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ShippingCategoryDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingCategory: (this.ShippingCategory === undefined)? null : this.ShippingCategory,
		Description: (this.Description === undefined)? null : this.Description,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = ShippingCategoryDetailsType;