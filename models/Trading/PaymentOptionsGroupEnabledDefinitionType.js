function PaymentOptionsGroupEnabledDefinitionType() {

	/**
	  Documentation
	   
                The PaymentOptionsGroupEnabled field is returned in the GetCategoryFeature response if the Payment Options Group feature applies to the category. The field is returned as an empty element. The Payment Options Group feature is only applicable to DE and
                AT listings.
            
	 */

	/**
	 * Arrays
	 */
}
PaymentOptionsGroupEnabledDefinitionType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = PaymentOptionsGroupEnabledDefinitionType;