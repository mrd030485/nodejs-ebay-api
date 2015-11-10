function AffiliateTrackingDetailsType(TrackingID, TrackingPartnerCode, ApplicationDeviceType, AffiliateUserID) {

	/**
	  Documentation
	   Type used by the <b>AffiliateTrackingDetails</b> container, which is included in the <b>PlaceOffer</b> call to pass in eBay Partner Network affiliate-related data, so affiliates can earn commissions based on user
                    activity and the number of calls made by the user's application.
	 */

	/**
	 * Arrays
	 */
	this.TrackingID = TrackingID;
	this.TrackingPartnerCode = TrackingPartnerCode;
	this.ApplicationDeviceType = ApplicationDeviceType;
	this.AffiliateUserID = AffiliateUserID;
}
AffiliateTrackingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		TrackingID: (this.TrackingID === undefined)? null : this.TrackingID,
		TrackingPartnerCode: (this.TrackingPartnerCode === undefined)? null : this.TrackingPartnerCode,
		ApplicationDeviceType: (this.ApplicationDeviceType === undefined)? null : this.ApplicationDeviceType,
		AffiliateUserID: (this.AffiliateUserID === undefined)? null : this.AffiliateUserID
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
module.exports = AffiliateTrackingDetailsType;