function UnpaidItemAssistancePreferencesType(DelayBeforeOpeningDispute, OptInStatus, AutoRelist, RemoveAllExcludedUsers, ExcludedUser, AutoOptDonationRefund) {

	/**
	  Documentation
	   This type defines the <b>UnpaidItemAssistancePreferences</b> container. This container is used in <b>SetUserPreferences</b> to set the preferences related to the <b>Unpaid Item Assistant</b> feature.
                    The <b>UnpaidItemAssistancePreferences</b> container is also returned in <b>GetUserPreferences</b> (if the <b>ShowUnpaidItemAssistancePreference</b> flag is included and set to true in the request).
	 */

	/**
	 * Arrays
	 */
	this.DelayBeforeOpeningDispute = DelayBeforeOpeningDispute;
	this.OptInStatus = OptInStatus;
	this.AutoRelist = AutoRelist;
	this.RemoveAllExcludedUsers = RemoveAllExcludedUsers;
	this.ExcludedUser = ExcludedUser;
	this.AutoOptDonationRefund = AutoOptDonationRefund;
}
UnpaidItemAssistancePreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		DelayBeforeOpeningDispute: (this.DelayBeforeOpeningDispute === undefined)? null : this.DelayBeforeOpeningDispute,
		OptInStatus: (this.OptInStatus === undefined)? null : this.OptInStatus,
		AutoRelist: (this.AutoRelist === undefined)? null : this.AutoRelist,
		RemoveAllExcludedUsers: (this.RemoveAllExcludedUsers === undefined)? null : this.RemoveAllExcludedUsers,
		ExcludedUser: (this.ExcludedUser === undefined)? null : this.ExcludedUser,
		AutoOptDonationRefund: (this.AutoOptDonationRefund === undefined)? null : this.AutoOptDonationRefund
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
module.exports = UnpaidItemAssistancePreferencesType;