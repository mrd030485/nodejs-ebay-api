function GiftSummaryType(Message) {

	/**
	  Documentation
	   
                <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, the <b>GiftSummary</b> container will not be returned. </span> <br> This type
                is used by the <b>GiftSummary</b> container that is returned in <b>GetOrders</b> and other order management calls if a buyer has purchased a digital gift card but has sent it to another individual as a gift. The
                <b>GiftSummary</b> container consists of the message that the buyer wrote for the recipient of the digital gift card.
            
	 */

	/**
	 * Arrays
	 */
	this.Message = Message;
}
GiftSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		Message: (this.Message === undefined)? null : this.Message
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
module.exports = GiftSummaryType;