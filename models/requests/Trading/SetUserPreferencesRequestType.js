var BidderNoticePreferencesType = require('../../Trading/BidderNoticePreferencesType'),
	CombinedPaymentPreferencesType = require('../../Trading/CombinedPaymentPreferencesType'),
	CrossPromotionPreferencesType = require('../../Trading/CrossPromotionPreferencesType'),
	SellerPaymentPreferencesType = require('../../Trading/SellerPaymentPreferencesType'),
	SellerFavoriteItemPreferencesType = require('../../Trading/SellerFavoriteItemPreferencesType'),
	EndOfAuctionEmailPreferencesType = require('../../Trading/EndOfAuctionEmailPreferencesType'),
	UnpaidItemAssistancePreferencesType = require('../../Trading/UnpaidItemAssistancePreferencesType'),
	PurchaseReminderEmailPreferencesType = require('../../Trading/PurchaseReminderEmailPreferencesType'),
	DispatchCutoffTimePreferencesType = require('../../Trading/DispatchCutoffTimePreferencesType');

function SetUserPreferencesRequestType(BidderNoticePreferences, CombinedPaymentPreferences, CrossPromotionPreferences, SellerPaymentPreferences, SellerFavoriteItemPreferences, EndOfAuctionEmailPreferences, EmailShipmentTrackingNumberPreference, RequiredShipPhoneNumberPreference, UnpaidItemAssistancePreferences, PurchaseReminderEmailPreferences, SellerThirdPartyCheckoutDisabled, DispatchCutoffTimePreference, GlobalShippingProgramListingPreference, OverrideGSPserviceWithIntlService, OutOfStockControlPreference) {

	/**
	  Documentation
	   Sets the authenticated user's preferences.
	 */

	/**
	 * Arrays
	 */
	var _BidderNoticePreferences;
	var _CombinedPaymentPreferences;
	var _CrossPromotionPreferences;
	var _SellerPaymentPreferences;
	var _SellerFavoriteItemPreferences;
	var _EndOfAuctionEmailPreferences;
	var _UnpaidItemAssistancePreferences;
	var _PurchaseReminderEmailPreferences;
	var _DispatchCutoffTimePreference;
	Object.defineProperty(this, 'BidderNoticePreferences', {
		 get: function(){
			 return _BidderNoticePreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BidderNoticePreferencesType){ 
					_BidderNoticePreferences = value; 
				}else{
					console.log('BidderNoticePreferences expects type BidderNoticePreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CombinedPaymentPreferences', {
		 get: function(){
			 return _CombinedPaymentPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CombinedPaymentPreferencesType){ 
					_CombinedPaymentPreferences = value; 
				}else{
					console.log('CombinedPaymentPreferences expects type CombinedPaymentPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossPromotionPreferences', {
		 get: function(){
			 return _CrossPromotionPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CrossPromotionPreferencesType){ 
					_CrossPromotionPreferences = value; 
				}else{
					console.log('CrossPromotionPreferences expects type CrossPromotionPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerPaymentPreferences', {
		 get: function(){
			 return _SellerPaymentPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerPaymentPreferencesType){ 
					_SellerPaymentPreferences = value; 
				}else{
					console.log('SellerPaymentPreferences expects type SellerPaymentPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerFavoriteItemPreferences', {
		 get: function(){
			 return _SellerFavoriteItemPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerFavoriteItemPreferencesType){ 
					_SellerFavoriteItemPreferences = value; 
				}else{
					console.log('SellerFavoriteItemPreferences expects type SellerFavoriteItemPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EndOfAuctionEmailPreferences', {
		 get: function(){
			 return _EndOfAuctionEmailPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EndOfAuctionEmailPreferencesType){ 
					_EndOfAuctionEmailPreferences = value; 
				}else{
					console.log('EndOfAuctionEmailPreferences expects type EndOfAuctionEmailPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UnpaidItemAssistancePreferences', {
		 get: function(){
			 return _UnpaidItemAssistancePreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UnpaidItemAssistancePreferencesType){ 
					_UnpaidItemAssistancePreferences = value; 
				}else{
					console.log('UnpaidItemAssistancePreferences expects type UnpaidItemAssistancePreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PurchaseReminderEmailPreferences', {
		 get: function(){
			 return _PurchaseReminderEmailPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PurchaseReminderEmailPreferencesType){ 
					_PurchaseReminderEmailPreferences = value; 
				}else{
					console.log('PurchaseReminderEmailPreferences expects type PurchaseReminderEmailPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DispatchCutoffTimePreference', {
		 get: function(){
			 return _DispatchCutoffTimePreference;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DispatchCutoffTimePreferencesType){ 
					_DispatchCutoffTimePreference = value; 
				}else{
					console.log('DispatchCutoffTimePreference expects type DispatchCutoffTimePreferencesType');
				}
			}
		}
	});
	this.BidderNoticePreferences = BidderNoticePreferences;
	this.CombinedPaymentPreferences = CombinedPaymentPreferences;
	this.CrossPromotionPreferences = CrossPromotionPreferences;
	this.SellerPaymentPreferences = SellerPaymentPreferences;
	this.SellerFavoriteItemPreferences = SellerFavoriteItemPreferences;
	this.EndOfAuctionEmailPreferences = EndOfAuctionEmailPreferences;
	this.EmailShipmentTrackingNumberPreference = EmailShipmentTrackingNumberPreference;
	this.RequiredShipPhoneNumberPreference = RequiredShipPhoneNumberPreference;
	this.UnpaidItemAssistancePreferences = UnpaidItemAssistancePreferences;
	this.PurchaseReminderEmailPreferences = PurchaseReminderEmailPreferences;
	this.SellerThirdPartyCheckoutDisabled = SellerThirdPartyCheckoutDisabled;
	this.DispatchCutoffTimePreference = DispatchCutoffTimePreference;
	this.GlobalShippingProgramListingPreference = GlobalShippingProgramListingPreference;
	this.OverrideGSPserviceWithIntlService = OverrideGSPserviceWithIntlService;
	this.OutOfStockControlPreference = OutOfStockControlPreference;
}
SetUserPreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		BidderNoticePreferences: (this.BidderNoticePreferences === undefined)? null : this.BidderNoticePreferences.toJSON(),
		CombinedPaymentPreferences: (this.CombinedPaymentPreferences === undefined)? null : this.CombinedPaymentPreferences.toJSON(),
		CrossPromotionPreferences: (this.CrossPromotionPreferences === undefined)? null : this.CrossPromotionPreferences.toJSON(),
		SellerPaymentPreferences: (this.SellerPaymentPreferences === undefined)? null : this.SellerPaymentPreferences.toJSON(),
		SellerFavoriteItemPreferences: (this.SellerFavoriteItemPreferences === undefined)? null : this.SellerFavoriteItemPreferences.toJSON(),
		EndOfAuctionEmailPreferences: (this.EndOfAuctionEmailPreferences === undefined)? null : this.EndOfAuctionEmailPreferences.toJSON(),
		EmailShipmentTrackingNumberPreference: (this.EmailShipmentTrackingNumberPreference === undefined)? null : this.EmailShipmentTrackingNumberPreference,
		RequiredShipPhoneNumberPreference: (this.RequiredShipPhoneNumberPreference === undefined)? null : this.RequiredShipPhoneNumberPreference,
		UnpaidItemAssistancePreferences: (this.UnpaidItemAssistancePreferences === undefined)? null : this.UnpaidItemAssistancePreferences.toJSON(),
		PurchaseReminderEmailPreferences: (this.PurchaseReminderEmailPreferences === undefined)? null : this.PurchaseReminderEmailPreferences.toJSON(),
		SellerThirdPartyCheckoutDisabled: (this.SellerThirdPartyCheckoutDisabled === undefined)? null : this.SellerThirdPartyCheckoutDisabled,
		DispatchCutoffTimePreference: (this.DispatchCutoffTimePreference === undefined)? null : this.DispatchCutoffTimePreference.toJSON(),
		GlobalShippingProgramListingPreference: (this.GlobalShippingProgramListingPreference === undefined)? null : this.GlobalShippingProgramListingPreference,
		OverrideGSPserviceWithIntlService: (this.OverrideGSPserviceWithIntlService === undefined)? null : this.OverrideGSPserviceWithIntlService,
		OutOfStockControlPreference: (this.OutOfStockControlPreference === undefined)? null : this.OutOfStockControlPreference
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
module.exports = SetUserPreferencesRequestType;