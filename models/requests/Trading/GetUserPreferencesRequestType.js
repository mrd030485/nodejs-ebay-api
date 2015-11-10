function GetUserPreferencesRequestType(ShowBidderNoticePreferences, ShowCombinedPaymentPreferences, ShowCrossPromotionPreferences, ShowSellerPaymentPreferences, ShowEndOfAuctionEmailPreferences, ShowSellerFavoriteItemPreferences, ShowProStoresPreferences, ShowEmailShipmentTrackingNumberPreference, ShowRequiredShipPhoneNumberPreference, ShowSellerExcludeShipToLocationPreference, ShowUnpaidItemAssistancePreference, ShowPurchaseReminderEmailPreferences, ShowUnpaidItemAssistanceExclusionList, ShowSellerProfilePreferences, ShowSellerReturnPreferences, ShowGlobalShippingProgramPreference, ShowDispatchCutoffTimePreferences, ShowGlobalShippingProgramListingPreference, ShowOverrideGSPServiceWithIntlServicePreference, ShowPickupDropoffPreferences, ShowOutOfStockControlPreference, ShoweBayPLUSPreference) {

	/**
	  Documentation
	   Retrieves the specified user preferences for the authenticated caller.
	 */

	/**
	 * Arrays
	 */
	this.ShowBidderNoticePreferences = ShowBidderNoticePreferences;
	this.ShowCombinedPaymentPreferences = ShowCombinedPaymentPreferences;
	this.ShowCrossPromotionPreferences = ShowCrossPromotionPreferences;
	this.ShowSellerPaymentPreferences = ShowSellerPaymentPreferences;
	this.ShowEndOfAuctionEmailPreferences = ShowEndOfAuctionEmailPreferences;
	this.ShowSellerFavoriteItemPreferences = ShowSellerFavoriteItemPreferences;
	this.ShowProStoresPreferences = ShowProStoresPreferences;
	this.ShowEmailShipmentTrackingNumberPreference = ShowEmailShipmentTrackingNumberPreference;
	this.ShowRequiredShipPhoneNumberPreference = ShowRequiredShipPhoneNumberPreference;
	this.ShowSellerExcludeShipToLocationPreference = ShowSellerExcludeShipToLocationPreference;
	this.ShowUnpaidItemAssistancePreference = ShowUnpaidItemAssistancePreference;
	this.ShowPurchaseReminderEmailPreferences = ShowPurchaseReminderEmailPreferences;
	this.ShowUnpaidItemAssistanceExclusionList = ShowUnpaidItemAssistanceExclusionList;
	this.ShowSellerProfilePreferences = ShowSellerProfilePreferences;
	this.ShowSellerReturnPreferences = ShowSellerReturnPreferences;
	this.ShowGlobalShippingProgramPreference = ShowGlobalShippingProgramPreference;
	this.ShowDispatchCutoffTimePreferences = ShowDispatchCutoffTimePreferences;
	this.ShowGlobalShippingProgramListingPreference = ShowGlobalShippingProgramListingPreference;
	this.ShowOverrideGSPServiceWithIntlServicePreference = ShowOverrideGSPServiceWithIntlServicePreference;
	this.ShowPickupDropoffPreferences = ShowPickupDropoffPreferences;
	this.ShowOutOfStockControlPreference = ShowOutOfStockControlPreference;
	this.ShoweBayPLUSPreference = ShoweBayPLUSPreference;
}
GetUserPreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ShowBidderNoticePreferences: (this.ShowBidderNoticePreferences === undefined)? null : this.ShowBidderNoticePreferences,
		ShowCombinedPaymentPreferences: (this.ShowCombinedPaymentPreferences === undefined)? null : this.ShowCombinedPaymentPreferences,
		ShowCrossPromotionPreferences: (this.ShowCrossPromotionPreferences === undefined)? null : this.ShowCrossPromotionPreferences,
		ShowSellerPaymentPreferences: (this.ShowSellerPaymentPreferences === undefined)? null : this.ShowSellerPaymentPreferences,
		ShowEndOfAuctionEmailPreferences: (this.ShowEndOfAuctionEmailPreferences === undefined)? null : this.ShowEndOfAuctionEmailPreferences,
		ShowSellerFavoriteItemPreferences: (this.ShowSellerFavoriteItemPreferences === undefined)? null : this.ShowSellerFavoriteItemPreferences,
		ShowProStoresPreferences: (this.ShowProStoresPreferences === undefined)? null : this.ShowProStoresPreferences,
		ShowEmailShipmentTrackingNumberPreference: (this.ShowEmailShipmentTrackingNumberPreference === undefined)? null : this.ShowEmailShipmentTrackingNumberPreference,
		ShowRequiredShipPhoneNumberPreference: (this.ShowRequiredShipPhoneNumberPreference === undefined)? null : this.ShowRequiredShipPhoneNumberPreference,
		ShowSellerExcludeShipToLocationPreference: (this.ShowSellerExcludeShipToLocationPreference === undefined)? null : this.ShowSellerExcludeShipToLocationPreference,
		ShowUnpaidItemAssistancePreference: (this.ShowUnpaidItemAssistancePreference === undefined)? null : this.ShowUnpaidItemAssistancePreference,
		ShowPurchaseReminderEmailPreferences: (this.ShowPurchaseReminderEmailPreferences === undefined)? null : this.ShowPurchaseReminderEmailPreferences,
		ShowUnpaidItemAssistanceExclusionList: (this.ShowUnpaidItemAssistanceExclusionList === undefined)? null : this.ShowUnpaidItemAssistanceExclusionList,
		ShowSellerProfilePreferences: (this.ShowSellerProfilePreferences === undefined)? null : this.ShowSellerProfilePreferences,
		ShowSellerReturnPreferences: (this.ShowSellerReturnPreferences === undefined)? null : this.ShowSellerReturnPreferences,
		ShowGlobalShippingProgramPreference: (this.ShowGlobalShippingProgramPreference === undefined)? null : this.ShowGlobalShippingProgramPreference,
		ShowDispatchCutoffTimePreferences: (this.ShowDispatchCutoffTimePreferences === undefined)? null : this.ShowDispatchCutoffTimePreferences,
		ShowGlobalShippingProgramListingPreference: (this.ShowGlobalShippingProgramListingPreference === undefined)? null : this.ShowGlobalShippingProgramListingPreference,
		ShowOverrideGSPServiceWithIntlServicePreference: (this.ShowOverrideGSPServiceWithIntlServicePreference === undefined)? null : this.ShowOverrideGSPServiceWithIntlServicePreference,
		ShowPickupDropoffPreferences: (this.ShowPickupDropoffPreferences === undefined)? null : this.ShowPickupDropoffPreferences,
		ShowOutOfStockControlPreference: (this.ShowOutOfStockControlPreference === undefined)? null : this.ShowOutOfStockControlPreference,
		ShoweBayPLUSPreference: (this.ShoweBayPLUSPreference === undefined)? null : this.ShoweBayPLUSPreference
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
module.exports = GetUserPreferencesRequestType;