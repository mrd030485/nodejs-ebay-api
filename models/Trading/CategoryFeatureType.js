var ListingEnhancementDurationReferenceType = require('./ListingEnhancementDurationReferenceType'),
	StoreOwnerExtendedListingDurationsType = require('./StoreOwnerExtendedListingDurationsType'),
	AmountType = require('./AmountType'),
	ConditionValuesType = require('./ConditionValuesType');

function CategoryFeatureType(CategoryID, ListingDuration, ShippingTermsRequired, BestOfferEnabled, DutchBINEnabled, UserConsentRequired, HomePageFeaturedEnabled, ProPackEnabled, BasicUpgradePackEnabled, ValuePackEnabled, ProPackPlusEnabled, AdFormatEnabled, BestOfferCounterEnabled, BestOfferAutoDeclineEnabled, LocalMarketSpecialitySubscription, LocalMarketRegularSubscription, LocalMarketPremiumSubscription, LocalMarketNonSubscription, ExpressEnabled, ExpressPicturesRequired, ExpressConditionRequired, MinimumReservePrice, SellerContactDetailsEnabled, TransactionConfirmationRequestEnabled, StoreInventoryEnabled, SkypeMeTransactionalEnabled, SkypeMeNonTransactionalEnabled, ClassifiedAdPaymentMethodEnabled, ClassifiedAdShippingMethodEnabled, ClassifiedAdBestOfferEnabled, ClassifiedAdCounterOfferEnabled, ClassifiedAdAutoDeclineEnabled, ClassifiedAdContactByPhoneEnabled, ClassifiedAdContactByEmailEnabled, SafePaymentRequired, ClassifiedAdPayPerLeadEnabled, ItemSpecificsEnabled, PaisaPayFullEscrowEnabled, BrandMPNIdentifierEnabled, ClassifiedAdAutoAcceptEnabled, BestOfferAutoAcceptEnabled, CrossBorderTradeNorthAmericaEnabled, CrossBorderTradeGBEnabled, CrossBorderTradeAustraliaEnabled, PayPalBuyerProtectionEnabled, BuyerGuaranteeEnabled, CombinedFixedPriceTreatmentEnabled, GalleryFeaturedDurations, PayPalRequired, eBayMotorsProAdFormatEnabled, eBayMotorsProContactByPhoneEnabled, eBayMotorsProPhoneCount, eBayMotorsProContactByAddressEnabled, eBayMotorsProStreetCount, eBayMotorsProCompanyNameEnabled, eBayMotorsProContactByEmailEnabled, eBayMotorsProBestOfferEnabled, eBayMotorsProAutoAcceptEnabled, eBayMotorsProAutoDeclineEnabled, eBayMotorsProPaymentMethodCheckOutEnabled, eBayMotorsProShippingMethodEnabled, eBayMotorsProCounterOfferEnabled, eBayMotorsProSellerContactDetailsEnabled, LocalMarketAdFormatEnabled, LocalMarketContactByPhoneEnabled, LocalMarketPhoneCount, LocalMarketContactByAddressEnabled, LocalMarketStreetCount, LocalMarketCompanyNameEnabled, LocalMarketContactByEmailEnabled, LocalMarketBestOfferEnabled, LocalMarketAutoAcceptEnabled, LocalMarketAutoDeclineEnabled, LocalMarketPaymentMethodCheckOutEnabled, LocalMarketShippingMethodEnabled, LocalMarketCounterOfferEnabled, LocalMarketSellerContactDetailsEnabled, ClassifiedAdPhoneCount, ClassifiedAdContactByAddressEnabled, ClassifiedAdStreetCount, ClassifiedAdCompanyNameEnabled, SpecialitySubscription, RegularSubscription, PremiumSubscription, NonSubscription, INEscrowWorkflowTimeline, PayPalRequiredForStoreOwner, ReviseQuantityAllowed, RevisePriceAllowed, StoreOwnerExtendedListingDurationsEnabled, StoreOwnerExtendedListingDurations, ReturnPolicyEnabled, HandlingTimeEnabled, MaxFlatShippingCost, Group1MaxFlatShippingCost, Group2MaxFlatShippingCost, Group3MaxFlatShippingCost, PaymentMethod, VariationsEnabled, AttributeConversionEnabled, FreeGalleryPlusEnabled, FreePicturePackEnabled, ItemCompatibilityEnabled, MinItemCompatibility, MaxItemCompatibility, ConditionEnabled, ConditionValues, ValueCategory, ProductCreationEnabled, EANEnabled, ISBNEnabled, UPCEnabled, MaxGranularFitmentCount, CompatibleVehicleType, PaymentOptionsGroup, ShippingProfileCategoryGroup, PaymentProfileCategoryGroup, ReturnPolicyProfileCategoryGroup, VINSupported, VRMSupported, SellerProvidedTitleSupported, DepositSupported, GlobalShippingEnabled, AdditionalCompatibilityEnabled, PickupDropOffEnabled, DigitalGoodDeliveryEnabled) {

	/**
	  Documentation
	   Type defining the <b>Category</b> container that is returned in the <b>GetCategoryFeatures</b> response. A <b>Category</b> node is returned for each category that is relevant/applicable to the input
                    criteria in the <b>GetCategoryFeatures</b> request. The <b>CategoryID</b> value identifies the eBay category. The rest of the <b>CategoryFeatureType</b> fields that are returned will be dependent
                    on which <b>FeatureID</b> value(s) are specified in the <b>GetCategoryFeatures</b> request.
	 */

	/**
	 * Arrays
	 *	ListingDuration: ListingDurationReferenceType
	 */
	var _GalleryFeaturedDurations;
	var _StoreOwnerExtendedListingDurations;
	var _MaxFlatShippingCost;
	var _Group1MaxFlatShippingCost;
	var _Group2MaxFlatShippingCost;
	var _Group3MaxFlatShippingCost;
	var _ConditionValues;
	Object.defineProperty(this, 'GalleryFeaturedDurations', {
		 get: function(){
			 return _GalleryFeaturedDurations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingEnhancementDurationReferenceType){ 
					_GalleryFeaturedDurations = value; 
				}else{
					console.log('GalleryFeaturedDurations expects type ListingEnhancementDurationReferenceType');
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
				if(value instanceof StoreOwnerExtendedListingDurationsType){ 
					_StoreOwnerExtendedListingDurations = value; 
				}else{
					console.log('StoreOwnerExtendedListingDurations expects type StoreOwnerExtendedListingDurationsType');
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
				if(value instanceof AmountType){ 
					_MaxFlatShippingCost = value; 
				}else{
					console.log('MaxFlatShippingCost expects type AmountType');
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
				if(value instanceof AmountType){ 
					_Group1MaxFlatShippingCost = value; 
				}else{
					console.log('Group1MaxFlatShippingCost expects type AmountType');
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
				if(value instanceof AmountType){ 
					_Group2MaxFlatShippingCost = value; 
				}else{
					console.log('Group2MaxFlatShippingCost expects type AmountType');
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
				if(value instanceof AmountType){ 
					_Group3MaxFlatShippingCost = value; 
				}else{
					console.log('Group3MaxFlatShippingCost expects type AmountType');
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
				if(value instanceof ConditionValuesType){ 
					_ConditionValues = value; 
				}else{
					console.log('ConditionValues expects type ConditionValuesType');
				}
			}
		}
	});
	this.CategoryID = CategoryID;
	this.ListingDuration = ListingDuration;
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
	this.SellerContactDetailsEnabled = SellerContactDetailsEnabled;
	this.TransactionConfirmationRequestEnabled = TransactionConfirmationRequestEnabled;
	this.StoreInventoryEnabled = StoreInventoryEnabled;
	this.SkypeMeTransactionalEnabled = SkypeMeTransactionalEnabled;
	this.SkypeMeNonTransactionalEnabled = SkypeMeNonTransactionalEnabled;
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
	this.BrandMPNIdentifierEnabled = BrandMPNIdentifierEnabled;
	this.ClassifiedAdAutoAcceptEnabled = ClassifiedAdAutoAcceptEnabled;
	this.BestOfferAutoAcceptEnabled = BestOfferAutoAcceptEnabled;
	this.CrossBorderTradeNorthAmericaEnabled = CrossBorderTradeNorthAmericaEnabled;
	this.CrossBorderTradeGBEnabled = CrossBorderTradeGBEnabled;
	this.CrossBorderTradeAustraliaEnabled = CrossBorderTradeAustraliaEnabled;
	this.PayPalBuyerProtectionEnabled = PayPalBuyerProtectionEnabled;
	this.BuyerGuaranteeEnabled = BuyerGuaranteeEnabled;
	this.CombinedFixedPriceTreatmentEnabled = CombinedFixedPriceTreatmentEnabled;
	this.GalleryFeaturedDurations = GalleryFeaturedDurations;
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
	this.INEscrowWorkflowTimeline = INEscrowWorkflowTimeline;
	this.PayPalRequiredForStoreOwner = PayPalRequiredForStoreOwner;
	this.ReviseQuantityAllowed = ReviseQuantityAllowed;
	this.RevisePriceAllowed = RevisePriceAllowed;
	this.StoreOwnerExtendedListingDurationsEnabled = StoreOwnerExtendedListingDurationsEnabled;
	this.StoreOwnerExtendedListingDurations = StoreOwnerExtendedListingDurations;
	this.ReturnPolicyEnabled = ReturnPolicyEnabled;
	this.HandlingTimeEnabled = HandlingTimeEnabled;
	this.MaxFlatShippingCost = MaxFlatShippingCost;
	this.Group1MaxFlatShippingCost = Group1MaxFlatShippingCost;
	this.Group2MaxFlatShippingCost = Group2MaxFlatShippingCost;
	this.Group3MaxFlatShippingCost = Group3MaxFlatShippingCost;
	this.PaymentMethod = PaymentMethod;
	this.VariationsEnabled = VariationsEnabled;
	this.AttributeConversionEnabled = AttributeConversionEnabled;
	this.FreeGalleryPlusEnabled = FreeGalleryPlusEnabled;
	this.FreePicturePackEnabled = FreePicturePackEnabled;
	this.ItemCompatibilityEnabled = ItemCompatibilityEnabled;
	this.MinItemCompatibility = MinItemCompatibility;
	this.MaxItemCompatibility = MaxItemCompatibility;
	this.ConditionEnabled = ConditionEnabled;
	this.ConditionValues = ConditionValues;
	this.ValueCategory = ValueCategory;
	this.ProductCreationEnabled = ProductCreationEnabled;
	this.EANEnabled = EANEnabled;
	this.ISBNEnabled = ISBNEnabled;
	this.UPCEnabled = UPCEnabled;
	this.MaxGranularFitmentCount = MaxGranularFitmentCount;
	this.CompatibleVehicleType = CompatibleVehicleType;
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
CategoryFeatureType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		ListingDuration: (this.ListingDuration === undefined)? null : this.ListingDuration,
		ShippingTermsRequired: (this.ShippingTermsRequired === undefined)? null : this.ShippingTermsRequired,
		BestOfferEnabled: (this.BestOfferEnabled === undefined)? null : this.BestOfferEnabled,
		DutchBINEnabled: (this.DutchBINEnabled === undefined)? null : this.DutchBINEnabled,
		UserConsentRequired: (this.UserConsentRequired === undefined)? null : this.UserConsentRequired,
		HomePageFeaturedEnabled: (this.HomePageFeaturedEnabled === undefined)? null : this.HomePageFeaturedEnabled,
		ProPackEnabled: (this.ProPackEnabled === undefined)? null : this.ProPackEnabled,
		BasicUpgradePackEnabled: (this.BasicUpgradePackEnabled === undefined)? null : this.BasicUpgradePackEnabled,
		ValuePackEnabled: (this.ValuePackEnabled === undefined)? null : this.ValuePackEnabled,
		ProPackPlusEnabled: (this.ProPackPlusEnabled === undefined)? null : this.ProPackPlusEnabled,
		AdFormatEnabled: (this.AdFormatEnabled === undefined)? null : this.AdFormatEnabled,
		BestOfferCounterEnabled: (this.BestOfferCounterEnabled === undefined)? null : this.BestOfferCounterEnabled,
		BestOfferAutoDeclineEnabled: (this.BestOfferAutoDeclineEnabled === undefined)? null : this.BestOfferAutoDeclineEnabled,
		LocalMarketSpecialitySubscription: (this.LocalMarketSpecialitySubscription === undefined)? null : this.LocalMarketSpecialitySubscription,
		LocalMarketRegularSubscription: (this.LocalMarketRegularSubscription === undefined)? null : this.LocalMarketRegularSubscription,
		LocalMarketPremiumSubscription: (this.LocalMarketPremiumSubscription === undefined)? null : this.LocalMarketPremiumSubscription,
		LocalMarketNonSubscription: (this.LocalMarketNonSubscription === undefined)? null : this.LocalMarketNonSubscription,
		ExpressEnabled: (this.ExpressEnabled === undefined)? null : this.ExpressEnabled,
		ExpressPicturesRequired: (this.ExpressPicturesRequired === undefined)? null : this.ExpressPicturesRequired,
		ExpressConditionRequired: (this.ExpressConditionRequired === undefined)? null : this.ExpressConditionRequired,
		MinimumReservePrice: (this.MinimumReservePrice === undefined)? null : this.MinimumReservePrice,
		SellerContactDetailsEnabled: (this.SellerContactDetailsEnabled === undefined)? null : this.SellerContactDetailsEnabled,
		TransactionConfirmationRequestEnabled: (this.TransactionConfirmationRequestEnabled === undefined)? null : this.TransactionConfirmationRequestEnabled,
		StoreInventoryEnabled: (this.StoreInventoryEnabled === undefined)? null : this.StoreInventoryEnabled,
		SkypeMeTransactionalEnabled: (this.SkypeMeTransactionalEnabled === undefined)? null : this.SkypeMeTransactionalEnabled,
		SkypeMeNonTransactionalEnabled: (this.SkypeMeNonTransactionalEnabled === undefined)? null : this.SkypeMeNonTransactionalEnabled,
		ClassifiedAdPaymentMethodEnabled: (this.ClassifiedAdPaymentMethodEnabled === undefined)? null : this.ClassifiedAdPaymentMethodEnabled,
		ClassifiedAdShippingMethodEnabled: (this.ClassifiedAdShippingMethodEnabled === undefined)? null : this.ClassifiedAdShippingMethodEnabled,
		ClassifiedAdBestOfferEnabled: (this.ClassifiedAdBestOfferEnabled === undefined)? null : this.ClassifiedAdBestOfferEnabled,
		ClassifiedAdCounterOfferEnabled: (this.ClassifiedAdCounterOfferEnabled === undefined)? null : this.ClassifiedAdCounterOfferEnabled,
		ClassifiedAdAutoDeclineEnabled: (this.ClassifiedAdAutoDeclineEnabled === undefined)? null : this.ClassifiedAdAutoDeclineEnabled,
		ClassifiedAdContactByPhoneEnabled: (this.ClassifiedAdContactByPhoneEnabled === undefined)? null : this.ClassifiedAdContactByPhoneEnabled,
		ClassifiedAdContactByEmailEnabled: (this.ClassifiedAdContactByEmailEnabled === undefined)? null : this.ClassifiedAdContactByEmailEnabled,
		SafePaymentRequired: (this.SafePaymentRequired === undefined)? null : this.SafePaymentRequired,
		ClassifiedAdPayPerLeadEnabled: (this.ClassifiedAdPayPerLeadEnabled === undefined)? null : this.ClassifiedAdPayPerLeadEnabled,
		ItemSpecificsEnabled: (this.ItemSpecificsEnabled === undefined)? null : this.ItemSpecificsEnabled,
		PaisaPayFullEscrowEnabled: (this.PaisaPayFullEscrowEnabled === undefined)? null : this.PaisaPayFullEscrowEnabled,
		BrandMPNIdentifierEnabled: (this.BrandMPNIdentifierEnabled === undefined)? null : this.BrandMPNIdentifierEnabled,
		ClassifiedAdAutoAcceptEnabled: (this.ClassifiedAdAutoAcceptEnabled === undefined)? null : this.ClassifiedAdAutoAcceptEnabled,
		BestOfferAutoAcceptEnabled: (this.BestOfferAutoAcceptEnabled === undefined)? null : this.BestOfferAutoAcceptEnabled,
		CrossBorderTradeNorthAmericaEnabled: (this.CrossBorderTradeNorthAmericaEnabled === undefined)? null : this.CrossBorderTradeNorthAmericaEnabled,
		CrossBorderTradeGBEnabled: (this.CrossBorderTradeGBEnabled === undefined)? null : this.CrossBorderTradeGBEnabled,
		CrossBorderTradeAustraliaEnabled: (this.CrossBorderTradeAustraliaEnabled === undefined)? null : this.CrossBorderTradeAustraliaEnabled,
		PayPalBuyerProtectionEnabled: (this.PayPalBuyerProtectionEnabled === undefined)? null : this.PayPalBuyerProtectionEnabled,
		BuyerGuaranteeEnabled: (this.BuyerGuaranteeEnabled === undefined)? null : this.BuyerGuaranteeEnabled,
		CombinedFixedPriceTreatmentEnabled: (this.CombinedFixedPriceTreatmentEnabled === undefined)? null : this.CombinedFixedPriceTreatmentEnabled,
		GalleryFeaturedDurations: (this.GalleryFeaturedDurations === undefined)? null : this.GalleryFeaturedDurations.toJSON(),
		PayPalRequired: (this.PayPalRequired === undefined)? null : this.PayPalRequired,
		eBayMotorsProAdFormatEnabled: (this.eBayMotorsProAdFormatEnabled === undefined)? null : this.eBayMotorsProAdFormatEnabled,
		eBayMotorsProContactByPhoneEnabled: (this.eBayMotorsProContactByPhoneEnabled === undefined)? null : this.eBayMotorsProContactByPhoneEnabled,
		eBayMotorsProPhoneCount: (this.eBayMotorsProPhoneCount === undefined)? null : this.eBayMotorsProPhoneCount,
		eBayMotorsProContactByAddressEnabled: (this.eBayMotorsProContactByAddressEnabled === undefined)? null : this.eBayMotorsProContactByAddressEnabled,
		eBayMotorsProStreetCount: (this.eBayMotorsProStreetCount === undefined)? null : this.eBayMotorsProStreetCount,
		eBayMotorsProCompanyNameEnabled: (this.eBayMotorsProCompanyNameEnabled === undefined)? null : this.eBayMotorsProCompanyNameEnabled,
		eBayMotorsProContactByEmailEnabled: (this.eBayMotorsProContactByEmailEnabled === undefined)? null : this.eBayMotorsProContactByEmailEnabled,
		eBayMotorsProBestOfferEnabled: (this.eBayMotorsProBestOfferEnabled === undefined)? null : this.eBayMotorsProBestOfferEnabled,
		eBayMotorsProAutoAcceptEnabled: (this.eBayMotorsProAutoAcceptEnabled === undefined)? null : this.eBayMotorsProAutoAcceptEnabled,
		eBayMotorsProAutoDeclineEnabled: (this.eBayMotorsProAutoDeclineEnabled === undefined)? null : this.eBayMotorsProAutoDeclineEnabled,
		eBayMotorsProPaymentMethodCheckOutEnabled: (this.eBayMotorsProPaymentMethodCheckOutEnabled === undefined)? null : this.eBayMotorsProPaymentMethodCheckOutEnabled,
		eBayMotorsProShippingMethodEnabled: (this.eBayMotorsProShippingMethodEnabled === undefined)? null : this.eBayMotorsProShippingMethodEnabled,
		eBayMotorsProCounterOfferEnabled: (this.eBayMotorsProCounterOfferEnabled === undefined)? null : this.eBayMotorsProCounterOfferEnabled,
		eBayMotorsProSellerContactDetailsEnabled: (this.eBayMotorsProSellerContactDetailsEnabled === undefined)? null : this.eBayMotorsProSellerContactDetailsEnabled,
		LocalMarketAdFormatEnabled: (this.LocalMarketAdFormatEnabled === undefined)? null : this.LocalMarketAdFormatEnabled,
		LocalMarketContactByPhoneEnabled: (this.LocalMarketContactByPhoneEnabled === undefined)? null : this.LocalMarketContactByPhoneEnabled,
		LocalMarketPhoneCount: (this.LocalMarketPhoneCount === undefined)? null : this.LocalMarketPhoneCount,
		LocalMarketContactByAddressEnabled: (this.LocalMarketContactByAddressEnabled === undefined)? null : this.LocalMarketContactByAddressEnabled,
		LocalMarketStreetCount: (this.LocalMarketStreetCount === undefined)? null : this.LocalMarketStreetCount,
		LocalMarketCompanyNameEnabled: (this.LocalMarketCompanyNameEnabled === undefined)? null : this.LocalMarketCompanyNameEnabled,
		LocalMarketContactByEmailEnabled: (this.LocalMarketContactByEmailEnabled === undefined)? null : this.LocalMarketContactByEmailEnabled,
		LocalMarketBestOfferEnabled: (this.LocalMarketBestOfferEnabled === undefined)? null : this.LocalMarketBestOfferEnabled,
		LocalMarketAutoAcceptEnabled: (this.LocalMarketAutoAcceptEnabled === undefined)? null : this.LocalMarketAutoAcceptEnabled,
		LocalMarketAutoDeclineEnabled: (this.LocalMarketAutoDeclineEnabled === undefined)? null : this.LocalMarketAutoDeclineEnabled,
		LocalMarketPaymentMethodCheckOutEnabled: (this.LocalMarketPaymentMethodCheckOutEnabled === undefined)? null : this.LocalMarketPaymentMethodCheckOutEnabled,
		LocalMarketShippingMethodEnabled: (this.LocalMarketShippingMethodEnabled === undefined)? null : this.LocalMarketShippingMethodEnabled,
		LocalMarketCounterOfferEnabled: (this.LocalMarketCounterOfferEnabled === undefined)? null : this.LocalMarketCounterOfferEnabled,
		LocalMarketSellerContactDetailsEnabled: (this.LocalMarketSellerContactDetailsEnabled === undefined)? null : this.LocalMarketSellerContactDetailsEnabled,
		ClassifiedAdPhoneCount: (this.ClassifiedAdPhoneCount === undefined)? null : this.ClassifiedAdPhoneCount,
		ClassifiedAdContactByAddressEnabled: (this.ClassifiedAdContactByAddressEnabled === undefined)? null : this.ClassifiedAdContactByAddressEnabled,
		ClassifiedAdStreetCount: (this.ClassifiedAdStreetCount === undefined)? null : this.ClassifiedAdStreetCount,
		ClassifiedAdCompanyNameEnabled: (this.ClassifiedAdCompanyNameEnabled === undefined)? null : this.ClassifiedAdCompanyNameEnabled,
		SpecialitySubscription: (this.SpecialitySubscription === undefined)? null : this.SpecialitySubscription,
		RegularSubscription: (this.RegularSubscription === undefined)? null : this.RegularSubscription,
		PremiumSubscription: (this.PremiumSubscription === undefined)? null : this.PremiumSubscription,
		NonSubscription: (this.NonSubscription === undefined)? null : this.NonSubscription,
		INEscrowWorkflowTimeline: (this.INEscrowWorkflowTimeline === undefined)? null : this.INEscrowWorkflowTimeline,
		PayPalRequiredForStoreOwner: (this.PayPalRequiredForStoreOwner === undefined)? null : this.PayPalRequiredForStoreOwner,
		ReviseQuantityAllowed: (this.ReviseQuantityAllowed === undefined)? null : this.ReviseQuantityAllowed,
		RevisePriceAllowed: (this.RevisePriceAllowed === undefined)? null : this.RevisePriceAllowed,
		StoreOwnerExtendedListingDurationsEnabled: (this.StoreOwnerExtendedListingDurationsEnabled === undefined)? null : this.StoreOwnerExtendedListingDurationsEnabled,
		StoreOwnerExtendedListingDurations: (this.StoreOwnerExtendedListingDurations === undefined)? null : this.StoreOwnerExtendedListingDurations.toJSON(),
		ReturnPolicyEnabled: (this.ReturnPolicyEnabled === undefined)? null : this.ReturnPolicyEnabled,
		HandlingTimeEnabled: (this.HandlingTimeEnabled === undefined)? null : this.HandlingTimeEnabled,
		MaxFlatShippingCost: (this.MaxFlatShippingCost === undefined)? null : this.MaxFlatShippingCost.toJSON(),
		Group1MaxFlatShippingCost: (this.Group1MaxFlatShippingCost === undefined)? null : this.Group1MaxFlatShippingCost.toJSON(),
		Group2MaxFlatShippingCost: (this.Group2MaxFlatShippingCost === undefined)? null : this.Group2MaxFlatShippingCost.toJSON(),
		Group3MaxFlatShippingCost: (this.Group3MaxFlatShippingCost === undefined)? null : this.Group3MaxFlatShippingCost.toJSON(),
		PaymentMethod: (this.PaymentMethod === undefined)? null : this.PaymentMethod,
		VariationsEnabled: (this.VariationsEnabled === undefined)? null : this.VariationsEnabled,
		AttributeConversionEnabled: (this.AttributeConversionEnabled === undefined)? null : this.AttributeConversionEnabled,
		FreeGalleryPlusEnabled: (this.FreeGalleryPlusEnabled === undefined)? null : this.FreeGalleryPlusEnabled,
		FreePicturePackEnabled: (this.FreePicturePackEnabled === undefined)? null : this.FreePicturePackEnabled,
		ItemCompatibilityEnabled: (this.ItemCompatibilityEnabled === undefined)? null : this.ItemCompatibilityEnabled,
		MinItemCompatibility: (this.MinItemCompatibility === undefined)? null : this.MinItemCompatibility,
		MaxItemCompatibility: (this.MaxItemCompatibility === undefined)? null : this.MaxItemCompatibility,
		ConditionEnabled: (this.ConditionEnabled === undefined)? null : this.ConditionEnabled,
		ConditionValues: (this.ConditionValues === undefined)? null : this.ConditionValues.toJSON(),
		ValueCategory: (this.ValueCategory === undefined)? null : this.ValueCategory,
		ProductCreationEnabled: (this.ProductCreationEnabled === undefined)? null : this.ProductCreationEnabled,
		EANEnabled: (this.EANEnabled === undefined)? null : this.EANEnabled,
		ISBNEnabled: (this.ISBNEnabled === undefined)? null : this.ISBNEnabled,
		UPCEnabled: (this.UPCEnabled === undefined)? null : this.UPCEnabled,
		MaxGranularFitmentCount: (this.MaxGranularFitmentCount === undefined)? null : this.MaxGranularFitmentCount,
		CompatibleVehicleType: (this.CompatibleVehicleType === undefined)? null : this.CompatibleVehicleType,
		PaymentOptionsGroup: (this.PaymentOptionsGroup === undefined)? null : this.PaymentOptionsGroup,
		ShippingProfileCategoryGroup: (this.ShippingProfileCategoryGroup === undefined)? null : this.ShippingProfileCategoryGroup,
		PaymentProfileCategoryGroup: (this.PaymentProfileCategoryGroup === undefined)? null : this.PaymentProfileCategoryGroup,
		ReturnPolicyProfileCategoryGroup: (this.ReturnPolicyProfileCategoryGroup === undefined)? null : this.ReturnPolicyProfileCategoryGroup,
		VINSupported: (this.VINSupported === undefined)? null : this.VINSupported,
		VRMSupported: (this.VRMSupported === undefined)? null : this.VRMSupported,
		SellerProvidedTitleSupported: (this.SellerProvidedTitleSupported === undefined)? null : this.SellerProvidedTitleSupported,
		DepositSupported: (this.DepositSupported === undefined)? null : this.DepositSupported,
		GlobalShippingEnabled: (this.GlobalShippingEnabled === undefined)? null : this.GlobalShippingEnabled,
		AdditionalCompatibilityEnabled: (this.AdditionalCompatibilityEnabled === undefined)? null : this.AdditionalCompatibilityEnabled,
		PickupDropOffEnabled: (this.PickupDropOffEnabled === undefined)? null : this.PickupDropOffEnabled,
		DigitalGoodDeliveryEnabled: (this.DigitalGoodDeliveryEnabled === undefined)? null : this.DigitalGoodDeliveryEnabled
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
module.exports = CategoryFeatureType;