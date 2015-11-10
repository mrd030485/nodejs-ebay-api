var AddressType = require('./AddressType'),
	SchedulingInfoType = require('./SchedulingInfoType'),
	ProStoresCheckoutPreferenceType = require('./ProStoresCheckoutPreferenceType'),
	CharityAffiliationDetailsType = require('./CharityAffiliationDetailsType'),
	IntegratedMerchantCreditCardInfoType = require('./IntegratedMerchantCreditCardInfoType'),
	FeatureEligibilityType = require('./FeatureEligibilityType'),
	TopRatedSellerDetailsType = require('./TopRatedSellerDetailsType'),
	RecoupmentPolicyConsentType = require('./RecoupmentPolicyConsentType');

function SellerType(PaisaPayStatus, AllowPaymentEdit, BillingCurrency, CheckoutEnabled, CIPBankAccountStored, GoodStanding, MerchandizingPref, QualifiesForB2BVAT, SellerGuaranteeLevel, SellerLevel, SellerPaymentAddress, SchedulingInfo, StoreOwner, StoreURL, SellerBusinessType, RegisteredBusinessSeller, StoreSite, PaymentMethod, ProStoresPreference, CharityRegistered, SafePaymentExempt, PaisaPayEscrowEMIStatus, CharityAffiliationDetails, TransactionPercent, IntegratedMerchantCreditCardInfo, FeatureEligibility, TopRatedSeller, TopRatedSellerDetails, RecoupmentPolicyConsent, DomesticRateTable, InternationalRateTable, SellereBayPaymentProcessStatus, SellereBayPaymentProcessConsent) {

	/**
	  Documentation
	   Information about a user returned in the context of an item's seller.
	 */

	/**
	 * Arrays
	 */
	var _SellerPaymentAddress;
	var _SchedulingInfo;
	var _ProStoresPreference;
	var _CharityAffiliationDetails;
	var _IntegratedMerchantCreditCardInfo;
	var _FeatureEligibility;
	var _TopRatedSellerDetails;
	var _RecoupmentPolicyConsent;
	Object.defineProperty(this, 'SellerPaymentAddress', {
		 get: function(){
			 return _SellerPaymentAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_SellerPaymentAddress = value; 
				}else{
					console.log('SellerPaymentAddress expects type AddressType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SchedulingInfo', {
		 get: function(){
			 return _SchedulingInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SchedulingInfoType){ 
					_SchedulingInfo = value; 
				}else{
					console.log('SchedulingInfo expects type SchedulingInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProStoresPreference', {
		 get: function(){
			 return _ProStoresPreference;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProStoresCheckoutPreferenceType){ 
					_ProStoresPreference = value; 
				}else{
					console.log('ProStoresPreference expects type ProStoresCheckoutPreferenceType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CharityAffiliationDetails', {
		 get: function(){
			 return _CharityAffiliationDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharityAffiliationDetailsType){ 
					_CharityAffiliationDetails = value; 
				}else{
					console.log('CharityAffiliationDetails expects type CharityAffiliationDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'IntegratedMerchantCreditCardInfo', {
		 get: function(){
			 return _IntegratedMerchantCreditCardInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof IntegratedMerchantCreditCardInfoType){ 
					_IntegratedMerchantCreditCardInfo = value; 
				}else{
					console.log('IntegratedMerchantCreditCardInfo expects type IntegratedMerchantCreditCardInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FeatureEligibility', {
		 get: function(){
			 return _FeatureEligibility;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeatureEligibilityType){ 
					_FeatureEligibility = value; 
				}else{
					console.log('FeatureEligibility expects type FeatureEligibilityType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TopRatedSellerDetails', {
		 get: function(){
			 return _TopRatedSellerDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TopRatedSellerDetailsType){ 
					_TopRatedSellerDetails = value; 
				}else{
					console.log('TopRatedSellerDetails expects type TopRatedSellerDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RecoupmentPolicyConsent', {
		 get: function(){
			 return _RecoupmentPolicyConsent;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RecoupmentPolicyConsentType){ 
					_RecoupmentPolicyConsent = value; 
				}else{
					console.log('RecoupmentPolicyConsent expects type RecoupmentPolicyConsentType');
				}
			}
		}
	});
	this.PaisaPayStatus = PaisaPayStatus;
	this.AllowPaymentEdit = AllowPaymentEdit;
	this.BillingCurrency = BillingCurrency;
	this.CheckoutEnabled = CheckoutEnabled;
	this.CIPBankAccountStored = CIPBankAccountStored;
	this.GoodStanding = GoodStanding;
	this.MerchandizingPref = MerchandizingPref;
	this.QualifiesForB2BVAT = QualifiesForB2BVAT;
	this.SellerGuaranteeLevel = SellerGuaranteeLevel;
	this.SellerLevel = SellerLevel;
	this.SellerPaymentAddress = SellerPaymentAddress;
	this.SchedulingInfo = SchedulingInfo;
	this.StoreOwner = StoreOwner;
	this.StoreURL = StoreURL;
	this.SellerBusinessType = SellerBusinessType;
	this.RegisteredBusinessSeller = RegisteredBusinessSeller;
	this.StoreSite = StoreSite;
	this.PaymentMethod = PaymentMethod;
	this.ProStoresPreference = ProStoresPreference;
	this.CharityRegistered = CharityRegistered;
	this.SafePaymentExempt = SafePaymentExempt;
	this.PaisaPayEscrowEMIStatus = PaisaPayEscrowEMIStatus;
	this.CharityAffiliationDetails = CharityAffiliationDetails;
	this.TransactionPercent = TransactionPercent;
	this.IntegratedMerchantCreditCardInfo = IntegratedMerchantCreditCardInfo;
	this.FeatureEligibility = FeatureEligibility;
	this.TopRatedSeller = TopRatedSeller;
	this.TopRatedSellerDetails = TopRatedSellerDetails;
	this.RecoupmentPolicyConsent = RecoupmentPolicyConsent;
	this.DomesticRateTable = DomesticRateTable;
	this.InternationalRateTable = InternationalRateTable;
	this.SellereBayPaymentProcessStatus = SellereBayPaymentProcessStatus;
	this.SellereBayPaymentProcessConsent = SellereBayPaymentProcessConsent;
}
SellerType.prototype.toJSON = function(with_null) {
	var json = { 
		PaisaPayStatus: (this.PaisaPayStatus === undefined)? null : this.PaisaPayStatus,
		AllowPaymentEdit: (this.AllowPaymentEdit === undefined)? null : this.AllowPaymentEdit,
		BillingCurrency: (this.BillingCurrency === undefined)? null : this.BillingCurrency,
		CheckoutEnabled: (this.CheckoutEnabled === undefined)? null : this.CheckoutEnabled,
		CIPBankAccountStored: (this.CIPBankAccountStored === undefined)? null : this.CIPBankAccountStored,
		GoodStanding: (this.GoodStanding === undefined)? null : this.GoodStanding,
		MerchandizingPref: (this.MerchandizingPref === undefined)? null : this.MerchandizingPref,
		QualifiesForB2BVAT: (this.QualifiesForB2BVAT === undefined)? null : this.QualifiesForB2BVAT,
		SellerGuaranteeLevel: (this.SellerGuaranteeLevel === undefined)? null : this.SellerGuaranteeLevel,
		SellerLevel: (this.SellerLevel === undefined)? null : this.SellerLevel,
		SellerPaymentAddress: (this.SellerPaymentAddress === undefined)? null : this.SellerPaymentAddress.toJSON(),
		SchedulingInfo: (this.SchedulingInfo === undefined)? null : this.SchedulingInfo.toJSON(),
		StoreOwner: (this.StoreOwner === undefined)? null : this.StoreOwner,
		StoreURL: (this.StoreURL === undefined)? null : this.StoreURL,
		SellerBusinessType: (this.SellerBusinessType === undefined)? null : this.SellerBusinessType,
		RegisteredBusinessSeller: (this.RegisteredBusinessSeller === undefined)? null : this.RegisteredBusinessSeller,
		StoreSite: (this.StoreSite === undefined)? null : this.StoreSite,
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod,
		ProStoresPreference: (this.ProStoresPreference === undefined)? null : this.ProStoresPreference.toJSON(),
		CharityRegistered: (this.CharityRegistered === undefined)? null : this.CharityRegistered,
		SafePaymentExempt: (this.SafePaymentExempt === undefined)? null : this.SafePaymentExempt,
		PaisaPayEscrowEMIStatus: (this.PaisaPayEscrowEMIStatus === undefined)? null : this.PaisaPayEscrowEMIStatus,
		CharityAffiliationDetails: (this.CharityAffiliationDetails === undefined)? null : this.CharityAffiliationDetails.toJSON(),
		TransactionPercent: (this.TransactionPercent === undefined)? null : this.TransactionPercent,
		IntegratedMerchantCreditCardInfo: (this.IntegratedMerchantCreditCardInfo === undefined)? null : this.IntegratedMerchantCreditCardInfo.toJSON(),
		FeatureEligibility: (this.FeatureEligibility === undefined)? null : this.FeatureEligibility.toJSON(),
		TopRatedSeller: (this.TopRatedSeller === undefined)? null : this.TopRatedSeller,
		TopRatedSellerDetails: (this.TopRatedSellerDetails === undefined)? null : this.TopRatedSellerDetails.toJSON(),
		RecoupmentPolicyConsent: (this.RecoupmentPolicyConsent === undefined)? null : this.RecoupmentPolicyConsent.toJSON(),
		DomesticRateTable: (this.DomesticRateTable === undefined)? null : this.DomesticRateTable,
		InternationalRateTable: (this.InternationalRateTable === undefined)? null : this.InternationalRateTable,
		SellereBayPaymentProcessStatus: (this.SellereBayPaymentProcessStatus === undefined)? null : this.SellereBayPaymentProcessStatus,
		SellereBayPaymentProcessConsent: (this.SellereBayPaymentProcessConsent === undefined)? null : this.SellereBayPaymentProcessConsent
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
module.exports = SellerType;