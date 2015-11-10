function BasicAmountType(currencyID) {

	/**
	  Documentation
	   
                This type is deprecated
            
	 */

	/**
	 * Arrays
	 */
	this.currencyID = currencyID;
}
BasicAmountType.prototype.toJSON = function(with_null) {
	var json = { 
		currencyID: (this.currencyID === undefined)? null : this.currencyID
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
module.exports = BasicAmountType;