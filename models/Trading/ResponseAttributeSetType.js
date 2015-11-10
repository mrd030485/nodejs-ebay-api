function ResponseAttributeSetType(ApproximatePages, AttributeSetID, HasMore, ProductFamilies, ProductFinderConstraints, TooManyMatchesFound, TotalProducts) {

	/**
	  Documentation
	   
                This type is deprecated as <b>GetProduct*</b> calls were deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	ProductFamilies: ProductFamilyType
	 *	ProductFinderConstraints: ProductFinderConstraintType
	 */
	this.ApproximatePages = ApproximatePages;
	this.AttributeSetID = AttributeSetID;
	this.HasMore = HasMore;
	this.ProductFamilies = ProductFamilies;
	this.ProductFinderConstraints = ProductFinderConstraints;
	this.TooManyMatchesFound = TooManyMatchesFound;
	this.TotalProducts = TotalProducts;
}
ResponseAttributeSetType.prototype.toJSON = function(with_null) {
	var json = { 
		ApproximatePages: (this.ApproximatePages === undefined)? null : this.ApproximatePages,
		AttributeSetID: (this.AttributeSetID === undefined)? null : this.AttributeSetID,
		HasMore: (this.HasMore === undefined)? null : this.HasMore,
		ProductFamilies: (this.ProductFamilies === undefined)? null : this.ProductFamilies,
		ProductFinderConstraints: (this.ProductFinderConstraints === undefined)? null : this.ProductFinderConstraints,
		TooManyMatchesFound: (this.TooManyMatchesFound === undefined)? null : this.TooManyMatchesFound,
		TotalProducts: (this.TotalProducts === undefined)? null : this.TotalProducts
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
module.exports = ResponseAttributeSetType;