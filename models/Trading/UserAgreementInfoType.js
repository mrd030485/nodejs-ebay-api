function UserAgreementInfoType(Site, SellereBayPaymentProcessStatus, AcceptedTime, SellereBayPaymentProcessEnableTime, UserAgreementURL) {

	/**
	  Documentation
	   This type is no longer used.
	 */

	/**
	 * Arrays
	 */
	this.Site = Site;
	this.SellereBayPaymentProcessStatus = SellereBayPaymentProcessStatus;
	this.AcceptedTime = AcceptedTime;
	this.SellereBayPaymentProcessEnableTime = SellereBayPaymentProcessEnableTime;
	this.UserAgreementURL = UserAgreementURL;
}
UserAgreementInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site,
		SellereBayPaymentProcessStatus: (this.SellereBayPaymentProcessStatus === undefined)? null : this.SellereBayPaymentProcessStatus,
		AcceptedTime: (this.AcceptedTime === undefined)? null : this.AcceptedTime,
		SellereBayPaymentProcessEnableTime: (this.SellereBayPaymentProcessEnableTime === undefined)? null : this.SellereBayPaymentProcessEnableTime,
		UserAgreementURL: (this.UserAgreementURL === undefined)? null : this.UserAgreementURL
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
module.exports = UserAgreementInfoType;