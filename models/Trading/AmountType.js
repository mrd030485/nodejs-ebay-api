function AmountType(currencyID) {

	/**
	  Documentation
	   An eBay-defined complex type for specifying monetary amounts. <br><br> A double value (e.g., 1.00 or 1.0) is meaningful as a monetary amount when accompanied by a specification of the currency, in which case the value specifies
                    the amount in that currency. An <b>AmountType</b> expresses both the value (a double) and the currency. <br><br> The <b>AmountType</b> data type is typically used to specify details such as prices,
                    fees, costs, and payments. In some cases, a whole number (i.e., without a period) can be passed or returned as a monetary value. This is necessary to support certain currencies that are only expressed as whole numbers. <br><br>
                    Because a double is used to represent the amount, this also means whole monetary amounts may be returned with only one 0 after the decimal. For example, a dollar value could be returned as 1.0 instead of 1.00 in calls like <b>AddItem</b>.
	 */

	/**
	 * Arrays
	 */
	this.currencyID = currencyID;
}
AmountType.prototype.toJSON = function(with_null) {
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
module.exports = AmountType;