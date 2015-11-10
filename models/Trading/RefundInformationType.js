function RefundInformationType(Refund) {

	/**
	  Documentation
	   
                Type defining the <strong>Refunds</strong> container, which contains an array of <strong>Refund</strong> containers. A <strong>Refund</strong> container consists of detailed information on an In-Store Pickup item refund.
                <br/><br/> <span class="tablenote"> <strong>Note:</strong> At this time, the In-Store Pickup feature is generally only available to large retail merchants, and can only be applied to multi-quantity, fixed-price
                listings. </span>
            
	 */

	/**
	 * Arrays
	 *	Refund: RefundTransactionInfoType
	 */
	this.Refund = Refund;
}
RefundInformationType.prototype.toJSON = function(with_null) {
	var json = { 
		Refund: (this.Refund === undefined)? null : this.Refund
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
module.exports = RefundInformationType;