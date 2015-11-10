var ListingDurationDefinitionsType = require('./ListingDurationDefinitionsType'),
	ShippingTermRequiredDefinitionType = require('./ShippingTermRequiredDefinitionType'),
	BestOfferEnabledDefinitionType = require('./BestOfferEnabledDefinitionType'),
	DutchBINEnabledDefinitionType = require('./DutchBINEnabledDefinitionType'),
	UserConsentRequiredDefinitionType = require('./UserConsentRequiredDefinitionType'),
	HomePageFeaturedEnabledDefinitionType = require('./HomePageFeaturedEnabledDefinitionType'),
	ProPackEnabledDefinitionType = require('./ProPackEnabledDefinitionType'),
	BasicUpgradePackEnabledDefinitionType = require('./BasicUpgradePackEnabledDefinitionType'),
	ValuePackEnabledDefinitionType = require('./ValuePackEnabledDefinitionType'),
	ProPackPlusEnabledDefinitionType = require('./ProPackPlusEnabledDefinitionType'),
	AdFormatEnabledDefinitionType = require('./AdFormatEnabledDefinitionType'),
	BestOfferCounterEnabledDefinitionType = require('./BestOfferCounterEnabledDefinitionType'),
	BestOfferAutoDeclineEnabledDefinitionType = require('./BestOfferAutoDeclineEnabledDefinitionType'),
	LocalMarketSpecialitySubscriptionDefinitionType = require('./LocalMarketSpecialitySubscriptionDefinitionType'),
	LocalMarketRegularSubscriptionDefinitionType = require('./LocalMarketRegularSubscriptionDefinitionType'),
	LocalMarketPremiumSubscriptionDefinitionType = require('./LocalMarketPremiumSubscriptionDefinitionType'),
	LocalMarketNonSubscriptionDefinitionType = require('./LocalMarketNonSubscriptionDefinitionType'),
	ExpressEnabledDefinitionType = require('./ExpressEnabledDefinitionType'),
	ExpressPicturesRequiredDefinitionType = require('./ExpressPicturesRequiredDefinitionType'),
	ExpressConditionRequiredDefinitionType = require('./ExpressConditionRequiredDefinitionType'),
	MinimumReservePriceDefinitionType = require('./MinimumReservePriceDefinitionType'),
	TCREnabledDefinitionType = require('./TCREnabledDefinitionType'),
	SellerContactDetailsEnabledDefinitionType = require('./SellerContactDetailsEnabledDefinitionType'),
	StoreInventoryEnabledDefinitionType = require('./StoreInventoryEnabledDefinitionType'),
	SkypeMeTransactionalEnabledDefinitionType = require('./SkypeMeTransactionalEnabledDefinitionType'),
	SkypeMeNonTransactionalEnabledDefinitionType = require('./SkypeMeNonTransactionalEnabledDefinitionType'),
	LocalListingDistancesRegularDefinitionType = require('./LocalListingDistancesRegularDefinitionType'),
	LocalListingDistancesSpecialtyDefinitionType = require('./LocalListingDistancesSpecialtyDefinitionType'),
	LocalListingDistancesNonSubscriptionDefinitionType = require('./LocalListingDistancesNonSubscriptionDefinitionType'),
	ClassifiedAdPaymentMethodEnabledDefinitionType = require('./ClassifiedAdPaymentMethodEnabledDefinitionType'),
	ClassifiedAdShippingMethodEnabledDefinitionType = require('./ClassifiedAdShippingMethodEnabledDefinitionType'),
	ClassifiedAdBestOfferEnabledDefinitionType = require('./ClassifiedAdBestOfferEnabledDefinitionType'),
	ClassifiedAdCounterOfferEnabledDefinitionType = require('./ClassifiedAdCounterOfferEnabledDefinitionType'),
	ClassifiedAdAutoDeclineEnabledDefinitionType = require('./ClassifiedAdAutoDeclineEnabledDefinitionType'),
	ClassifiedAdContactByPhoneEnabledDefinitionType = require('./ClassifiedAdContactByPhoneEnabledDefinitionType'),
	ClassifiedAdContactByEmailEnabledDefintionType = require('./ClassifiedAdContactByEmailEnabledDefintionType'),
	SafePaymentRequiredDefinitionType = require('./SafePaymentRequiredDefinitionType'),
	ClassifiedAdPayPerLeadEnabledDefinitionType = require('./ClassifiedAdPayPerLeadEnabledDefinitionType'),
	ItemSpecificsEnabledDefinitionType = require('./ItemSpecificsEnabledDefinitionType'),
	PaisaPayFullEscrowEnabledDefinitionType = require('./PaisaPayFullEscrowEnabledDefinitionType'),
	ISBNIdentifierEnabledDefinitionType = require('./ISBNIdentifierEnabledDefinitionType'),
	UPCIdentifierEnabledDefinitionType = require('./UPCIdentifierEnabledDefinitionType'),
	EANIdentifierEnabledDefinitionType = require('./EANIdentifierEnabledDefinitionType'),
	BrandMPNIdentifierEnabledDefinitionType = require('./BrandMPNIdentifierEnabledDefinitionType'),
	BestOfferAutoAcceptEnabledDefinitionType = require('./BestOfferAutoAcceptEnabledDefinitionType'),
	ClassifiedAdAutoAcceptEnabledDefinitionType = require('./ClassifiedAdAutoAcceptEnabledDefinitionType'),
	CrossBorderTradeNorthAmericaEnabledDefinitionType = require('./CrossBorderTradeNorthAmericaEnabledDefinitionType'),
	CrossBorderTradeGBEnabledDefinitionType = require('./CrossBorderTradeGBEnabledDefinitionType'),
	CrossBorderTradeAustraliaEnabledDefinitionType = require('./CrossBorderTradeAustraliaEnabledDefinitionType'),
	PayPalBuyerProtectionEnabledDefinitionType = require('./PayPalBuyerProtectionEnabledDefinitionType'),
	BuyerGuaranteeEnabledDefinitionType = require('./BuyerGuaranteeEnabledDefinitionType'),
	CombinedFixedPriceTreatmentEnabledDefinitionType = require('./CombinedFixedPriceTreatmentEnabledDefinitionType'),
	ListingEnhancementDurationDefinitionType = require('./ListingEnhancementDurationDefinitionType'),
	INEscrowWorkflowTimelineDefinitionType = require('./INEscrowWorkflowTimelineDefinitionType'),
	PayPalRequiredDefinitionType = require('./PayPalRequiredDefinitionType'),
	eBayMotorsProAdFormatEnabledDefinitionType = require('./eBayMotorsProAdFormatEnabledDefinitionType'),
	eBayMotorsProContactByPhoneEnabledDefinitionType = require('./eBayMotorsProContactByPhoneEnabledDefinitionType'),
	eBayMotorsProPhoneCountDefinitionType = require('./eBayMotorsProPhoneCountDefinitionType'),
	eBayMotorsProContactByAddressEnabledDefinitionType = require('./eBayMotorsProContactByAddressEnabledDefinitionType'),
	eBayMotorsProStreetCountDefinitionType = require('./eBayMotorsProStreetCountDefinitionType'),
	eBayMotorsProCompanyNameEnabledDefinitionType = require('./eBayMotorsProCompanyNameEnabledDefinitionType'),
	eBayMotorsProContactByEmailEnabledDefinitionType = require('./eBayMotorsProContactByEmailEnabledDefinitionType'),
	eBayMotorsProBestOfferEnabledDefinitionType = require('./eBayMotorsProBestOfferEnabledDefinitionType'),
	eBayMotorsProAutoAcceptEnabledDefinitionType = require('./eBayMotorsProAutoAcceptEnabledDefinitionType'),
	eBayMotorsProAutoDeclineEnabledDefinitionType = require('./eBayMotorsProAutoDeclineEnabledDefinitionType'),
	eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType = require('./eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType'),
	eBayMotorsProShippingMethodEnabledDefinitionType = require('./eBayMotorsProShippingMethodEnabledDefinitionType'),
	eBayMotorsProCounterOfferEnabledDefinitionType = require('./eBayMotorsProCounterOfferEnabledDefinitionType'),
	eBayMotorsProSellerContactDetailsEnabledDefinitionType = require('./eBayMotorsProSellerContactDetailsEnabledDefinitionType'),
	LocalMarketAdFormatEnabledDefinitionType = require('./LocalMarketAdFormatEnabledDefinitionType'),
	LocalMarketContactByPhoneEnabledDefinitionType = require('./LocalMarketContactByPhoneEnabledDefinitionType'),
	LocalMarketPhoneCountDefinitionType = require('./LocalMarketPhoneCountDefinitionType'),
	LocalMarketContactByAddressEnabledDefinitionType = require('./LocalMarketContactByAddressEnabledDefinitionType'),
	LocalMarketStreetCountDefinitionType = require('./LocalMarketStreetCountDefinitionType'),
	LocalMarketCompanyNameEnabledDefinitionType = require('./LocalMarketCompanyNameEnabledDefinitionType'),
	LocalMarketContactByEmailEnabledDefinitionType = require('./LocalMarketContactByEmailEnabledDefinitionType'),
	LocalMarketBestOfferEnabledDefinitionType = require('./LocalMarketBestOfferEnabledDefinitionType'),
	LocalMarketAutoAcceptEnabledDefinitionType = require('./LocalMarketAutoAcceptEnabledDefinitionType'),
	LocalMarketAutoDeclineEnabledDefinitionType = require('./LocalMarketAutoDeclineEnabledDefinitionType'),
	LocalMarketPaymentMethodCheckOutEnabledDefinitionType = require('./LocalMarketPaymentMethodCheckOutEnabledDefinitionType'),
	LocalMarketShippingMethodEnabledDefinitionType = require('./LocalMarketShippingMethodEnabledDefinitionType'),
	LocalMarketCounterOfferEnabledDefinitionType = require('./LocalMarketCounterOfferEnabledDefinitionType'),
	LocalMarketSellerContactDetailsEnabledDefinitionType = require('./LocalMarketSellerContactDetailsEnabledDefinitionType'),
	ClassifiedAdPhoneCountDefinitionType = require('./ClassifiedAdPhoneCountDefinitionType'),
	ClassifiedAdContactByAddressEnabledDefinitionType = require('./ClassifiedAdContactByAddressEnabledDefinitionType'),
	ClassifiedAdStreetCountDefinitionType = require('./ClassifiedAdStreetCountDefinitionType'),
	ClassifiedAdCompanyNameEnabledDefinitionType = require('./ClassifiedAdCompanyNameEnabledDefinitionType'),
	SpecialitySubscriptionDefinitionType = require('./SpecialitySubscriptionDefinitionType'),
	RegularSubscriptionDefinitionType = require('./RegularSubscriptionDefinitionType'),
	PremiumSubscriptionDefinitionType = require('./PremiumSubscriptionDefinitionType'),
	NonSubscriptionDefinitionType = require('./NonSubscriptionDefinitionType'),
	ReturnPolicyEnabledDefinitionType = require('./ReturnPolicyEnabledDefinitionType'),
	HandlingTimeEnabledDefinitionType = require('./HandlingTimeEnabledDefinitionType'),
	PayPalRequiredForStoreOwnerDefinitionType = require('./PayPalRequiredForStoreOwnerDefinitionType'),
	ReviseQuantityAllowedDefinitionType = require('./ReviseQuantityAllowedDefinitionType'),
	RevisePriceAllowedDefinitionType = require('./RevisePriceAllowedDefinitionType'),
	StoreOwnerExtendedListingDurationsEnabledDefinitionType = require('./StoreOwnerExtendedListingDurationsEnabledDefinitionType'),
	StoreOwnerExtendedListingDurationsDefinitionType = require('./StoreOwnerExtendedListingDurationsDefinitionType'),
	PaymentMethodDefinitionType = require('./PaymentMethodDefinitionType'),
	Group1MaxFlatShippingCostDefinitionType = require('./Group1MaxFlatShippingCostDefinitionType'),
	Group2MaxFlatShippingCostDefinitionType = require('./Group2MaxFlatShippingCostDefinitionType'),
	Group3MaxFlatShippingCostDefinitionType = require('./Group3MaxFlatShippingCostDefinitionType'),
	MaxFlatShippingCostCBTExemptDefinitionType = require('./MaxFlatShippingCostCBTExemptDefinitionType'),
	MaxFlatShippingCostDefinitionType = require('./MaxFlatShippingCostDefinitionType'),
	VariationsEnabledDefinitionType = require('./VariationsEnabledDefinitionType'),
	AttributeConversionEnabledFeatureDefinitionType = require('./AttributeConversionEnabledFeatureDefinitionType'),
	FreeGalleryPlusEnabledDefinitionType = require('./FreeGalleryPlusEnabledDefinitionType'),
	FreePicturePackEnabledDefinitionType = require('./FreePicturePackEnabledDefinitionType'),
	ItemCompatibilityEnabledDefinitionType = require('./ItemCompatibilityEnabledDefinitionType'),
	MaxItemCompatibilityDefinitionType = require('./MaxItemCompatibilityDefinitionType'),
	MinItemCompatibilityDefinitionType = require('./MinItemCompatibilityDefinitionType'),
	ConditionEnabledDefinitionType = require('./ConditionEnabledDefinitionType'),
	ConditionValuesDefinitionType = require('./ConditionValuesDefinitionType'),
	ValueCategoryDefinitionType = require('./ValueCategoryDefinitionType'),
	ProductCreationEnabledDefinitionType = require('./ProductCreationEnabledDefinitionType'),
	EANEnabledDefinitionType = require('./EANEnabledDefinitionType'),
	ISBNEnabledDefinitionType = require('./ISBNEnabledDefinitionType'),
	UPCEnabledDefinitionType = require('./UPCEnabledDefinitionType'),
	CompatibleVehicleTypeDefinitionType = require('./CompatibleVehicleTypeDefinitionType'),
	MaxGranularFitmentCountDefinitionType = require('./MaxGranularFitmentCountDefinitionType'),
	PaymentOptionsGroupEnabledDefinitionType = require('./PaymentOptionsGroupEnabledDefinitionType'),
	ProfileCategoryGroupDefinitionType = require('./ProfileCategoryGroupDefinitionType'),
	VINSupportedDefinitionType = require('./VINSupportedDefinitionType'),
	VRMSupportedDefinitionType = require('./VRMSupportedDefinitionType'),
	SellerProvidedTitleSupportedDefinitionType = require('./SellerProvidedTitleSupportedDefinitionType'),
	DepositSupportedDefinitionType = require('./DepositSupportedDefinitionType'),
	GlobalShippingEnabledDefinitionType = require('./GlobalShippingEnabledDefinitionType'),
	AdditionalCompatibilityEnabledDefinitionType = require('./AdditionalCompatibilityEnabledDefinitionType'),
	PickupDropOffEnabledDefinitionType = require('./PickupDropOffEnabledDefinitionType'),
	DigitalGoodDeliveryEnabledDefinitionType = require('./DigitalGoodDeliveryEnabledDefinitionType');

function FeatureDefinitionsType(ListingDurations, ShippingTermsRequired, BestOfferEnabled, DutchBINEnabled, UserConsentRequired, HomePageFeaturedEnabled, ProPackEnabled, BasicUpgradePackEnabled, ValuePackEnabled, ProPackPlusEnabled, AdFormatEnabled, BestOfferCounterEnabled, BestOfferAutoDeclineEnabled, LocalMarketSpecialitySubscription, LocalMarketRegularSubscription, LocalMarketPremiumSubscription, LocalMarketNonSubscription, ExpressEnabled, ExpressPicturesRequired, ExpressConditionRequired, MinimumReservePrice, TransactionConfirmationRequestEnabled, SellerContactDetailsEnabled, StoreInventoryEnabled, SkypeMeTransactionalEnabled, SkypeMeNonTransactionalEnabled, LocalListingDistancesRegular, LocalListingDistancesSpecialty, LocalListingDistancesNonSubscription, ClassifiedAdPaymentMethodEnabled, ClassifiedAdShippingMethodEnabled, ClassifiedAdBestOfferEnabled, ClassifiedAdCounterOfferEnabled, ClassifiedAdAutoDeclineEnabled, ClassifiedAdContactByPhoneEnabled, ClassifiedAdContactByEmailEnabled, SafePaymentRequired, ClassifiedAdPayPerLeadEnabled, ItemSpecificsEnabled, PaisaPayFullEscrowEnabled, ISBNIdentifierEnabled, UPCIdentifierEnabled, EANIdentifierEnabled, BrandMPNIdentifierEnabled, BestOfferAutoAcceptEnabled, ClassifiedAdAutoAcceptEnabled, CrossBorderTradeNorthAmericaEnabled, CrossBorderTradeGBEnabled, CrossBorderTradeAustraliaEnabled, PayPalBuyerProtectionEnabled, BuyerGuaranteeEnabled, CombinedFixedPriceTreatmentEnabled, GalleryFeaturedDurations, INEscrowWorkflowTimeline, PayPalRequired, eBayMotorsProAdFormatEnabled, eBayMotorsProContactByPhoneEnabled, eBayMotorsProPhoneCount, eBayMotorsProContactByAddressEnabled, eBayMotorsProStreetCount, eBayMotorsProCompanyNameEnabled, eBayMotorsProContactByEmailEnabled, eBayMotorsProBestOfferEnabled, eBayMotorsProAutoAcceptEnabled, eBayMotorsProAutoDeclineEnabled, eBayMotorsProPaymentMethodCheckOutEnabled, eBayMotorsProShippingMethodEnabled, eBayMotorsProCounterOfferEnabled, eBayMotorsProSellerContactDetailsEnabled, LocalMarketAdFormatEnabled, LocalMarketContactByPhoneEnabled, LocalMarketPhoneCount, LocalMarketContactByAddressEnabled, LocalMarketStreetCount, LocalMarketCompanyNameEnabled, LocalMarketContactByEmailEnabled, LocalMarketBestOfferEnabled, LocalMarketAutoAcceptEnabled, LocalMarketAutoDeclineEnabled, LocalMarketPaymentMethodCheckOutEnabled, LocalMarketShippingMethodEnabled, LocalMarketCounterOfferEnabled, LocalMarketSellerContactDetailsEnabled, ClassifiedAdPhoneCount, ClassifiedAdContactByAddressEnabled, ClassifiedAdStreetCount, ClassifiedAdCompanyNameEnabled, SpecialitySubscription, RegularSubscription, PremiumSubscription, NonSubscription, ReturnPolicyEnabled, HandlingTimeEnabled, PayPalRequiredForStoreOwner, ReviseQuantityAllowed, RevisePriceAllowed, StoreOwnerExtendedListingDurationsEnabled, StoreOwnerExtendedListingDurations, PaymentMethod, Group1MaxFlatShippingCost, Group2MaxFlatShippingCost, Group3MaxFlatShippingCost, MaxFlatShippingCostCBTExempt, MaxFlatShippingCost, VariationsEnabled, AttributeConversionEnabled, FreeGalleryPlusEnabled, FreePicturePackEnabled, ItemCompatibilityEnabled, MaxItemCompatibility, MinItemCompatibility, ConditionEnabled, ConditionValues, ValueCategory, ProductCreationEnabled, EANEnabled, ISBNEnabled, UPCEnabled, CompatibleVehicleType, MaxGranularFitmentCount, PaymentOptionsGroup, ShippingProfileCategoryGroup, PaymentProfileCategoryGroup, ReturnPolicyProfileCategoryGroup, VINSupported, VRMSupported, SellerProvidedTitleSupported, DepositSupported, GlobalShippingEnabled, AdditionalCompatibilityEnabled, PickupDropOffEnabled, DigitalGoodDeliveryEnabled) {

	/**
	  Documentation
	   
                A container node for definitions of the features specified in FeatureID in the GetCategoryFeatures request. If no feature ID was specified, all definitions are returned.
            
	 */

	/**
	 * Arrays
	 */
	var _ListingDurations;
	var _ShippingTermsRequired;
	var _BestOfferEnabled;
	var _DutchBINEnabled;
	var _UserConsentRequired;
	var _HomePageFeaturedEnabled;
	var _ProPackEnabled;
	var _BasicUpgradePackEnabled;
	var _ValuePackEnabled;
	var _ProPackPlusEnabled;
	var _AdFormatEnabled;
	var _BestOfferCounterEnabled;
	var _BestOfferAutoDeclineEnabled;
	var _LocalMarketSpecialitySubscription;
	var _LocalMarketRegularSubscription;
	var _LocalMarketPremiumSubscription;
	var _LocalMarketNonSubscription;
	var _ExpressEnabled;
	var _ExpressPicturesRequired;
	var _ExpressConditionRequired;
	var _MinimumReservePrice;
	var _TransactionConfirmationRequestEnabled;
	var _SellerContactDetailsEnabled;
	var _StoreInventoryEnabled;
	var _SkypeMeTransactionalEnabled;
	var _SkypeMeNonTransactionalEnabled;
	var _LocalListingDistancesRegular;
	var _LocalListingDistancesSpecialty;
	var _LocalListingDistancesNonSubscription;
	var _ClassifiedAdPaymentMethodEnabled;
	var _ClassifiedAdShippingMethodEnabled;
	var _ClassifiedAdBestOfferEnabled;
	var _ClassifiedAdCounterOfferEnabled;
	var _ClassifiedAdAutoDeclineEnabled;
	var _ClassifiedAdContactByPhoneEnabled;
	var _ClassifiedAdContactByEmailEnabled;
	var _SafePaymentRequired;
	var _ClassifiedAdPayPerLeadEnabled;
	var _ItemSpecificsEnabled;
	var _PaisaPayFullEscrowEnabled;
	var _ISBNIdentifierEnabled;
	var _UPCIdentifierEnabled;
	var _EANIdentifierEnabled;
	var _BrandMPNIdentifierEnabled;
	var _BestOfferAutoAcceptEnabled;
	var _ClassifiedAdAutoAcceptEnabled;
	var _CrossBorderTradeNorthAmericaEnabled;
	var _CrossBorderTradeGBEnabled;
	var _CrossBorderTradeAustraliaEnabled;
	var _PayPalBuyerProtectionEnabled;
	var _BuyerGuaranteeEnabled;
	var _CombinedFixedPriceTreatmentEnabled;
	var _GalleryFeaturedDurations;
	var _INEscrowWorkflowTimeline;
	var _PayPalRequired;
	var _eBayMotorsProAdFormatEnabled;
	var _eBayMotorsProContactByPhoneEnabled;
	var _eBayMotorsProPhoneCount;
	var _eBayMotorsProContactByAddressEnabled;
	var _eBayMotorsProStreetCount;
	var _eBayMotorsProCompanyNameEnabled;
	var _eBayMotorsProContactByEmailEnabled;
	var _eBayMotorsProBestOfferEnabled;
	var _eBayMotorsProAutoAcceptEnabled;
	var _eBayMotorsProAutoDeclineEnabled;
	var _eBayMotorsProPaymentMethodCheckOutEnabled;
	var _eBayMotorsProShippingMethodEnabled;
	var _eBayMotorsProCounterOfferEnabled;
	var _eBayMotorsProSellerContactDetailsEnabled;
	var _LocalMarketAdFormatEnabled;
	var _LocalMarketContactByPhoneEnabled;
	var _LocalMarketPhoneCount;
	var _LocalMarketContactByAddressEnabled;
	var _LocalMarketStreetCount;
	var _LocalMarketCompanyNameEnabled;
	var _LocalMarketContactByEmailEnabled;
	var _LocalMarketBestOfferEnabled;
	var _LocalMarketAutoAcceptEnabled;
	var _LocalMarketAutoDeclineEnabled;
	var _LocalMarketPaymentMethodCheckOutEnabled;
	var _LocalMarketShippingMethodEnabled;
	var _LocalMarketCounterOfferEnabled;
	var _LocalMarketSellerContactDetailsEnabled;
	var _ClassifiedAdPhoneCount;
	var _ClassifiedAdContactByAddressEnabled;
	var _ClassifiedAdStreetCount;
	var _ClassifiedAdCompanyNameEnabled;
	var _SpecialitySubscription;
	var _RegularSubscription;
	var _PremiumSubscription;
	var _NonSubscription;
	var _ReturnPolicyEnabled;
	var _HandlingTimeEnabled;
	var _PayPalRequiredForStoreOwner;
	var _ReviseQuantityAllowed;
	var _RevisePriceAllowed;
	var _StoreOwnerExtendedListingDurationsEnabled;
	var _StoreOwnerExtendedListingDurations;
	var _PaymentMethod;
	var _Group1MaxFlatShippingCost;
	var _Group2MaxFlatShippingCost;
	var _Group3MaxFlatShippingCost;
	var _MaxFlatShippingCostCBTExempt;
	var _MaxFlatShippingCost;
	var _VariationsEnabled;
	var _AttributeConversionEnabled;
	var _FreeGalleryPlusEnabled;
	var _FreePicturePackEnabled;
	var _ItemCompatibilityEnabled;
	var _MaxItemCompatibility;
	var _MinItemCompatibility;
	var _ConditionEnabled;
	var _ConditionValues;
	var _ValueCategory;
	var _ProductCreationEnabled;
	var _EANEnabled;
	var _ISBNEnabled;
	var _UPCEnabled;
	var _CompatibleVehicleType;
	var _MaxGranularFitmentCount;
	var _PaymentOptionsGroup;
	var _ShippingProfileCategoryGroup;
	var _PaymentProfileCategoryGroup;
	var _ReturnPolicyProfileCategoryGroup;
	var _VINSupported;
	var _VRMSupported;
	var _SellerProvidedTitleSupported;
	var _DepositSupported;
	var _GlobalShippingEnabled;
	var _AdditionalCompatibilityEnabled;
	var _PickupDropOffEnabled;
	var _DigitalGoodDeliveryEnabled;
	Object.defineProperty(this, 'ListingDurations', {
		 get: function(){
			 return _ListingDurations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingDurationDefinitionsType){ 
					_ListingDurations = value; 
				}else{
					console.log('ListingDurations expects type ListingDurationDefinitionsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingTermsRequired', {
		 get: function(){
			 return _ShippingTermsRequired;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingTermRequiredDefinitionType){ 
					_ShippingTermsRequired = value; 
				}else{
					console.log('ShippingTermsRequired expects type ShippingTermRequiredDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferEnabled', {
		 get: function(){
			 return _BestOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferEnabledDefinitionType){ 
					_BestOfferEnabled = value; 
				}else{
					console.log('BestOfferEnabled expects type BestOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DutchBINEnabled', {
		 get: function(){
			 return _DutchBINEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DutchBINEnabledDefinitionType){ 
					_DutchBINEnabled = value; 
				}else{
					console.log('DutchBINEnabled expects type DutchBINEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UserConsentRequired', {
		 get: function(){
			 return _UserConsentRequired;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserConsentRequiredDefinitionType){ 
					_UserConsentRequired = value; 
				}else{
					console.log('UserConsentRequired expects type UserConsentRequiredDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'HomePageFeaturedEnabled', {
		 get: function(){
			 return _HomePageFeaturedEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof HomePageFeaturedEnabledDefinitionType){ 
					_HomePageFeaturedEnabled = value; 
				}else{
					console.log('HomePageFeaturedEnabled expects type HomePageFeaturedEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProPackEnabled', {
		 get: function(){
			 return _ProPackEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProPackEnabledDefinitionType){ 
					_ProPackEnabled = value; 
				}else{
					console.log('ProPackEnabled expects type ProPackEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BasicUpgradePackEnabled', {
		 get: function(){
			 return _BasicUpgradePackEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BasicUpgradePackEnabledDefinitionType){ 
					_BasicUpgradePackEnabled = value; 
				}else{
					console.log('BasicUpgradePackEnabled expects type BasicUpgradePackEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ValuePackEnabled', {
		 get: function(){
			 return _ValuePackEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ValuePackEnabledDefinitionType){ 
					_ValuePackEnabled = value; 
				}else{
					console.log('ValuePackEnabled expects type ValuePackEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProPackPlusEnabled', {
		 get: function(){
			 return _ProPackPlusEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProPackPlusEnabledDefinitionType){ 
					_ProPackPlusEnabled = value; 
				}else{
					console.log('ProPackPlusEnabled expects type ProPackPlusEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AdFormatEnabled', {
		 get: function(){
			 return _AdFormatEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AdFormatEnabledDefinitionType){ 
					_AdFormatEnabled = value; 
				}else{
					console.log('AdFormatEnabled expects type AdFormatEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferCounterEnabled', {
		 get: function(){
			 return _BestOfferCounterEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferCounterEnabledDefinitionType){ 
					_BestOfferCounterEnabled = value; 
				}else{
					console.log('BestOfferCounterEnabled expects type BestOfferCounterEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferAutoDeclineEnabled', {
		 get: function(){
			 return _BestOfferAutoDeclineEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferAutoDeclineEnabledDefinitionType){ 
					_BestOfferAutoDeclineEnabled = value; 
				}else{
					console.log('BestOfferAutoDeclineEnabled expects type BestOfferAutoDeclineEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketSpecialitySubscription', {
		 get: function(){
			 return _LocalMarketSpecialitySubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketSpecialitySubscriptionDefinitionType){ 
					_LocalMarketSpecialitySubscription = value; 
				}else{
					console.log('LocalMarketSpecialitySubscription expects type LocalMarketSpecialitySubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketRegularSubscription', {
		 get: function(){
			 return _LocalMarketRegularSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketRegularSubscriptionDefinitionType){ 
					_LocalMarketRegularSubscription = value; 
				}else{
					console.log('LocalMarketRegularSubscription expects type LocalMarketRegularSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketPremiumSubscription', {
		 get: function(){
			 return _LocalMarketPremiumSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketPremiumSubscriptionDefinitionType){ 
					_LocalMarketPremiumSubscription = value; 
				}else{
					console.log('LocalMarketPremiumSubscription expects type LocalMarketPremiumSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketNonSubscription', {
		 get: function(){
			 return _LocalMarketNonSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketNonSubscriptionDefinitionType){ 
					_LocalMarketNonSubscription = value; 
				}else{
					console.log('LocalMarketNonSubscription expects type LocalMarketNonSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExpressEnabled', {
		 get: function(){
			 return _ExpressEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExpressEnabledDefinitionType){ 
					_ExpressEnabled = value; 
				}else{
					console.log('ExpressEnabled expects type ExpressEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExpressPicturesRequired', {
		 get: function(){
			 return _ExpressPicturesRequired;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExpressPicturesRequiredDefinitionType){ 
					_ExpressPicturesRequired = value; 
				}else{
					console.log('ExpressPicturesRequired expects type ExpressPicturesRequiredDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExpressConditionRequired', {
		 get: function(){
			 return _ExpressConditionRequired;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExpressConditionRequiredDefinitionType){ 
					_ExpressConditionRequired = value; 
				}else{
					console.log('ExpressConditionRequired expects type ExpressConditionRequiredDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinimumReservePrice', {
		 get: function(){
			 return _MinimumReservePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MinimumReservePriceDefinitionType){ 
					_MinimumReservePrice = value; 
				}else{
					console.log('MinimumReservePrice expects type MinimumReservePriceDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TransactionConfirmationRequestEnabled', {
		 get: function(){
			 return _TransactionConfirmationRequestEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TCREnabledDefinitionType){ 
					_TransactionConfirmationRequestEnabled = value; 
				}else{
					console.log('TransactionConfirmationRequestEnabled expects type TCREnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerContactDetailsEnabled', {
		 get: function(){
			 return _SellerContactDetailsEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerContactDetailsEnabledDefinitionType){ 
					_SellerContactDetailsEnabled = value; 
				}else{
					console.log('SellerContactDetailsEnabled expects type SellerContactDetailsEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'StoreInventoryEnabled', {
		 get: function(){
			 return _StoreInventoryEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreInventoryEnabledDefinitionType){ 
					_StoreInventoryEnabled = value; 
				}else{
					console.log('StoreInventoryEnabled expects type StoreInventoryEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SkypeMeTransactionalEnabled', {
		 get: function(){
			 return _SkypeMeTransactionalEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SkypeMeTransactionalEnabledDefinitionType){ 
					_SkypeMeTransactionalEnabled = value; 
				}else{
					console.log('SkypeMeTransactionalEnabled expects type SkypeMeTransactionalEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SkypeMeNonTransactionalEnabled', {
		 get: function(){
			 return _SkypeMeNonTransactionalEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SkypeMeNonTransactionalEnabledDefinitionType){ 
					_SkypeMeNonTransactionalEnabled = value; 
				}else{
					console.log('SkypeMeNonTransactionalEnabled expects type SkypeMeNonTransactionalEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalListingDistancesRegular', {
		 get: function(){
			 return _LocalListingDistancesRegular;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalListingDistancesRegularDefinitionType){ 
					_LocalListingDistancesRegular = value; 
				}else{
					console.log('LocalListingDistancesRegular expects type LocalListingDistancesRegularDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalListingDistancesSpecialty', {
		 get: function(){
			 return _LocalListingDistancesSpecialty;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalListingDistancesSpecialtyDefinitionType){ 
					_LocalListingDistancesSpecialty = value; 
				}else{
					console.log('LocalListingDistancesSpecialty expects type LocalListingDistancesSpecialtyDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalListingDistancesNonSubscription', {
		 get: function(){
			 return _LocalListingDistancesNonSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalListingDistancesNonSubscriptionDefinitionType){ 
					_LocalListingDistancesNonSubscription = value; 
				}else{
					console.log('LocalListingDistancesNonSubscription expects type LocalListingDistancesNonSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdPaymentMethodEnabled', {
		 get: function(){
			 return _ClassifiedAdPaymentMethodEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdPaymentMethodEnabledDefinitionType){ 
					_ClassifiedAdPaymentMethodEnabled = value; 
				}else{
					console.log('ClassifiedAdPaymentMethodEnabled expects type ClassifiedAdPaymentMethodEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdShippingMethodEnabled', {
		 get: function(){
			 return _ClassifiedAdShippingMethodEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdShippingMethodEnabledDefinitionType){ 
					_ClassifiedAdShippingMethodEnabled = value; 
				}else{
					console.log('ClassifiedAdShippingMethodEnabled expects type ClassifiedAdShippingMethodEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdBestOfferEnabled', {
		 get: function(){
			 return _ClassifiedAdBestOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdBestOfferEnabledDefinitionType){ 
					_ClassifiedAdBestOfferEnabled = value; 
				}else{
					console.log('ClassifiedAdBestOfferEnabled expects type ClassifiedAdBestOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdCounterOfferEnabled', {
		 get: function(){
			 return _ClassifiedAdCounterOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdCounterOfferEnabledDefinitionType){ 
					_ClassifiedAdCounterOfferEnabled = value; 
				}else{
					console.log('ClassifiedAdCounterOfferEnabled expects type ClassifiedAdCounterOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdAutoDeclineEnabled', {
		 get: function(){
			 return _ClassifiedAdAutoDeclineEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdAutoDeclineEnabledDefinitionType){ 
					_ClassifiedAdAutoDeclineEnabled = value; 
				}else{
					console.log('ClassifiedAdAutoDeclineEnabled expects type ClassifiedAdAutoDeclineEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdContactByPhoneEnabled', {
		 get: function(){
			 return _ClassifiedAdContactByPhoneEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdContactByPhoneEnabledDefinitionType){ 
					_ClassifiedAdContactByPhoneEnabled = value; 
				}else{
					console.log('ClassifiedAdContactByPhoneEnabled expects type ClassifiedAdContactByPhoneEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdContactByEmailEnabled', {
		 get: function(){
			 return _ClassifiedAdContactByEmailEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdContactByEmailEnabledDefintionType){ 
					_ClassifiedAdContactByEmailEnabled = value; 
				}else{
					console.log('ClassifiedAdContactByEmailEnabled expects type ClassifiedAdContactByEmailEnabledDefintionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SafePaymentRequired', {
		 get: function(){
			 return _SafePaymentRequired;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SafePaymentRequiredDefinitionType){ 
					_SafePaymentRequired = value; 
				}else{
					console.log('SafePaymentRequired expects type SafePaymentRequiredDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdPayPerLeadEnabled', {
		 get: function(){
			 return _ClassifiedAdPayPerLeadEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdPayPerLeadEnabledDefinitionType){ 
					_ClassifiedAdPayPerLeadEnabled = value; 
				}else{
					console.log('ClassifiedAdPayPerLeadEnabled expects type ClassifiedAdPayPerLeadEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemSpecificsEnabled', {
		 get: function(){
			 return _ItemSpecificsEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemSpecificsEnabledDefinitionType){ 
					_ItemSpecificsEnabled = value; 
				}else{
					console.log('ItemSpecificsEnabled expects type ItemSpecificsEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaisaPayFullEscrowEnabled', {
		 get: function(){
			 return _PaisaPayFullEscrowEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaisaPayFullEscrowEnabledDefinitionType){ 
					_PaisaPayFullEscrowEnabled = value; 
				}else{
					console.log('PaisaPayFullEscrowEnabled expects type PaisaPayFullEscrowEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ISBNIdentifierEnabled', {
		 get: function(){
			 return _ISBNIdentifierEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ISBNIdentifierEnabledDefinitionType){ 
					_ISBNIdentifierEnabled = value; 
				}else{
					console.log('ISBNIdentifierEnabled expects type ISBNIdentifierEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UPCIdentifierEnabled', {
		 get: function(){
			 return _UPCIdentifierEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UPCIdentifierEnabledDefinitionType){ 
					_UPCIdentifierEnabled = value; 
				}else{
					console.log('UPCIdentifierEnabled expects type UPCIdentifierEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EANIdentifierEnabled', {
		 get: function(){
			 return _EANIdentifierEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EANIdentifierEnabledDefinitionType){ 
					_EANIdentifierEnabled = value; 
				}else{
					console.log('EANIdentifierEnabled expects type EANIdentifierEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BrandMPNIdentifierEnabled', {
		 get: function(){
			 return _BrandMPNIdentifierEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BrandMPNIdentifierEnabledDefinitionType){ 
					_BrandMPNIdentifierEnabled = value; 
				}else{
					console.log('BrandMPNIdentifierEnabled expects type BrandMPNIdentifierEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferAutoAcceptEnabled', {
		 get: function(){
			 return _BestOfferAutoAcceptEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferAutoAcceptEnabledDefinitionType){ 
					_BestOfferAutoAcceptEnabled = value; 
				}else{
					console.log('BestOfferAutoAcceptEnabled expects type BestOfferAutoAcceptEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdAutoAcceptEnabled', {
		 get: function(){
			 return _ClassifiedAdAutoAcceptEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdAutoAcceptEnabledDefinitionType){ 
					_ClassifiedAdAutoAcceptEnabled = value; 
				}else{
					console.log('ClassifiedAdAutoAcceptEnabled expects type ClassifiedAdAutoAcceptEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossBorderTradeNorthAmericaEnabled', {
		 get: function(){
			 return _CrossBorderTradeNorthAmericaEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CrossBorderTradeNorthAmericaEnabledDefinitionType){ 
					_CrossBorderTradeNorthAmericaEnabled = value; 
				}else{
					console.log('CrossBorderTradeNorthAmericaEnabled expects type CrossBorderTradeNorthAmericaEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossBorderTradeGBEnabled', {
		 get: function(){
			 return _CrossBorderTradeGBEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CrossBorderTradeGBEnabledDefinitionType){ 
					_CrossBorderTradeGBEnabled = value; 
				}else{
					console.log('CrossBorderTradeGBEnabled expects type CrossBorderTradeGBEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossBorderTradeAustraliaEnabled', {
		 get: function(){
			 return _CrossBorderTradeAustraliaEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CrossBorderTradeAustraliaEnabledDefinitionType){ 
					_CrossBorderTradeAustraliaEnabled = value; 
				}else{
					console.log('CrossBorderTradeAustraliaEnabled expects type CrossBorderTradeAustraliaEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PayPalBuyerProtectionEnabled', {
		 get: function(){
			 return _PayPalBuyerProtectionEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayPalBuyerProtectionEnabledDefinitionType){ 
					_PayPalBuyerProtectionEnabled = value; 
				}else{
					console.log('PayPalBuyerProtectionEnabled expects type PayPalBuyerProtectionEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerGuaranteeEnabled', {
		 get: function(){
			 return _BuyerGuaranteeEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerGuaranteeEnabledDefinitionType){ 
					_BuyerGuaranteeEnabled = value; 
				}else{
					console.log('BuyerGuaranteeEnabled expects type BuyerGuaranteeEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CombinedFixedPriceTreatmentEnabled', {
		 get: function(){
			 return _CombinedFixedPriceTreatmentEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CombinedFixedPriceTreatmentEnabledDefinitionType){ 
					_CombinedFixedPriceTreatmentEnabled = value; 
				}else{
					console.log('CombinedFixedPriceTreatmentEnabled expects type CombinedFixedPriceTreatmentEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'GalleryFeaturedDurations', {
		 get: function(){
			 return _GalleryFeaturedDurations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingEnhancementDurationDefinitionType){ 
					_GalleryFeaturedDurations = value; 
				}else{
					console.log('GalleryFeaturedDurations expects type ListingEnhancementDurationDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'INEscrowWorkflowTimeline', {
		 get: function(){
			 return _INEscrowWorkflowTimeline;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof INEscrowWorkflowTimelineDefinitionType){ 
					_INEscrowWorkflowTimeline = value; 
				}else{
					console.log('INEscrowWorkflowTimeline expects type INEscrowWorkflowTimelineDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PayPalRequired', {
		 get: function(){
			 return _PayPalRequired;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayPalRequiredDefinitionType){ 
					_PayPalRequired = value; 
				}else{
					console.log('PayPalRequired expects type PayPalRequiredDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProAdFormatEnabled', {
		 get: function(){
			 return _eBayMotorsProAdFormatEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProAdFormatEnabledDefinitionType){ 
					_eBayMotorsProAdFormatEnabled = value; 
				}else{
					console.log('eBayMotorsProAdFormatEnabled expects type eBayMotorsProAdFormatEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProContactByPhoneEnabled', {
		 get: function(){
			 return _eBayMotorsProContactByPhoneEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProContactByPhoneEnabledDefinitionType){ 
					_eBayMotorsProContactByPhoneEnabled = value; 
				}else{
					console.log('eBayMotorsProContactByPhoneEnabled expects type eBayMotorsProContactByPhoneEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProPhoneCount', {
		 get: function(){
			 return _eBayMotorsProPhoneCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProPhoneCountDefinitionType){ 
					_eBayMotorsProPhoneCount = value; 
				}else{
					console.log('eBayMotorsProPhoneCount expects type eBayMotorsProPhoneCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProContactByAddressEnabled', {
		 get: function(){
			 return _eBayMotorsProContactByAddressEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProContactByAddressEnabledDefinitionType){ 
					_eBayMotorsProContactByAddressEnabled = value; 
				}else{
					console.log('eBayMotorsProContactByAddressEnabled expects type eBayMotorsProContactByAddressEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProStreetCount', {
		 get: function(){
			 return _eBayMotorsProStreetCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProStreetCountDefinitionType){ 
					_eBayMotorsProStreetCount = value; 
				}else{
					console.log('eBayMotorsProStreetCount expects type eBayMotorsProStreetCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProCompanyNameEnabled', {
		 get: function(){
			 return _eBayMotorsProCompanyNameEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProCompanyNameEnabledDefinitionType){ 
					_eBayMotorsProCompanyNameEnabled = value; 
				}else{
					console.log('eBayMotorsProCompanyNameEnabled expects type eBayMotorsProCompanyNameEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProContactByEmailEnabled', {
		 get: function(){
			 return _eBayMotorsProContactByEmailEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProContactByEmailEnabledDefinitionType){ 
					_eBayMotorsProContactByEmailEnabled = value; 
				}else{
					console.log('eBayMotorsProContactByEmailEnabled expects type eBayMotorsProContactByEmailEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProBestOfferEnabled', {
		 get: function(){
			 return _eBayMotorsProBestOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProBestOfferEnabledDefinitionType){ 
					_eBayMotorsProBestOfferEnabled = value; 
				}else{
					console.log('eBayMotorsProBestOfferEnabled expects type eBayMotorsProBestOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProAutoAcceptEnabled', {
		 get: function(){
			 return _eBayMotorsProAutoAcceptEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProAutoAcceptEnabledDefinitionType){ 
					_eBayMotorsProAutoAcceptEnabled = value; 
				}else{
					console.log('eBayMotorsProAutoAcceptEnabled expects type eBayMotorsProAutoAcceptEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProAutoDeclineEnabled', {
		 get: function(){
			 return _eBayMotorsProAutoDeclineEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProAutoDeclineEnabledDefinitionType){ 
					_eBayMotorsProAutoDeclineEnabled = value; 
				}else{
					console.log('eBayMotorsProAutoDeclineEnabled expects type eBayMotorsProAutoDeclineEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProPaymentMethodCheckOutEnabled', {
		 get: function(){
			 return _eBayMotorsProPaymentMethodCheckOutEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType){ 
					_eBayMotorsProPaymentMethodCheckOutEnabled = value; 
				}else{
					console.log('eBayMotorsProPaymentMethodCheckOutEnabled expects type eBayMotorsProPaymentMethodCheckOutEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProShippingMethodEnabled', {
		 get: function(){
			 return _eBayMotorsProShippingMethodEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProShippingMethodEnabledDefinitionType){ 
					_eBayMotorsProShippingMethodEnabled = value; 
				}else{
					console.log('eBayMotorsProShippingMethodEnabled expects type eBayMotorsProShippingMethodEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProCounterOfferEnabled', {
		 get: function(){
			 return _eBayMotorsProCounterOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProCounterOfferEnabledDefinitionType){ 
					_eBayMotorsProCounterOfferEnabled = value; 
				}else{
					console.log('eBayMotorsProCounterOfferEnabled expects type eBayMotorsProCounterOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'eBayMotorsProSellerContactDetailsEnabled', {
		 get: function(){
			 return _eBayMotorsProSellerContactDetailsEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof eBayMotorsProSellerContactDetailsEnabledDefinitionType){ 
					_eBayMotorsProSellerContactDetailsEnabled = value; 
				}else{
					console.log('eBayMotorsProSellerContactDetailsEnabled expects type eBayMotorsProSellerContactDetailsEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketAdFormatEnabled', {
		 get: function(){
			 return _LocalMarketAdFormatEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketAdFormatEnabledDefinitionType){ 
					_LocalMarketAdFormatEnabled = value; 
				}else{
					console.log('LocalMarketAdFormatEnabled expects type LocalMarketAdFormatEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketContactByPhoneEnabled', {
		 get: function(){
			 return _LocalMarketContactByPhoneEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketContactByPhoneEnabledDefinitionType){ 
					_LocalMarketContactByPhoneEnabled = value; 
				}else{
					console.log('LocalMarketContactByPhoneEnabled expects type LocalMarketContactByPhoneEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketPhoneCount', {
		 get: function(){
			 return _LocalMarketPhoneCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketPhoneCountDefinitionType){ 
					_LocalMarketPhoneCount = value; 
				}else{
					console.log('LocalMarketPhoneCount expects type LocalMarketPhoneCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketContactByAddressEnabled', {
		 get: function(){
			 return _LocalMarketContactByAddressEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketContactByAddressEnabledDefinitionType){ 
					_LocalMarketContactByAddressEnabled = value; 
				}else{
					console.log('LocalMarketContactByAddressEnabled expects type LocalMarketContactByAddressEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketStreetCount', {
		 get: function(){
			 return _LocalMarketStreetCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketStreetCountDefinitionType){ 
					_LocalMarketStreetCount = value; 
				}else{
					console.log('LocalMarketStreetCount expects type LocalMarketStreetCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketCompanyNameEnabled', {
		 get: function(){
			 return _LocalMarketCompanyNameEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketCompanyNameEnabledDefinitionType){ 
					_LocalMarketCompanyNameEnabled = value; 
				}else{
					console.log('LocalMarketCompanyNameEnabled expects type LocalMarketCompanyNameEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketContactByEmailEnabled', {
		 get: function(){
			 return _LocalMarketContactByEmailEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketContactByEmailEnabledDefinitionType){ 
					_LocalMarketContactByEmailEnabled = value; 
				}else{
					console.log('LocalMarketContactByEmailEnabled expects type LocalMarketContactByEmailEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketBestOfferEnabled', {
		 get: function(){
			 return _LocalMarketBestOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketBestOfferEnabledDefinitionType){ 
					_LocalMarketBestOfferEnabled = value; 
				}else{
					console.log('LocalMarketBestOfferEnabled expects type LocalMarketBestOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketAutoAcceptEnabled', {
		 get: function(){
			 return _LocalMarketAutoAcceptEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketAutoAcceptEnabledDefinitionType){ 
					_LocalMarketAutoAcceptEnabled = value; 
				}else{
					console.log('LocalMarketAutoAcceptEnabled expects type LocalMarketAutoAcceptEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketAutoDeclineEnabled', {
		 get: function(){
			 return _LocalMarketAutoDeclineEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketAutoDeclineEnabledDefinitionType){ 
					_LocalMarketAutoDeclineEnabled = value; 
				}else{
					console.log('LocalMarketAutoDeclineEnabled expects type LocalMarketAutoDeclineEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketPaymentMethodCheckOutEnabled', {
		 get: function(){
			 return _LocalMarketPaymentMethodCheckOutEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketPaymentMethodCheckOutEnabledDefinitionType){ 
					_LocalMarketPaymentMethodCheckOutEnabled = value; 
				}else{
					console.log('LocalMarketPaymentMethodCheckOutEnabled expects type LocalMarketPaymentMethodCheckOutEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketShippingMethodEnabled', {
		 get: function(){
			 return _LocalMarketShippingMethodEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketShippingMethodEnabledDefinitionType){ 
					_LocalMarketShippingMethodEnabled = value; 
				}else{
					console.log('LocalMarketShippingMethodEnabled expects type LocalMarketShippingMethodEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketCounterOfferEnabled', {
		 get: function(){
			 return _LocalMarketCounterOfferEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketCounterOfferEnabledDefinitionType){ 
					_LocalMarketCounterOfferEnabled = value; 
				}else{
					console.log('LocalMarketCounterOfferEnabled expects type LocalMarketCounterOfferEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LocalMarketSellerContactDetailsEnabled', {
		 get: function(){
			 return _LocalMarketSellerContactDetailsEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LocalMarketSellerContactDetailsEnabledDefinitionType){ 
					_LocalMarketSellerContactDetailsEnabled = value; 
				}else{
					console.log('LocalMarketSellerContactDetailsEnabled expects type LocalMarketSellerContactDetailsEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdPhoneCount', {
		 get: function(){
			 return _ClassifiedAdPhoneCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdPhoneCountDefinitionType){ 
					_ClassifiedAdPhoneCount = value; 
				}else{
					console.log('ClassifiedAdPhoneCount expects type ClassifiedAdPhoneCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdContactByAddressEnabled', {
		 get: function(){
			 return _ClassifiedAdContactByAddressEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdContactByAddressEnabledDefinitionType){ 
					_ClassifiedAdContactByAddressEnabled = value; 
				}else{
					console.log('ClassifiedAdContactByAddressEnabled expects type ClassifiedAdContactByAddressEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdStreetCount', {
		 get: function(){
			 return _ClassifiedAdStreetCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdStreetCountDefinitionType){ 
					_ClassifiedAdStreetCount = value; 
				}else{
					console.log('ClassifiedAdStreetCount expects type ClassifiedAdStreetCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdCompanyNameEnabled', {
		 get: function(){
			 return _ClassifiedAdCompanyNameEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ClassifiedAdCompanyNameEnabledDefinitionType){ 
					_ClassifiedAdCompanyNameEnabled = value; 
				}else{
					console.log('ClassifiedAdCompanyNameEnabled expects type ClassifiedAdCompanyNameEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SpecialitySubscription', {
		 get: function(){
			 return _SpecialitySubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SpecialitySubscriptionDefinitionType){ 
					_SpecialitySubscription = value; 
				}else{
					console.log('SpecialitySubscription expects type SpecialitySubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RegularSubscription', {
		 get: function(){
			 return _RegularSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RegularSubscriptionDefinitionType){ 
					_RegularSubscription = value; 
				}else{
					console.log('RegularSubscription expects type RegularSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PremiumSubscription', {
		 get: function(){
			 return _PremiumSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PremiumSubscriptionDefinitionType){ 
					_PremiumSubscription = value; 
				}else{
					console.log('PremiumSubscription expects type PremiumSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NonSubscription', {
		 get: function(){
			 return _NonSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NonSubscriptionDefinitionType){ 
					_NonSubscription = value; 
				}else{
					console.log('NonSubscription expects type NonSubscriptionDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReturnPolicyEnabled', {
		 get: function(){
			 return _ReturnPolicyEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReturnPolicyEnabledDefinitionType){ 
					_ReturnPolicyEnabled = value; 
				}else{
					console.log('ReturnPolicyEnabled expects type ReturnPolicyEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'HandlingTimeEnabled', {
		 get: function(){
			 return _HandlingTimeEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof HandlingTimeEnabledDefinitionType){ 
					_HandlingTimeEnabled = value; 
				}else{
					console.log('HandlingTimeEnabled expects type HandlingTimeEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PayPalRequiredForStoreOwner', {
		 get: function(){
			 return _PayPalRequiredForStoreOwner;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayPalRequiredForStoreOwnerDefinitionType){ 
					_PayPalRequiredForStoreOwner = value; 
				}else{
					console.log('PayPalRequiredForStoreOwner expects type PayPalRequiredForStoreOwnerDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReviseQuantityAllowed', {
		 get: function(){
			 return _ReviseQuantityAllowed;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReviseQuantityAllowedDefinitionType){ 
					_ReviseQuantityAllowed = value; 
				}else{
					console.log('ReviseQuantityAllowed expects type ReviseQuantityAllowedDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RevisePriceAllowed', {
		 get: function(){
			 return _RevisePriceAllowed;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RevisePriceAllowedDefinitionType){ 
					_RevisePriceAllowed = value; 
				}else{
					console.log('RevisePriceAllowed expects type RevisePriceAllowedDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'StoreOwnerExtendedListingDurationsEnabled', {
		 get: function(){
			 return _StoreOwnerExtendedListingDurationsEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreOwnerExtendedListingDurationsEnabledDefinitionType){ 
					_StoreOwnerExtendedListingDurationsEnabled = value; 
				}else{
					console.log('StoreOwnerExtendedListingDurationsEnabled expects type StoreOwnerExtendedListingDurationsEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'StoreOwnerExtendedListingDurations', {
		 get: function(){
			 return _StoreOwnerExtendedListingDurations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreOwnerExtendedListingDurationsDefinitionType){ 
					_StoreOwnerExtendedListingDurations = value; 
				}else{
					console.log('StoreOwnerExtendedListingDurations expects type StoreOwnerExtendedListingDurationsDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentMethod', {
		 get: function(){
			 return _PaymentMethod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentMethodDefinitionType){ 
					_PaymentMethod = value; 
				}else{
					console.log('PaymentMethod expects type PaymentMethodDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Group1MaxFlatShippingCost', {
		 get: function(){
			 return _Group1MaxFlatShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof Group1MaxFlatShippingCostDefinitionType){ 
					_Group1MaxFlatShippingCost = value; 
				}else{
					console.log('Group1MaxFlatShippingCost expects type Group1MaxFlatShippingCostDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Group2MaxFlatShippingCost', {
		 get: function(){
			 return _Group2MaxFlatShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof Group2MaxFlatShippingCostDefinitionType){ 
					_Group2MaxFlatShippingCost = value; 
				}else{
					console.log('Group2MaxFlatShippingCost expects type Group2MaxFlatShippingCostDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Group3MaxFlatShippingCost', {
		 get: function(){
			 return _Group3MaxFlatShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof Group3MaxFlatShippingCostDefinitionType){ 
					_Group3MaxFlatShippingCost = value; 
				}else{
					console.log('Group3MaxFlatShippingCost expects type Group3MaxFlatShippingCostDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxFlatShippingCostCBTExempt', {
		 get: function(){
			 return _MaxFlatShippingCostCBTExempt;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaxFlatShippingCostCBTExemptDefinitionType){ 
					_MaxFlatShippingCostCBTExempt = value; 
				}else{
					console.log('MaxFlatShippingCostCBTExempt expects type MaxFlatShippingCostCBTExemptDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxFlatShippingCost', {
		 get: function(){
			 return _MaxFlatShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaxFlatShippingCostDefinitionType){ 
					_MaxFlatShippingCost = value; 
				}else{
					console.log('MaxFlatShippingCost expects type MaxFlatShippingCostDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VariationsEnabled', {
		 get: function(){
			 return _VariationsEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationsEnabledDefinitionType){ 
					_VariationsEnabled = value; 
				}else{
					console.log('VariationsEnabled expects type VariationsEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AttributeConversionEnabled', {
		 get: function(){
			 return _AttributeConversionEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AttributeConversionEnabledFeatureDefinitionType){ 
					_AttributeConversionEnabled = value; 
				}else{
					console.log('AttributeConversionEnabled expects type AttributeConversionEnabledFeatureDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FreeGalleryPlusEnabled', {
		 get: function(){
			 return _FreeGalleryPlusEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FreeGalleryPlusEnabledDefinitionType){ 
					_FreeGalleryPlusEnabled = value; 
				}else{
					console.log('FreeGalleryPlusEnabled expects type FreeGalleryPlusEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FreePicturePackEnabled', {
		 get: function(){
			 return _FreePicturePackEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FreePicturePackEnabledDefinitionType){ 
					_FreePicturePackEnabled = value; 
				}else{
					console.log('FreePicturePackEnabled expects type FreePicturePackEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemCompatibilityEnabled', {
		 get: function(){
			 return _ItemCompatibilityEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemCompatibilityEnabledDefinitionType){ 
					_ItemCompatibilityEnabled = value; 
				}else{
					console.log('ItemCompatibilityEnabled expects type ItemCompatibilityEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxItemCompatibility', {
		 get: function(){
			 return _MaxItemCompatibility;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaxItemCompatibilityDefinitionType){ 
					_MaxItemCompatibility = value; 
				}else{
					console.log('MaxItemCompatibility expects type MaxItemCompatibilityDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinItemCompatibility', {
		 get: function(){
			 return _MinItemCompatibility;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MinItemCompatibilityDefinitionType){ 
					_MinItemCompatibility = value; 
				}else{
					console.log('MinItemCompatibility expects type MinItemCompatibilityDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConditionEnabled', {
		 get: function(){
			 return _ConditionEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ConditionEnabledDefinitionType){ 
					_ConditionEnabled = value; 
				}else{
					console.log('ConditionEnabled expects type ConditionEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConditionValues', {
		 get: function(){
			 return _ConditionValues;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ConditionValuesDefinitionType){ 
					_ConditionValues = value; 
				}else{
					console.log('ConditionValues expects type ConditionValuesDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ValueCategory', {
		 get: function(){
			 return _ValueCategory;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ValueCategoryDefinitionType){ 
					_ValueCategory = value; 
				}else{
					console.log('ValueCategory expects type ValueCategoryDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProductCreationEnabled', {
		 get: function(){
			 return _ProductCreationEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductCreationEnabledDefinitionType){ 
					_ProductCreationEnabled = value; 
				}else{
					console.log('ProductCreationEnabled expects type ProductCreationEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EANEnabled', {
		 get: function(){
			 return _EANEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EANEnabledDefinitionType){ 
					_EANEnabled = value; 
				}else{
					console.log('EANEnabled expects type EANEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ISBNEnabled', {
		 get: function(){
			 return _ISBNEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ISBNEnabledDefinitionType){ 
					_ISBNEnabled = value; 
				}else{
					console.log('ISBNEnabled expects type ISBNEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UPCEnabled', {
		 get: function(){
			 return _UPCEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UPCEnabledDefinitionType){ 
					_UPCEnabled = value; 
				}else{
					console.log('UPCEnabled expects type UPCEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CompatibleVehicleType', {
		 get: function(){
			 return _CompatibleVehicleType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CompatibleVehicleTypeDefinitionType){ 
					_CompatibleVehicleType = value; 
				}else{
					console.log('CompatibleVehicleType expects type CompatibleVehicleTypeDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxGranularFitmentCount', {
		 get: function(){
			 return _MaxGranularFitmentCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaxGranularFitmentCountDefinitionType){ 
					_MaxGranularFitmentCount = value; 
				}else{
					console.log('MaxGranularFitmentCount expects type MaxGranularFitmentCountDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentOptionsGroup', {
		 get: function(){
			 return _PaymentOptionsGroup;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentOptionsGroupEnabledDefinitionType){ 
					_PaymentOptionsGroup = value; 
				}else{
					console.log('PaymentOptionsGroup expects type PaymentOptionsGroupEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingProfileCategoryGroup', {
		 get: function(){
			 return _ShippingProfileCategoryGroup;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProfileCategoryGroupDefinitionType){ 
					_ShippingProfileCategoryGroup = value; 
				}else{
					console.log('ShippingProfileCategoryGroup expects type ProfileCategoryGroupDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentProfileCategoryGroup', {
		 get: function(){
			 return _PaymentProfileCategoryGroup;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProfileCategoryGroupDefinitionType){ 
					_PaymentProfileCategoryGroup = value; 
				}else{
					console.log('PaymentProfileCategoryGroup expects type ProfileCategoryGroupDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReturnPolicyProfileCategoryGroup', {
		 get: function(){
			 return _ReturnPolicyProfileCategoryGroup;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProfileCategoryGroupDefinitionType){ 
					_ReturnPolicyProfileCategoryGroup = value; 
				}else{
					console.log('ReturnPolicyProfileCategoryGroup expects type ProfileCategoryGroupDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VINSupported', {
		 get: function(){
			 return _VINSupported;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VINSupportedDefinitionType){ 
					_VINSupported = value; 
				}else{
					console.log('VINSupported expects type VINSupportedDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VRMSupported', {
		 get: function(){
			 return _VRMSupported;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VRMSupportedDefinitionType){ 
					_VRMSupported = value; 
				}else{
					console.log('VRMSupported expects type VRMSupportedDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerProvidedTitleSupported', {
		 get: function(){
			 return _SellerProvidedTitleSupported;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerProvidedTitleSupportedDefinitionType){ 
					_SellerProvidedTitleSupported = value; 
				}else{
					console.log('SellerProvidedTitleSupported expects type SellerProvidedTitleSupportedDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DepositSupported', {
		 get: function(){
			 return _DepositSupported;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DepositSupportedDefinitionType){ 
					_DepositSupported = value; 
				}else{
					console.log('DepositSupported expects type DepositSupportedDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'GlobalShippingEnabled', {
		 get: function(){
			 return _GlobalShippingEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GlobalShippingEnabledDefinitionType){ 
					_GlobalShippingEnabled = value; 
				}else{
					console.log('GlobalShippingEnabled expects type GlobalShippingEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AdditionalCompatibilityEnabled', {
		 get: function(){
			 return _AdditionalCompatibilityEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AdditionalCompatibilityEnabledDefinitionType){ 
					_AdditionalCompatibilityEnabled = value; 
				}else{
					console.log('AdditionalCompatibilityEnabled expects type AdditionalCompatibilityEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PickupDropOffEnabled', {
		 get: function(){
			 return _PickupDropOffEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PickupDropOffEnabledDefinitionType){ 
					_PickupDropOffEnabled = value; 
				}else{
					console.log('PickupDropOffEnabled expects type PickupDropOffEnabledDefinitionType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DigitalGoodDeliveryEnabled', {
		 get: function(){
			 return _DigitalGoodDeliveryEnabled;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DigitalGoodDeliveryEnabledDefinitionType){ 
					_DigitalGoodDeliveryEnabled = value; 
				}else{
					console.log('DigitalGoodDeliveryEnabled expects type DigitalGoodDeliveryEnabledDefinitionType');
				}
			}
		}
	});
	this.ListingDurations = ListingDurations;
	this.ShippingTermsRequired = ShippingTermsRequired;
	this.BestOfferEnabled = BestOfferEnabled;
	this.DutchBINEnabled = DutchBINEnabled;
	this.UserConsentRequired = UserConsentRequired;
	this.HomePageFeaturedEnabled = HomePageFeaturedEnabled;
	this.ProPackEnabled = ProPackEnabled;
	this.BasicUpgradePackEnabled = BasicUpgradePackEnabled;
	this.ValuePackEnabled = ValuePackEnabled;
	this.ProPackPlusEnabled = ProPackPlusEnabled;
	this.AdFormatEnabled = AdFormatEnabled;
	this.BestOfferCounterEnabled = BestOfferCounterEnabled;
	this.BestOfferAutoDeclineEnabled = BestOfferAutoDeclineEnabled;
	this.LocalMarketSpecialitySubscription = LocalMarketSpecialitySubscription;
	this.LocalMarketRegularSubscription = LocalMarketRegularSubscription;
	this.LocalMarketPremiumSubscription = LocalMarketPremiumSubscription;
	this.LocalMarketNonSubscription = LocalMarketNonSubscription;
	this.ExpressEnabled = ExpressEnabled;
	this.ExpressPicturesRequired = ExpressPicturesRequired;
	this.ExpressConditionRequired = ExpressConditionRequired;
	this.MinimumReservePrice = MinimumReservePrice;
	this.TransactionConfirmationRequestEnabled = TransactionConfirmationRequestEnabled;
	this.SellerContactDetailsEnabled = SellerContactDetailsEnabled;
	this.StoreInventoryEnabled = StoreInventoryEnabled;
	this.SkypeMeTransactionalEnabled = SkypeMeTransactionalEnabled;
	this.SkypeMeNonTransactionalEnabled = SkypeMeNonTransactionalEnabled;
	this.LocalListingDistancesRegular = LocalListingDistancesRegular;
	this.LocalListingDistancesSpecialty = LocalListingDistancesSpecialty;
	this.LocalListingDistancesNonSubscription = LocalListingDistancesNonSubscription;
	this.ClassifiedAdPaymentMethodEnabled = ClassifiedAdPaymentMethodEnabled;
	this.ClassifiedAdShippingMethodEnabled = ClassifiedAdShippingMethodEnabled;
	this.ClassifiedAdBestOfferEnabled = ClassifiedAdBestOfferEnabled;
	this.ClassifiedAdCounterOfferEnabled = ClassifiedAdCounterOfferEnabled;
	this.ClassifiedAdAutoDeclineEnabled = ClassifiedAdAutoDeclineEnabled;
	this.ClassifiedAdContactByPhoneEnabled = ClassifiedAdContactByPhoneEnabled;
	this.ClassifiedAdContactByEmailEnabled = ClassifiedAdContactByEmailEnabled;
	this.SafePaymentRequired = SafePaymentRequired;
	this.ClassifiedAdPayPerLeadEnabled = ClassifiedAdPayPerLeadEnabled;
	this.ItemSpecificsEnabled = ItemSpecificsEnabled;
	this.PaisaPayFullEscrowEnabled = PaisaPayFullEscrowEnabled;
	this.ISBNIdentifierEnabled = ISBNIdentifierEnabled;
	this.UPCIdentifierEnabled = UPCIdentifierEnabled;
	this.EANIdentifierEnabled = EANIdentifierEnabled;
	this.BrandMPNIdentifierEnabled = BrandMPNIdentifierEnabled;
	this.BestOfferAutoAcceptEnabled = BestOfferAutoAcceptEnabled;
	this.ClassifiedAdAutoAcceptEnabled = ClassifiedAdAutoAcceptEnabled;
	this.CrossBorderTradeNorthAmericaEnabled = CrossBorderTradeNorthAmericaEnabled;
	this.CrossBorderTradeGBEnabled = CrossBorderTradeGBEnabled;
	this.CrossBorderTradeAustraliaEnabled = CrossBorderTradeAustraliaEnabled;
	this.PayPalBuyerProtectionEnabled = PayPalBuyerProtectionEnabled;
	this.BuyerGuaranteeEnabled = BuyerGuaranteeEnabled;
	this.CombinedFixedPriceTreatmentEnabled = CombinedFixedPriceTreatmentEnabled;
	this.GalleryFeaturedDurations = GalleryFeaturedDurations;
	this.INEscrowWorkflowTimeline = INEscrowWorkflowTimeline;
	this.PayPalRequired = PayPalRequired;
	this.eBayMotorsProAdFormatEnabled = eBayMotorsProAdFormatEnabled;
	this.eBayMotorsProContactByPhoneEnabled = eBayMotorsProContactByPhoneEnabled;
	this.eBayMotorsProPhoneCount = eBayMotorsProPhoneCount;
	this.eBayMotorsProContactByAddressEnabled = eBayMotorsProContactByAddressEnabled;
	this.eBayMotorsProStreetCount = eBayMotorsProStreetCount;
	this.eBayMotorsProCompanyNameEnabled = eBayMotorsProCompanyNameEnabled;
	this.eBayMotorsProContactByEmailEnabled = eBayMotorsProContactByEmailEnabled;
	this.eBayMotorsProBestOfferEnabled = eBayMotorsProBestOfferEnabled;
	this.eBayMotorsProAutoAcceptEnabled = eBayMotorsProAutoAcceptEnabled;
	this.eBayMotorsProAutoDeclineEnabled = eBayMotorsProAutoDeclineEnabled;
	this.eBayMotorsProPaymentMethodCheckOutEnabled = eBayMotorsProPaymentMethodCheckOutEnabled;
	this.eBayMotorsProShippingMethodEnabled = eBayMotorsProShippingMethodEnabled;
	this.eBayMotorsProCounterOfferEnabled = eBayMotorsProCounterOfferEnabled;
	this.eBayMotorsProSellerContactDetailsEnabled = eBayMotorsProSellerContactDetailsEnabled;
	this.LocalMarketAdFormatEnabled = LocalMarketAdFormatEnabled;
	this.LocalMarketContactByPhoneEnabled = LocalMarketContactByPhoneEnabled;
	this.LocalMarketPhoneCount = LocalMarketPhoneCount;
	this.LocalMarketContactByAddressEnabled = LocalMarketContactByAddressEnabled;
	this.LocalMarketStreetCount = LocalMarketStreetCount;
	this.LocalMarketCompanyNameEnabled = LocalMarketCompanyNameEnabled;
	this.LocalMarketContactByEmailEnabled = LocalMarketContactByEmailEnabled;
	this.LocalMarketBestOfferEnabled = LocalMarketBestOfferEnabled;
	this.LocalMarketAutoAcceptEnabled = LocalMarketAutoAcceptEnabled;
	this.LocalMarketAutoDeclineEnabled = LocalMarketAutoDeclineEnabled;
	this.LocalMarketPaymentMethodCheckOutEnabled = LocalMarketPaymentMethodCheckOutEnabled;
	this.LocalMarketShippingMethodEnabled = LocalMarketShippingMethodEnabled;
	this.LocalMarketCounterOfferEnabled = LocalMarketCounterOfferEnabled;
	this.LocalMarketSellerContactDetailsEnabled = LocalMarketSellerContactDetailsEnabled;
	this.ClassifiedAdPhoneCount = ClassifiedAdPhoneCount;
	this.ClassifiedAdContactByAddressEnabled = ClassifiedAdContactByAddressEnabled;
	this.ClassifiedAdStreetCount = ClassifiedAdStreetCount;
	this.ClassifiedAdCompanyNameEnabled = ClassifiedAdCompanyNameEnabled;
	this.SpecialitySubscription = SpecialitySubscription;
	this.RegularSubscription = RegularSubscription;
	this.PremiumSubscription = PremiumSubscription;
	this.NonSubscription = NonSubscription;
	this.ReturnPolicyEnabled = ReturnPolicyEnabled;
	this.HandlingTimeEnabled = HandlingTimeEnabled;
	this.PayPalRequiredForStoreOwner = PayPalRequiredForStoreOwner;
	this.ReviseQuantityAllowed = ReviseQuantityAllowed;
	this.RevisePriceAllowed = RevisePriceAllowed;
	this.StoreOwnerExtendedListingDurationsEnabled = StoreOwnerExtendedListingDurationsEnabled;
	this.StoreOwnerExtendedListingDurations = StoreOwnerExtendedListingDurations;
	this.PaymentMethod = PaymentMethod;
	this.Group1MaxFlatShippingCost = Group1MaxFlatShippingCost;
	this.Group2MaxFlatShippingCost = Group2MaxFlatShippingCost;
	this.Group3MaxFlatShippingCost = Group3MaxFlatShippingCost;
	this.MaxFlatShippingCostCBTExempt = MaxFlatShippingCostCBTExempt;
	this.MaxFlatShippingCost = MaxFlatShippingCost;
	this.VariationsEnabled = VariationsEnabled;
	this.AttributeConversionEnabled = AttributeConversionEnabled;
	this.FreeGalleryPlusEnabled = FreeGalleryPlusEnabled;
	this.FreePicturePackEnabled = FreePicturePackEnabled;
	this.ItemCompatibilityEnabled = ItemCompatibilityEnabled;
	this.MaxItemCompatibility = MaxItemCompatibility;
	this.MinItemCompatibility = MinItemCompatibility;
	this.ConditionEnabled = ConditionEnabled;
	this.ConditionValues = ConditionValues;
	this.ValueCategory = ValueCategory;
	this.ProductCreationEnabled = ProductCreationEnabled;
	this.EANEnabled = EANEnabled;
	this.ISBNEnabled = ISBNEnabled;
	this.UPCEnabled = UPCEnabled;
	this.CompatibleVehicleType = CompatibleVehicleType;
	this.MaxGranularFitmentCount = MaxGranularFitmentCount;
	this.PaymentOptionsGroup = PaymentOptionsGroup;
	this.ShippingProfileCategoryGroup = ShippingProfileCategoryGroup;
	this.PaymentProfileCategoryGroup = PaymentProfileCategoryGroup;
	this.ReturnPolicyProfileCategoryGroup = ReturnPolicyProfileCategoryGroup;
	this.VINSupported = VINSupported;
	this.VRMSupported = VRMSupported;
	this.SellerProvidedTitleSupported = SellerProvidedTitleSupported;
	this.DepositSupported = DepositSupported;
	this.GlobalShippingEnabled = GlobalShippingEnabled;
	this.AdditionalCompatibilityEnabled = AdditionalCompatibilityEnabled;
	this.PickupDropOffEnabled = PickupDropOffEnabled;
	this.DigitalGoodDeliveryEnabled = DigitalGoodDeliveryEnabled;
}
FeatureDefinitionsType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingDurations: (this.ListingDurations === undefined)? null : this.ListingDurations.toJSON(),
		ShippingTermsRequired: (this.ShippingTermsRequired === undefined)? null : this.ShippingTermsRequired.toJSON(),
		BestOfferEnabled: (this.BestOfferEnabled === undefined)? null : this.BestOfferEnabled.toJSON(),
		DutchBINEnabled: (this.DutchBINEnabled === undefined)? null : this.DutchBINEnabled.toJSON(),
		UserConsentRequired: (this.UserConsentRequired === undefined)? null : this.UserConsentRequired.toJSON(),
		HomePageFeaturedEnabled: (this.HomePageFeaturedEnabled === undefined)? null : this.HomePageFeaturedEnabled.toJSON(),
		ProPackEnabled: (this.ProPackEnabled === undefined)? null : this.ProPackEnabled.toJSON(),
		BasicUpgradePackEnabled: (this.BasicUpgradePackEnabled === undefined)? null : this.BasicUpgradePackEnabled.toJSON(),
		ValuePackEnabled: (this.ValuePackEnabled === undefined)? null : this.ValuePackEnabled.toJSON(),
		ProPackPlusEnabled: (this.ProPackPlusEnabled === undefined)? null : this.ProPackPlusEnabled.toJSON(),
		AdFormatEnabled: (this.AdFormatEnabled === undefined)? null : this.AdFormatEnabled.toJSON(),
		BestOfferCounterEnabled: (this.BestOfferCounterEnabled === undefined)? null : this.BestOfferCounterEnabled.toJSON(),
		BestOfferAutoDeclineEnabled: (this.BestOfferAutoDeclineEnabled === undefined)? null : this.BestOfferAutoDeclineEnabled.toJSON(),
		LocalMarketSpecialitySubscription: (this.LocalMarketSpecialitySubscription === undefined)? null : this.LocalMarketSpecialitySubscription.toJSON(),
		LocalMarketRegularSubscription: (this.LocalMarketRegularSubscription === undefined)? null : this.LocalMarketRegularSubscription.toJSON(),
		LocalMarketPremiumSubscription: (this.LocalMarketPremiumSubscription === undefined)? null : this.LocalMarketPremiumSubscription.toJSON(),
		LocalMarketNonSubscription: (this.LocalMarketNonSubscription === undefined)? null : this.LocalMarketNonSubscription.toJSON(),
		ExpressEnabled: (this.ExpressEnabled === undefined)? null : this.ExpressEnabled.toJSON(),
		ExpressPicturesRequired: (this.ExpressPicturesRequired === undefined)? null : this.ExpressPicturesRequired.toJSON(),
		ExpressConditionRequired: (this.ExpressConditionRequired === undefined)? null : this.ExpressConditionRequired.toJSON(),
		MinimumReservePrice: (this.MinimumReservePrice === undefined)? null : this.MinimumReservePrice.toJSON(),
		TransactionConfirmationRequestEnabled: (this.TransactionConfirmationRequestEnabled === undefined)? null : this.TransactionConfirmationRequestEnabled.toJSON(),
		SellerContactDetailsEnabled: (this.SellerContactDetailsEnabled === undefined)? null : this.SellerContactDetailsEnabled.toJSON(),
		StoreInventoryEnabled: (this.StoreInventoryEnabled === undefined)? null : this.StoreInventoryEnabled.toJSON(),
		SkypeMeTransactionalEnabled: (this.SkypeMeTransactionalEnabled === undefined)? null : this.SkypeMeTransactionalEnabled.toJSON(),
		SkypeMeNonTransactionalEnabled: (this.SkypeMeNonTransactionalEnabled === undefined)? null : this.SkypeMeNonTransactionalEnabled.toJSON(),
		LocalListingDistancesRegular: (this.LocalListingDistancesRegular === undefined)? null : this.LocalListingDistancesRegular.toJSON(),
		LocalListingDistancesSpecialty: (this.LocalListingDistancesSpecialty === undefined)? null : this.LocalListingDistancesSpecialty.toJSON(),
		LocalListingDistancesNonSubscription: (this.LocalListingDistancesNonSubscription === undefined)? null : this.LocalListingDistancesNonSubscription.toJSON(),
		ClassifiedAdPaymentMethodEnabled: (this.ClassifiedAdPaymentMethodEnabled === undefined)? null : this.ClassifiedAdPaymentMethodEnabled.toJSON(),
		ClassifiedAdShippingMethodEnabled: (this.ClassifiedAdShippingMethodEnabled === undefined)? null : this.ClassifiedAdShippingMethodEnabled.toJSON(),
		ClassifiedAdBestOfferEnabled: (this.ClassifiedAdBestOfferEnabled === undefined)? null : this.ClassifiedAdBestOfferEnabled.toJSON(),
		ClassifiedAdCounterOfferEnabled: (this.ClassifiedAdCounterOfferEnabled === undefined)? null : this.ClassifiedAdCounterOfferEnabled.toJSON(),
		ClassifiedAdAutoDeclineEnabled: (this.ClassifiedAdAutoDeclineEnabled === undefined)? null : this.ClassifiedAdAutoDeclineEnabled.toJSON(),
		ClassifiedAdContactByPhoneEnabled: (this.ClassifiedAdContactByPhoneEnabled === undefined)? null : this.ClassifiedAdContactByPhoneEnabled.toJSON(),
		ClassifiedAdContactByEmailEnabled: (this.ClassifiedAdContactByEmailEnabled === undefined)? null : this.ClassifiedAdContactByEmailEnabled.toJSON(),
		SafePaymentRequired: (this.SafePaymentRequired === undefined)? null : this.SafePaymentRequired.toJSON(),
		ClassifiedAdPayPerLeadEnabled: (this.ClassifiedAdPayPerLeadEnabled === undefined)? null : this.ClassifiedAdPayPerLeadEnabled.toJSON(),
		ItemSpecificsEnabled: (this.ItemSpecificsEnabled === undefined)? null : this.ItemSpecificsEnabled.toJSON(),
		PaisaPayFullEscrowEnabled: (this.PaisaPayFullEscrowEnabled === undefined)? null : this.PaisaPayFullEscrowEnabled.toJSON(),
		ISBNIdentifierEnabled: (this.ISBNIdentifierEnabled === undefined)? null : this.ISBNIdentifierEnabled.toJSON(),
		UPCIdentifierEnabled: (this.UPCIdentifierEnabled === undefined)? null : this.UPCIdentifierEnabled.toJSON(),
		EANIdentifierEnabled: (this.EANIdentifierEnabled === undefined)? null : this.EANIdentifierEnabled.toJSON(),
		BrandMPNIdentifierEnabled: (this.BrandMPNIdentifierEnabled === undefined)? null : this.BrandMPNIdentifierEnabled.toJSON(),
		BestOfferAutoAcceptEnabled: (this.BestOfferAutoAcceptEnabled === undefined)? null : this.BestOfferAutoAcceptEnabled.toJSON(),
		ClassifiedAdAutoAcceptEnabled: (this.ClassifiedAdAutoAcceptEnabled === undefined)? null : this.ClassifiedAdAutoAcceptEnabled.toJSON(),
		CrossBorderTradeNorthAmericaEnabled: (this.CrossBorderTradeNorthAmericaEnabled === undefined)? null : this.CrossBorderTradeNorthAmericaEnabled.toJSON(),
		CrossBorderTradeGBEnabled: (this.CrossBorderTradeGBEnabled === undefined)? null : this.CrossBorderTradeGBEnabled.toJSON(),
		CrossBorderTradeAustraliaEnabled: (this.CrossBorderTradeAustraliaEnabled === undefined)? null : this.CrossBorderTradeAustraliaEnabled.toJSON(),
		PayPalBuyerProtectionEnabled: (this.PayPalBuyerProtectionEnabled === undefined)? null : this.PayPalBuyerProtectionEnabled.toJSON(),
		BuyerGuaranteeEnabled: (this.BuyerGuaranteeEnabled === undefined)? null : this.BuyerGuaranteeEnabled.toJSON(),
		CombinedFixedPriceTreatmentEnabled: (this.CombinedFixedPriceTreatmentEnabled === undefined)? null : this.CombinedFixedPriceTreatmentEnabled.toJSON(),
		GalleryFeaturedDurations: (this.GalleryFeaturedDurations === undefined)? null : this.GalleryFeaturedDurations.toJSON(),
		INEscrowWorkflowTimeline: (this.INEscrowWorkflowTimeline === undefined)? null : this.INEscrowWorkflowTimeline.toJSON(),
		PayPalRequired: (this.PayPalRequired === undefined)? null : this.PayPalRequired.toJSON(),
		eBayMotorsProAdFormatEnabled: (this.eBayMotorsProAdFormatEnabled === undefined)? null : this.eBayMotorsProAdFormatEnabled.toJSON(),
		eBayMotorsProContactByPhoneEnabled: (this.eBayMotorsProContactByPhoneEnabled === undefined)? null : this.eBayMotorsProContactByPhoneEnabled.toJSON(),
		eBayMotorsProPhoneCount: (this.eBayMotorsProPhoneCount === undefined)? null : this.eBayMotorsProPhoneCount.toJSON(),
		eBayMotorsProContactByAddressEnabled: (this.eBayMotorsProContactByAddressEnabled === undefined)? null : this.eBayMotorsProContactByAddressEnabled.toJSON(),
		eBayMotorsProStreetCount: (this.eBayMotorsProStreetCount === undefined)? null : this.eBayMotorsProStreetCount.toJSON(),
		eBayMotorsProCompanyNameEnabled: (this.eBayMotorsProCompanyNameEnabled === undefined)? null : this.eBayMotorsProCompanyNameEnabled.toJSON(),
		eBayMotorsProContactByEmailEnabled: (this.eBayMotorsProContactByEmailEnabled === undefined)? null : this.eBayMotorsProContactByEmailEnabled.toJSON(),
		eBayMotorsProBestOfferEnabled: (this.eBayMotorsProBestOfferEnabled === undefined)? null : this.eBayMotorsProBestOfferEnabled.toJSON(),
		eBayMotorsProAutoAcceptEnabled: (this.eBayMotorsProAutoAcceptEnabled === undefined)? null : this.eBayMotorsProAutoAcceptEnabled.toJSON(),
		eBayMotorsProAutoDeclineEnabled: (this.eBayMotorsProAutoDeclineEnabled === undefined)? null : this.eBayMotorsProAutoDeclineEnabled.toJSON(),
		eBayMotorsProPaymentMethodCheckOutEnabled: (this.eBayMotorsProPaymentMethodCheckOutEnabled === undefined)? null : this.eBayMotorsProPaymentMethodCheckOutEnabled.toJSON(),
		eBayMotorsProShippingMethodEnabled: (this.eBayMotorsProShippingMethodEnabled === undefined)? null : this.eBayMotorsProShippingMethodEnabled.toJSON(),
		eBayMotorsProCounterOfferEnabled: (this.eBayMotorsProCounterOfferEnabled === undefined)? null : this.eBayMotorsProCounterOfferEnabled.toJSON(),
		eBayMotorsProSellerContactDetailsEnabled: (this.eBayMotorsProSellerContactDetailsEnabled === undefined)? null : this.eBayMotorsProSellerContactDetailsEnabled.toJSON(),
		LocalMarketAdFormatEnabled: (this.LocalMarketAdFormatEnabled === undefined)? null : this.LocalMarketAdFormatEnabled.toJSON(),
		LocalMarketContactByPhoneEnabled: (this.LocalMarketContactByPhoneEnabled === undefined)? null : this.LocalMarketContactByPhoneEnabled.toJSON(),
		LocalMarketPhoneCount: (this.LocalMarketPhoneCount === undefined)? null : this.LocalMarketPhoneCount.toJSON(),
		LocalMarketContactByAddressEnabled: (this.LocalMarketContactByAddressEnabled === undefined)? null : this.LocalMarketContactByAddressEnabled.toJSON(),
		LocalMarketStreetCount: (this.LocalMarketStreetCount === undefined)? null : this.LocalMarketStreetCount.toJSON(),
		LocalMarketCompanyNameEnabled: (this.LocalMarketCompanyNameEnabled === undefined)? null : this.LocalMarketCompanyNameEnabled.toJSON(),
		LocalMarketContactByEmailEnabled: (this.LocalMarketContactByEmailEnabled === undefined)? null : this.LocalMarketContactByEmailEnabled.toJSON(),
		LocalMarketBestOfferEnabled: (this.LocalMarketBestOfferEnabled === undefined)? null : this.LocalMarketBestOfferEnabled.toJSON(),
		LocalMarketAutoAcceptEnabled: (this.LocalMarketAutoAcceptEnabled === undefined)? null : this.LocalMarketAutoAcceptEnabled.toJSON(),
		LocalMarketAutoDeclineEnabled: (this.LocalMarketAutoDeclineEnabled === undefined)? null : this.LocalMarketAutoDeclineEnabled.toJSON(),
		LocalMarketPaymentMethodCheckOutEnabled: (this.LocalMarketPaymentMethodCheckOutEnabled === undefined)? null : this.LocalMarketPaymentMethodCheckOutEnabled.toJSON(),
		LocalMarketShippingMethodEnabled: (this.LocalMarketShippingMethodEnabled === undefined)? null : this.LocalMarketShippingMethodEnabled.toJSON(),
		LocalMarketCounterOfferEnabled: (this.LocalMarketCounterOfferEnabled === undefined)? null : this.LocalMarketCounterOfferEnabled.toJSON(),
		LocalMarketSellerContactDetailsEnabled: (this.LocalMarketSellerContactDetailsEnabled === undefined)? null : this.LocalMarketSellerContactDetailsEnabled.toJSON(),
		ClassifiedAdPhoneCount: (this.ClassifiedAdPhoneCount === undefined)? null : this.ClassifiedAdPhoneCount.toJSON(),
		ClassifiedAdContactByAddressEnabled: (this.ClassifiedAdContactByAddressEnabled === undefined)? null : this.ClassifiedAdContactByAddressEnabled.toJSON(),
		ClassifiedAdStreetCount: (this.ClassifiedAdStreetCount === undefined)? null : this.ClassifiedAdStreetCount.toJSON(),
		ClassifiedAdCompanyNameEnabled: (this.ClassifiedAdCompanyNameEnabled === undefined)? null : this.ClassifiedAdCompanyNameEnabled.toJSON(),
		SpecialitySubscription: (this.SpecialitySubscription === undefined)? null : this.SpecialitySubscription.toJSON(),
		RegularSubscription: (this.RegularSubscription === undefined)? null : this.RegularSubscription.toJSON(),
		PremiumSubscription: (this.PremiumSubscription === undefined)? null : this.PremiumSubscription.toJSON(),
		NonSubscription: (this.NonSubscription === undefined)? null : this.NonSubscription.toJSON(),
		ReturnPolicyEnabled: (this.ReturnPolicyEnabled === undefined)? null : this.ReturnPolicyEnabled.toJSON(),
		HandlingTimeEnabled: (this.HandlingTimeEnabled === undefined)? null : this.HandlingTimeEnabled.toJSON(),
		PayPalRequiredForStoreOwner: (this.PayPalRequiredForStoreOwner === undefined)? null : this.PayPalRequiredForStoreOwner.toJSON(),
		ReviseQuantityAllowed: (this.ReviseQuantityAllowed === undefined)? null : this.ReviseQuantityAllowed.toJSON(),
		RevisePriceAllowed: (this.RevisePriceAllowed === undefined)? null : this.RevisePriceAllowed.toJSON(),
		StoreOwnerExtendedListingDurationsEnabled: (this.StoreOwnerExtendedListingDurationsEnabled === undefined)? null : this.StoreOwnerExtendedListingDurationsEnabled.toJSON(),
		StoreOwnerExtendedListingDurations: (this.StoreOwnerExtendedListingDurations === undefined)? null : this.StoreOwnerExtendedListingDurations.toJSON(),
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod.toJSON(),
		Group1MaxFlatShippingCost: (this.Group1MaxFlatShippingCost === undefined)? null : this.Group1MaxFlatShippingCost.toJSON(),
		Group2MaxFlatShippingCost: (this.Group2MaxFlatShippingCost === undefined)? null : this.Group2MaxFlatShippingCost.toJSON(),
		Group3MaxFlatShippingCost: (this.Group3MaxFlatShippingCost === undefined)? null : this.Group3MaxFlatShippingCost.toJSON(),
		MaxFlatShippingCostCBTExempt: (this.MaxFlatShippingCostCBTExempt === undefined)? null : this.MaxFlatShippingCostCBTExempt.toJSON(),
		MaxFlatShippingCost: (this.MaxFlatShippingCost === undefined)? null : this.MaxFlatShippingCost.toJSON(),
		VariationsEnabled: (this.VariationsEnabled === undefined)? null : this.VariationsEnabled.toJSON(),
		AttributeConversionEnabled: (this.AttributeConversionEnabled === undefined)? null : this.AttributeConversionEnabled.toJSON(),
		FreeGalleryPlusEnabled: (this.FreeGalleryPlusEnabled === undefined)? null : this.FreeGalleryPlusEnabled.toJSON(),
		FreePicturePackEnabled: (this.FreePicturePackEnabled === undefined)? null : this.FreePicturePackEnabled.toJSON(),
		ItemCompatibilityEnabled: (this.ItemCompatibilityEnabled === undefined)? null : this.ItemCompatibilityEnabled.toJSON(),
		MaxItemCompatibility: (this.MaxItemCompatibility === undefined)? null : this.MaxItemCompatibility.toJSON(),
		MinItemCompatibility: (this.MinItemCompatibility === undefined)? null : this.MinItemCompatibility.toJSON(),
		ConditionEnabled: (this.ConditionEnabled === undefined)? null : this.ConditionEnabled.toJSON(),
		ConditionValues: (this.ConditionValues === undefined)? null : this.ConditionValues.toJSON(),
		ValueCategory: (this.ValueCategory === undefined)? null : this.ValueCategory.toJSON(),
		ProductCreationEnabled: (this.ProductCreationEnabled === undefined)? null : this.ProductCreationEnabled.toJSON(),
		EANEnabled: (this.EANEnabled === undefined)? null : this.EANEnabled.toJSON(),
		ISBNEnabled: (this.ISBNEnabled === undefined)? null : this.ISBNEnabled.toJSON(),
		UPCEnabled: (this.UPCEnabled === undefined)? null : this.UPCEnabled.toJSON(),
		CompatibleVehicleType: (this.CompatibleVehicleType === undefined)? null : this.CompatibleVehicleType.toJSON(),
		MaxGranularFitmentCount: (this.MaxGranularFitmentCount === undefined)? null : this.MaxGranularFitmentCount.toJSON(),
		PaymentOptionsGroup: (this.PaymentOptionsGroup === undefined)? null : this.PaymentOptionsGroup.toJSON(),
		ShippingProfileCategoryGroup: (this.ShippingProfileCategoryGroup === undefined)? null : this.ShippingProfileCategoryGroup.toJSON(),
		PaymentProfileCategoryGroup: (this.PaymentProfileCategoryGroup === undefined)? null : this.PaymentProfileCategoryGroup.toJSON(),
		ReturnPolicyProfileCategoryGroup: (this.ReturnPolicyProfileCategoryGroup === undefined)? null : this.ReturnPolicyProfileCategoryGroup.toJSON(),
		VINSupported: (this.VINSupported === undefined)? null : this.VINSupported.toJSON(),
		VRMSupported: (this.VRMSupported === undefined)? null : this.VRMSupported.toJSON(),
		SellerProvidedTitleSupported: (this.SellerProvidedTitleSupported === undefined)? null : this.SellerProvidedTitleSupported.toJSON(),
		DepositSupported: (this.DepositSupported === undefined)? null : this.DepositSupported.toJSON(),
		GlobalShippingEnabled: (this.GlobalShippingEnabled === undefined)? null : this.GlobalShippingEnabled.toJSON(),
		AdditionalCompatibilityEnabled: (this.AdditionalCompatibilityEnabled === undefined)? null : this.AdditionalCompatibilityEnabled.toJSON(),
		PickupDropOffEnabled: (this.PickupDropOffEnabled === undefined)? null : this.PickupDropOffEnabled.toJSON(),
		DigitalGoodDeliveryEnabled: (this.DigitalGoodDeliveryEnabled === undefined)? null : this.DigitalGoodDeliveryEnabled.toJSON()
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
module.exports = FeatureDefinitionsType;