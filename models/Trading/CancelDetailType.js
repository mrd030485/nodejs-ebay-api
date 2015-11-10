function CancelDetailType(CancelReason, CancelReasonDetails, CancelIntiator, CancelIntiationDate, CancelCompleteDate) {

	/**
	  Documentation
	   
                Type used by the <b>CancelDetail</b> container, which consists of details related to an eBay order that has been cancelled or is in the process of possibly being cancelled.
            
	 */

	/**
	 * Arrays
	 */
	this.CancelReason = CancelReason;
	this.CancelReasonDetails = CancelReasonDetails;
	this.CancelIntiator = CancelIntiator;
	this.CancelIntiationDate = CancelIntiationDate;
	this.CancelCompleteDate = CancelCompleteDate;
}
CancelDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		CancelReason: (this.CancelReason === undefined)? null : this.CancelReason,
		CancelReasonDetails: (this.CancelReasonDetails === undefined)? null : this.CancelReasonDetails,
		CancelIntiator: (this.CancelIntiator === undefined)? null : this.CancelIntiator,
		CancelIntiationDate: (this.CancelIntiationDate === undefined)? null : this.CancelIntiationDate,
		CancelCompleteDate: (this.CancelCompleteDate === undefined)? null : this.CancelCompleteDate
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
module.exports = CancelDetailType;