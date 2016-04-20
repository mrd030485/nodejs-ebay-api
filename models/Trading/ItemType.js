var AttributeSetArrayType = require('./AttributeSetArrayType'),
	AttributeArrayType = require('./AttributeArrayType'),
	LookupAttributeArrayType = require('./LookupAttributeArrayType'),
	PaymentDetailsType = require('./PaymentDetailsType'),
	BiddingDetailsType = require('./BiddingDetailsType'),
	AmountType = require('./AmountType'),
	CharityType = require('./CharityType'),
	CrossPromotionsType = require('./CrossPromotionsType'),
	DistanceType = require('./DistanceType'),
	ItemIDType = require('./ItemIDType'),
	ListingDetailsType = require('./ListingDetailsType'),
	ListingDesignerType = require('./ListingDesignerType'),
	CategoryType = require('./CategoryType'),
	ProductListingDetailsType = require('./ProductListingDetailsType'),
	ReviseStatusType = require('./ReviseStatusType'),
	UserType = require('./UserType'),
	SellingStatusType = require('./SellingStatusType'),
	ShippingDetailsType = require('./ShippingDetailsType'),
	StorefrontType = require('./StorefrontType'),
	VATDetailsType = require('./VATDetailsType'),
	BestOfferDetailsType = require('./BestOfferDetailsType'),
	SearchDetailsType = require('./SearchDetailsType'),
	ExternalProductIDType = require('./ExternalProductIDType'),
	PictureDetailsType = require('./PictureDetailsType'),
	ListingCheckoutRedirectPreferenceType = require('./ListingCheckoutRedirectPreferenceType'),
	AddressType = require('./AddressType'),
	ExtendedContactDetailsType = require('./ExtendedContactDetailsType'),
	NameValueListArrayType = require('./NameValueListArrayType'),
	BuyerProtectionDetailsType = require('./BuyerProtectionDetailsType'),
	ItemPolicyViolationType = require('./ItemPolicyViolationType'),
	BusinessSellerDetailsType = require('./BusinessSellerDetailsType'),
	BuyerRequirementDetailsType = require('./BuyerRequirementDetailsType'),
	ReturnPolicyType = require('./ReturnPolicyType'),
	VariationsType = require('./VariationsType'),
	ItemCompatibilityListType = require('./ItemCompatibilityListType'),
	DiscountPriceInfoType = require('./DiscountPriceInfoType'),
	QuantityInfoType = require('./QuantityInfoType'),
	SellerProfilesType = require('./SellerProfilesType'),
	ShippingServiceCostOverrideListType = require('./ShippingServiceCostOverrideListType'),
	ShipPackageDetailsType = require('./ShipPackageDetailsType'),
	QuantityRestrictionPerBuyerInfoType = require('./QuantityRestrictionPerBuyerInfoType'),
	UnitInfoType = require('./UnitInfoType'),
	PickupInStoreDetailsType = require('./PickupInStoreDetailsType'),
	DigitalGoodInfoType = require('./DigitalGoodInfoType');

function ItemType(ApplicationData, AttributeSetArray, AttributeArray, LookupAttributeArray, AutoPay, PaymentDetails, BiddingDetails, MotorsGermanySearchable, BuyerProtection, BuyItNowPrice, CategoryMappingAllowed, Charity, Country, CrossPromotion, Currency, Description, DescriptionReviseMode, Distance, GiftIcon, GiftServices, HitCounter, ItemID, ListingDetails, ListingDesigner, ListingDuration, ListingEnhancement, ListingType, Location, LotSize, PartnerCode, PartnerName, PaymentMethods, PayPalEmailAddress, PrimaryCategory, PrivateListing, ProductListingDetails, Quantity, PrivateNotes, RegionID, RelistLink, ReservePrice, ReviseStatus, ScheduleTime, SecondaryCategory, FreeAddedCategory, Seller, SellingStatus, ShippingDetails, ShipToLocations, Site, StartPrice, Storefront, SubTitle, TimeLeft, Title, UUID, VATDetails, SellerVacationNote, WatchCount, HitCount, DisableBuyerRequirements, BestOfferDetails, LocationDefaulted, ThirdPartyCheckout, UseTaxTable, GetItFast, BuyerResponsibleForShipping, LimitedWarrantyEligible, eBayNotes, QuestionCount, Relisted, QuantityAvailable, SKU, CategoryBasedAttributesPrefill, SearchDetails, PostalCode, ShippingTermsInDescription, ExternalProductID, SellerInventoryID, PictureDetails, DispatchTimeMax, SkypeEnabled, SkypeID, SkypeContactOption, BestOfferEnabled, LocalListing, ThirdPartyCheckoutIntegration, ListingCheckoutRedirectPreference, SellerContactDetails, TotalQuestionCount, ProxyItem, ExtendedSellerContactDetails, LeadCount, NewLeadCount, ItemSpecifics, GroupCategoryID, ClassifiedAdPayPerLeadFee, BidGroupItem, ApplyBuyerProtection, ListingSubtype2, MechanicalCheckAccepted, UpdateSellerInfo, UpdateReturnPolicy, ItemPolicyViolation, CrossBorderTrade, BusinessSellerDetails, BuyerGuaranteePrice, BuyerRequirementDetails, ReturnPolicy, PaymentAllowedSite, InventoryTrackingMethod, IntegratedMerchantCreditCardEnabled, Variations, ItemCompatibilityList, ItemCompatibilityCount, ConditionID, ConditionDescription, ConditionDisplayName, TaxCategory, QuantityAvailableHint, QuantityThreshold, PostCheckoutExperienceEnabled, DiscountPriceInfo, UseRecommendedProduct, SellerProvidedTitle, VIN, VINLink, VRM, VRMLink, QuantityInfo, SellerProfiles, ShippingServiceCostOverrideList, ShippingPackageDetails, TopRatedListing, QuantityRestrictionPerBuyer, FloorPrice, CeilingPrice, IsIntermediatedShippingEligible, UnitInfo, RelistParentID, ConditionDefinition, HideFromSearch, ReasonHideFromSearch, IncludeRecommendations, PickupInStoreDetails, eBayNowEligible, eBayNowAvailable, IgnoreQuantity, AvailableForPickupDropOff, EligibleForPickupDropOff, LiveAuction, DigitalGoodInfo, eBayPlus, eBayPlusEligible, eMailDeliveryAvailable) {

	/**
	  Documentation
	   Contains the data defining one item. A seller populates an object of this type at listing time with the definition of a new item. A seller also uses an object of this type to relist or revise an item. Calls that retrieve item data (such
                    as the GetSellerList call) return an object of this type, filled with the item's data. Some fields are applicable both to eBay listings and Half.com listings. Some fields are only applicable to eBay listings, and others are only applicable
                    to Half.com listings.
	 */

	/**
	 * Arrays
	 */
	var _AttributeSetArray;
	var _AttributeArray;
	var _LookupAttributeArray;
	var _PaymentDetails;
	var _BiddingDetails;
	var _BuyItNowPrice;
	var _Charity;
	var _CrossPromotion;
	var _Distance;
	var _ItemID;
	var _ListingDetails;
	var _ListingDesigner;
	var _PrimaryCategory;
	var _ProductListingDetails;
	var _ReservePrice;
	var _ReviseStatus;
	var _SecondaryCategory;
	var _FreeAddedCategory;
	var _Seller;
	var _SellingStatus;
	var _ShippingDetails;
	var _StartPrice;
	var _Storefront;
	var _UUID;
	var _VATDetails;
	var _BestOfferDetails;
	var _SKU;
	var _SearchDetails;
	var _ExternalProductID;
	var _PictureDetails;
	var _ListingCheckoutRedirectPreference;
	var _SellerContactDetails;
	var _ExtendedSellerContactDetails;
	var _ItemSpecifics;
	var _ClassifiedAdPayPerLeadFee;
	var _ApplyBuyerProtection;
	var _ItemPolicyViolation;
	var _BusinessSellerDetails;
	var _BuyerGuaranteePrice;
	var _BuyerRequirementDetails;
	var _ReturnPolicy;
	var _Variations;
	var _ItemCompatibilityList;
	var _DiscountPriceInfo;
	var _QuantityInfo;
	var _SellerProfiles;
	var _ShippingServiceCostOverrideList;
	var _ShippingPackageDetails;
	var _QuantityRestrictionPerBuyer;
	var _FloorPrice;
	var _CeilingPrice;
	var _UnitInfo;
	var _PickupInStoreDetails;
	var _DigitalGoodInfo;
	Object.defineProperty(this, 'AttributeSetArray', {
		 get: function(){
			 return _AttributeSetArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AttributeSetArrayType){ 
					_AttributeSetArray = value; 
				}else{
					console.log('AttributeSetArray expects type AttributeSetArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AttributeArray', {
		 get: function(){
			 return _AttributeArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AttributeArrayType){ 
					_AttributeArray = value; 
				}else{
					console.log('AttributeArray expects type AttributeArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LookupAttributeArray', {
		 get: function(){
			 return _LookupAttributeArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LookupAttributeArrayType){ 
					_LookupAttributeArray = value; 
				}else{
					console.log('LookupAttributeArray expects type LookupAttributeArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentDetails', {
		 get: function(){
			 return _PaymentDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentDetailsType){ 
					_PaymentDetails = value; 
				}else{
					console.log('PaymentDetails expects type PaymentDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BiddingDetails', {
		 get: function(){
			 return _BiddingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BiddingDetailsType){ 
					_BiddingDetails = value; 
				}else{
					console.log('BiddingDetails expects type BiddingDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyItNowPrice', {
		 get: function(){
			 return _BuyItNowPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				
					_BuyItNowPrice = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'Charity', {
		 get: function(){
			 return _Charity;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharityType){ 
					_Charity = value; 
				}else{
					console.log('Charity expects type CharityType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossPromotion', {
		 get: function(){
			 return _CrossPromotion;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CrossPromotionsType){ 
					_CrossPromotion = value; 
				}else{
					console.log('CrossPromotion expects type CrossPromotionsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Distance', {
		 get: function(){
			 return _Distance;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DistanceType){ 
					_Distance = value; 
				}else{
					console.log('Distance expects type DistanceType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListingDetails', {
		 get: function(){
			 return _ListingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingDetailsType){ 
					_ListingDetails = value; 
				}else{
					console.log('ListingDetails expects type ListingDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListingDesigner', {
		 get: function(){
			 return _ListingDesigner;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingDesignerType){ 
					_ListingDesigner = value; 
				}else{
					console.log('ListingDesigner expects type ListingDesignerType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PrimaryCategory', {
		 get: function(){
			 return _PrimaryCategory;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CategoryType){ 
					_PrimaryCategory = value; 
				}else{
					console.log('PrimaryCategory expects type CategoryType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProductListingDetails', {
		 get: function(){
			 return _ProductListingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductListingDetailsType){ 
					_ProductListingDetails = value; 
				}else{
					console.log('ProductListingDetails expects type ProductListingDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReservePrice', {
		 get: function(){
			 return _ReservePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				
					_ReservePrice = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'ReviseStatus', {
		 get: function(){
			 return _ReviseStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReviseStatusType){ 
					_ReviseStatus = value; 
				}else{
					console.log('ReviseStatus expects type ReviseStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SecondaryCategory', {
		 get: function(){
			 return _SecondaryCategory;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CategoryType){ 
					_SecondaryCategory = value; 
				}else{
					console.log('SecondaryCategory expects type CategoryType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FreeAddedCategory', {
		 get: function(){
			 return _FreeAddedCategory;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CategoryType){ 
					_FreeAddedCategory = value; 
				}else{
					console.log('FreeAddedCategory expects type CategoryType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Seller', {
		 get: function(){
			 return _Seller;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserType){ 
					_Seller = value; 
				}else{
					console.log('Seller expects type UserType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingStatus', {
		 get: function(){
			 return _SellingStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingStatusType){ 
					_SellingStatus = value; 
				}else{
					console.log('SellingStatus expects type SellingStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingDetails', {
		 get: function(){
			 return _ShippingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingDetailsType){ 
					_ShippingDetails = value; 
				}else{
					console.log('ShippingDetails expects type ShippingDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'StartPrice', {
		 get: function(){
			 return _StartPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				
					_StartPrice = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'Storefront', {
		 get: function(){
			 return _Storefront;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StorefrontType){ 
					_Storefront = value; 
				}else{
					console.log('Storefront expects type StorefrontType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATDetails', {
		 get: function(){
			 return _VATDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VATDetailsType){ 
					_VATDetails = value; 
				}else{
					console.log('VATDetails expects type VATDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BestOfferDetails', {
		 get: function(){
			 return _BestOfferDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferDetailsType){ 
					_BestOfferDetails = value; 
				}else{
					console.log('BestOfferDetails expects type BestOfferDetailsType');
				}
			}
		}
	});
	
	Object.defineProperty(this, 'SearchDetails', {
		 get: function(){
			 return _SearchDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SearchDetailsType){ 
					_SearchDetails = value; 
				}else{
					console.log('SearchDetails expects type SearchDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PictureDetails', {
		 get: function(){
			 return _PictureDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PictureDetailsType){ 
					_PictureDetails = value; 
				}else{
					console.log('PictureDetails expects type PictureDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListingCheckoutRedirectPreference', {
		 get: function(){
			 return _ListingCheckoutRedirectPreference;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingCheckoutRedirectPreferenceType){ 
					_ListingCheckoutRedirectPreference = value; 
				}else{
					console.log('ListingCheckoutRedirectPreference expects type ListingCheckoutRedirectPreferenceType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerContactDetails', {
		 get: function(){
			 return _SellerContactDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_SellerContactDetails = value; 
				}else{
					console.log('SellerContactDetails expects type AddressType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExtendedSellerContactDetails', {
		 get: function(){
			 return _ExtendedSellerContactDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExtendedContactDetailsType){ 
					_ExtendedSellerContactDetails = value; 
				}else{
					console.log('ExtendedSellerContactDetails expects type ExtendedContactDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemSpecifics', {
		 get: function(){
			 return _ItemSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_ItemSpecifics = value; 
				}else{
					console.log('ItemSpecifics expects type NameValueListArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ClassifiedAdPayPerLeadFee', {
		 get: function(){
			 return _ClassifiedAdPayPerLeadFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				
					_ClassifiedAdPayPerLeadFee = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'ApplyBuyerProtection', {
		 get: function(){
			 return _ApplyBuyerProtection;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerProtectionDetailsType){ 
					_ApplyBuyerProtection = value; 
				}else{
					console.log('ApplyBuyerProtection expects type BuyerProtectionDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemPolicyViolation', {
		 get: function(){
			 return _ItemPolicyViolation;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemPolicyViolationType){ 
					_ItemPolicyViolation = value; 
				}else{
					console.log('ItemPolicyViolation expects type ItemPolicyViolationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BusinessSellerDetails', {
		 get: function(){
			 return _BusinessSellerDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BusinessSellerDetailsType){ 
					_BusinessSellerDetails = value; 
				}else{
					console.log('BusinessSellerDetails expects type BusinessSellerDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerGuaranteePrice', {
		 get: function(){
			 return _BuyerGuaranteePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){	
				_BuyerGuaranteePrice = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'BuyerRequirementDetails', {
		 get: function(){
			 return _BuyerRequirementDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerRequirementDetailsType){ 
					_BuyerRequirementDetails = value; 
				}else{
					console.log('BuyerRequirementDetails expects type BuyerRequirementDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReturnPolicy', {
		 get: function(){
			 return _ReturnPolicy;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReturnPolicyType){ 
					_ReturnPolicy = value; 
				}else{
					console.log('ReturnPolicy expects type ReturnPolicyType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Variations', {
		 get: function(){
			 return _Variations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationsType){ 
					_Variations = value; 
				}else{
					console.log('Variations expects type VariationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemCompatibilityList', {
		 get: function(){
			 return _ItemCompatibilityList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemCompatibilityListType){ 
					_ItemCompatibilityList = value; 
				}else{
					console.log('ItemCompatibilityList expects type ItemCompatibilityListType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DiscountPriceInfo', {
		 get: function(){
			 return _DiscountPriceInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DiscountPriceInfoType){ 
					_DiscountPriceInfo = value; 
				}else{
					console.log('DiscountPriceInfo expects type DiscountPriceInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'QuantityInfo', {
		 get: function(){
			 return _QuantityInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof QuantityInfoType){ 
					_QuantityInfo = value; 
				}else{
					console.log('QuantityInfo expects type QuantityInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerProfiles', {
		 get: function(){
			 return _SellerProfiles;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerProfilesType){ 
					_SellerProfiles = value; 
				}else{
					console.log('SellerProfiles expects type SellerProfilesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingServiceCostOverrideList', {
		 get: function(){
			 return _ShippingServiceCostOverrideList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingServiceCostOverrideListType){ 
					_ShippingServiceCostOverrideList = value; 
				}else{
					console.log('ShippingServiceCostOverrideList expects type ShippingServiceCostOverrideListType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingPackageDetails', {
		 get: function(){
			 return _ShippingPackageDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShipPackageDetailsType){ 
					_ShippingPackageDetails = value; 
				}else{
					console.log('ShippingPackageDetails expects type ShipPackageDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'QuantityRestrictionPerBuyer', {
		 get: function(){
			 return _QuantityRestrictionPerBuyer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof QuantityRestrictionPerBuyerInfoType){ 
					_QuantityRestrictionPerBuyer = value; 
				}else{
					console.log('QuantityRestrictionPerBuyer expects type QuantityRestrictionPerBuyerInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FloorPrice', {
		 get: function(){
			 return _FloorPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				
					_FloorPrice = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'CeilingPrice', {
		 get: function(){
			 return _CeilingPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				
					_CeilingPrice = value; 
				
			}
		}
	});
	Object.defineProperty(this, 'UnitInfo', {
		 get: function(){
			 return _UnitInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UnitInfoType){ 
					_UnitInfo = value; 
				}else{
					console.log('UnitInfo expects type UnitInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PickupInStoreDetails', {
		 get: function(){
			 return _PickupInStoreDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PickupInStoreDetailsType){ 
					_PickupInStoreDetails = value; 
				}else{
					console.log('PickupInStoreDetails expects type PickupInStoreDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DigitalGoodInfo', {
		 get: function(){
			 return _DigitalGoodInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DigitalGoodInfoType){ 
					_DigitalGoodInfo = value; 
				}else{
					console.log('DigitalGoodInfo expects type DigitalGoodInfoType');
				}
			}
		}
	});
	this.ApplicationData = ApplicationData;
	this.AttributeSetArray = AttributeSetArray;
	this.AttributeArray = AttributeArray;
	this.LookupAttributeArray = LookupAttributeArray;
	this.AutoPay = AutoPay;
	this.PaymentDetails = PaymentDetails;
	this.BiddingDetails = BiddingDetails;
	this.MotorsGermanySearchable = MotorsGermanySearchable;
	this.BuyerProtection = BuyerProtection;
	this.BuyItNowPrice = BuyItNowPrice;
	this.CategoryMappingAllowed = CategoryMappingAllowed;
	this.Charity = Charity;
	this.Country = Country;
	this.CrossPromotion = CrossPromotion;
	this.Currency = Currency;
	this.Description = Description;
	this.DescriptionReviseMode = DescriptionReviseMode;
	this.Distance = Distance;
	this.GiftIcon = GiftIcon;
	this.GiftServices = GiftServices;
	this.HitCounter = HitCounter;
	this.ItemID = ItemID;
	this.ListingDetails = ListingDetails;
	this.ListingDesigner = ListingDesigner;
	this.ListingDuration = ListingDuration;
	this.ListingEnhancement = ListingEnhancement;
	this.ListingType = ListingType;
	this.Location = Location;
	this.LotSize = LotSize;
	this.PartnerCode = PartnerCode;
	this.PartnerName = PartnerName;
	this.PaymentMethods = PaymentMethods;
	this.PayPalEmailAddress = PayPalEmailAddress;
	this.PrimaryCategory = PrimaryCategory;
	this.PrivateListing = PrivateListing;
	this.ProductListingDetails = ProductListingDetails;
	this.Quantity = Quantity;
	this.PrivateNotes = PrivateNotes;
	this.RegionID = RegionID;
	this.RelistLink = RelistLink;
	this.ReservePrice = ReservePrice;
	this.ReviseStatus = ReviseStatus;
	this.ScheduleTime = ScheduleTime;
	this.SecondaryCategory = SecondaryCategory;
	this.FreeAddedCategory = FreeAddedCategory;
	this.Seller = Seller;
	this.SellingStatus = SellingStatus;
	this.ShippingDetails = ShippingDetails;
	this.ShipToLocations = ShipToLocations;
	this.Site = Site;
	this.StartPrice = StartPrice;
	this.Storefront = Storefront;
	this.SubTitle = SubTitle;
	this.TimeLeft = TimeLeft;
	this.Title = Title;
	this.UUID = UUID;
	this.VATDetails = VATDetails;
	this.SellerVacationNote = SellerVacationNote;
	this.WatchCount = WatchCount;
	this.HitCount = HitCount;
	this.DisableBuyerRequirements = DisableBuyerRequirements;
	this.BestOfferDetails = BestOfferDetails;
	this.LocationDefaulted = LocationDefaulted;
	this.ThirdPartyCheckout = ThirdPartyCheckout;
	this.UseTaxTable = UseTaxTable;
	this.GetItFast = GetItFast;
	this.BuyerResponsibleForShipping = BuyerResponsibleForShipping;
	this.LimitedWarrantyEligible = LimitedWarrantyEligible;
	this.eBayNotes = eBayNotes;
	this.QuestionCount = QuestionCount;
	this.Relisted = Relisted;
	this.QuantityAvailable = QuantityAvailable;
	this.SKU = SKU;
	this.CategoryBasedAttributesPrefill = CategoryBasedAttributesPrefill;
	this.SearchDetails = SearchDetails;
	this.PostalCode = PostalCode;
	this.ShippingTermsInDescription = ShippingTermsInDescription;
	this.ExternalProductID = ExternalProductID;
	this.SellerInventoryID = SellerInventoryID;
	this.PictureDetails = PictureDetails;
	this.DispatchTimeMax = DispatchTimeMax;
	this.SkypeEnabled = SkypeEnabled;
	this.SkypeID = SkypeID;
	this.SkypeContactOption = SkypeContactOption;
	this.BestOfferEnabled = BestOfferEnabled;
	this.LocalListing = LocalListing;
	this.ThirdPartyCheckoutIntegration = ThirdPartyCheckoutIntegration;
	this.ListingCheckoutRedirectPreference = ListingCheckoutRedirectPreference;
	this.SellerContactDetails = SellerContactDetails;
	this.TotalQuestionCount = TotalQuestionCount;
	this.ProxyItem = ProxyItem;
	this.ExtendedSellerContactDetails = ExtendedSellerContactDetails;
	this.LeadCount = LeadCount;
	this.NewLeadCount = NewLeadCount;
	this.ItemSpecifics = ItemSpecifics;
	this.GroupCategoryID = GroupCategoryID;
	this.ClassifiedAdPayPerLeadFee = ClassifiedAdPayPerLeadFee;
	this.BidGroupItem = BidGroupItem;
	this.ApplyBuyerProtection = ApplyBuyerProtection;
	this.ListingSubtype2 = ListingSubtype2;
	this.MechanicalCheckAccepted = MechanicalCheckAccepted;
	this.UpdateSellerInfo = UpdateSellerInfo;
	this.UpdateReturnPolicy = UpdateReturnPolicy;
	this.ItemPolicyViolation = ItemPolicyViolation;
	this.CrossBorderTrade = CrossBorderTrade;
	this.BusinessSellerDetails = BusinessSellerDetails;
	this.BuyerGuaranteePrice = BuyerGuaranteePrice;
	this.BuyerRequirementDetails = BuyerRequirementDetails;
	this.ReturnPolicy = ReturnPolicy;
	this.PaymentAllowedSite = PaymentAllowedSite;
	this.InventoryTrackingMethod = InventoryTrackingMethod;
	this.IntegratedMerchantCreditCardEnabled = IntegratedMerchantCreditCardEnabled;
	this.Variations = Variations;
	this.ItemCompatibilityList = ItemCompatibilityList;
	this.ItemCompatibilityCount = ItemCompatibilityCount;
	this.ConditionID = ConditionID;
	this.ConditionDescription = ConditionDescription;
	this.ConditionDisplayName = ConditionDisplayName;
	this.TaxCategory = TaxCategory;
	this.QuantityAvailableHint = QuantityAvailableHint;
	this.QuantityThreshold = QuantityThreshold;
	this.PostCheckoutExperienceEnabled = PostCheckoutExperienceEnabled;
	this.DiscountPriceInfo = DiscountPriceInfo;
	this.UseRecommendedProduct = UseRecommendedProduct;
	this.SellerProvidedTitle = SellerProvidedTitle;
	this.VIN = VIN;
	this.VINLink = VINLink;
	this.VRM = VRM;
	this.VRMLink = VRMLink;
	this.QuantityInfo = QuantityInfo;
	this.SellerProfiles = SellerProfiles;
	this.ShippingServiceCostOverrideList = ShippingServiceCostOverrideList;
	this.ShippingPackageDetails = ShippingPackageDetails;
	this.TopRatedListing = TopRatedListing;
	this.QuantityRestrictionPerBuyer = QuantityRestrictionPerBuyer;
	this.FloorPrice = FloorPrice;
	this.CeilingPrice = CeilingPrice;
	this.IsIntermediatedShippingEligible = IsIntermediatedShippingEligible;
	this.UnitInfo = UnitInfo;
	this.RelistParentID = RelistParentID;
	this.ConditionDefinition = ConditionDefinition;
	this.HideFromSearch = HideFromSearch;
	this.ReasonHideFromSearch = ReasonHideFromSearch;
	this.IncludeRecommendations = IncludeRecommendations;
	this.PickupInStoreDetails = PickupInStoreDetails;
	this.eBayNowEligible = eBayNowEligible;
	this.eBayNowAvailable = eBayNowAvailable;
	this.IgnoreQuantity = IgnoreQuantity;
	this.AvailableForPickupDropOff = AvailableForPickupDropOff;
	this.EligibleForPickupDropOff = EligibleForPickupDropOff;
	this.LiveAuction = LiveAuction;
	this.DigitalGoodInfo = DigitalGoodInfo;
	this.eBayPlus = eBayPlus;
	this.eBayPlusEligible = eBayPlusEligible;
	this.eMailDeliveryAvailable = eMailDeliveryAvailable;
}
ItemType.prototype.toJSON = function(with_null) {
	var json = { 
		ApplicationData: (this.ApplicationData === undefined)? null : this.ApplicationData,
		AttributeSetArray: (this.AttributeSetArray === undefined)? null : this.AttributeSetArray.toJSON(with_null),
		AttributeArray: (this.AttributeArray === undefined)? null : this.AttributeArray.toJSON(with_null),
		LookupAttributeArray: (this.LookupAttributeArray === undefined)? null : this.LookupAttributeArray.toJSON(with_null),
		AutoPay: (this.AutoPay === undefined)? null : this.AutoPay,
		PaymentDetails: (this.PaymentDetails === undefined)? null : this.PaymentDetails.toJSON(with_null),
		BiddingDetails: (this.BiddingDetails === undefined)? null : this.BiddingDetails.toJSON(with_null),
		MotorsGermanySearchable: (this.MotorsGermanySearchable === undefined)? null : this.MotorsGermanySearchable,
		BuyerProtection: (this.BuyerProtection === undefined)? null : this.BuyerProtection,
		BuyItNowPrice: (this.BuyItNowPrice === undefined)? null : this.BuyItNowPrice,
		CategoryMappingAllowed: (this.CategoryMappingAllowed === undefined)? null : this.CategoryMappingAllowed,
		Charity: (this.Charity === undefined)? null : this.Charity.toJSON(with_null),
		Country: (this.Country === undefined)? null : this.Country,
		CrossPromotion: (this.CrossPromotion === undefined)? null : this.CrossPromotion.toJSON(with_null),
		Currency: (this.Currency === undefined)? null : this.Currency,
		Description: (this.Description === undefined)? null : {_cdata: this.Description},
		DescriptionReviseMode: (this.DescriptionReviseMode === undefined)? null : this.DescriptionReviseMode,
		Distance: (this.Distance === undefined)? null : this.Distance.toJSON(with_null),
		GiftIcon: (this.GiftIcon === undefined)? null : this.GiftIcon,
		GiftServices: (this.GiftServices === undefined)? null : this.GiftServices,
		HitCounter: (this.HitCounter === undefined)? null : this.HitCounter,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(with_null),
		ListingDetails: (this.ListingDetails === undefined)? null : this.ListingDetails.toJSON(with_null),
		ListingDesigner: (this.ListingDesigner === undefined)? null : this.ListingDesigner.toJSON(with_null),
		ListingDuration: (this.ListingDuration === undefined)? null : this.ListingDuration,
		ListingEnhancement: (this.ListingEnhancement === undefined)? null : this.ListingEnhancement,
		ListingType: (this.ListingType === undefined)? null : this.ListingType,
		Location: (this.Location === undefined)? null : this.Location,
		LotSize: (this.LotSize === undefined)? null : this.LotSize,
		PartnerCode: (this.PartnerCode === undefined)? null : this.PartnerCode,
		PartnerName: (this.PartnerName === undefined)? null : this.PartnerName,
		PaymentMethods: (this.PaymentMethods === undefined)? null : this.PaymentMethods,
		PayPalEmailAddress: (this.PayPalEmailAddress === undefined)? null : this.PayPalEmailAddress,
		PrimaryCategory: (this.PrimaryCategory === undefined)? null : this.PrimaryCategory.toJSON(with_null),
		PrivateListing: (this.PrivateListing === undefined)? null : this.PrivateListing,
		ProductListingDetails: (this.ProductListingDetails === undefined)? null : this.ProductListingDetails.toJSON(with_null),
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		PrivateNotes: (this.PrivateNotes === undefined)? null : this.PrivateNotes,
		RegionID: (this.RegionID === undefined)? null : this.RegionID,
		RelistLink: (this.RelistLink === undefined)? null : this.RelistLink,
		ReservePrice: (this.ReservePrice === undefined)? null : this.ReservePrice,
		ReviseStatus: (this.ReviseStatus === undefined)? null : this.ReviseStatus.toJSON(with_null),
		ScheduleTime: (this.ScheduleTime === undefined)? null : this.ScheduleTime,
		SecondaryCategory: (this.SecondaryCategory === undefined)? null : this.SecondaryCategory.toJSON(with_null),
		FreeAddedCategory: (this.FreeAddedCategory === undefined)? null : this.FreeAddedCategory.toJSON(with_null),
		Seller: (this.Seller === undefined)? null : this.Seller.toJSON(with_null),
		SellingStatus: (this.SellingStatus === undefined)? null : this.SellingStatus.toJSON(with_null),
		ShippingDetails: (this.ShippingDetails === undefined)? null : this.ShippingDetails.toJSON(with_null),
		ShipToLocations: (this.ShipToLocations === undefined)? null : this.ShipToLocations,
		Site: (this.Site === undefined)? null : this.Site,
		StartPrice: (this.StartPrice === undefined)? null : this.StartPrice,
		Storefront: (this.Storefront === undefined)? null : this.Storefront.toJSON(with_null),
		SubTitle: (this.SubTitle === undefined)? null : this.SubTitle,
		TimeLeft: (this.TimeLeft === undefined)? null : this.TimeLeft,
		Title: (this.Title === undefined)? null : this.Title,
		UUID: (this.UUID === undefined)? null : this.UUID,
		VATDetails: (this.VATDetails === undefined)? null : this.VATDetails.toJSON(with_null),
		SellerVacationNote: (this.SellerVacationNote === undefined)? null : this.SellerVacationNote,
		WatchCount: (this.WatchCount === undefined)? null : this.WatchCount,
		HitCount: (this.HitCount === undefined)? null : this.HitCount,
		DisableBuyerRequirements: (this.DisableBuyerRequirements === undefined)? null : this.DisableBuyerRequirements,
		BestOfferDetails: (this.BestOfferDetails === undefined)? null : this.BestOfferDetails.toJSON(with_null),
		LocationDefaulted: (this.LocationDefaulted === undefined)? null : this.LocationDefaulted,
		ThirdPartyCheckout: (this.ThirdPartyCheckout === undefined)? null : this.ThirdPartyCheckout,
		UseTaxTable: (this.UseTaxTable === undefined)? null : this.UseTaxTable,
		GetItFast: (this.GetItFast === undefined)? null : this.GetItFast,
		BuyerResponsibleForShipping: (this.BuyerResponsibleForShipping === undefined)? null : this.BuyerResponsibleForShipping,
		LimitedWarrantyEligible: (this.LimitedWarrantyEligible === undefined)? null : this.LimitedWarrantyEligible,
		eBayNotes: (this.eBayNotes === undefined)? null : this.eBayNotes,
		QuestionCount: (this.QuestionCount === undefined)? null : this.QuestionCount,
		Relisted: (this.Relisted === undefined)? null : this.Relisted,
		QuantityAvailable: (this.QuantityAvailable === undefined)? null : this.QuantityAvailable,
		SKU: (this.SKU === undefined)? null : this.SKU,
		CategoryBasedAttributesPrefill: (this.CategoryBasedAttributesPrefill === undefined)? null : this.CategoryBasedAttributesPrefill,
		SearchDetails: (this.SearchDetails === undefined)? null : this.SearchDetails.toJSON(with_null),
		PostalCode: (this.PostalCode === undefined)? null : this.PostalCode,
		ShippingTermsInDescription: (this.ShippingTermsInDescription === undefined)? null : this.ShippingTermsInDescription,
		ExternalProductID: (this.ExternalProductID === undefined)? null : this.ExternalProductID.toJSON(with_null),
		SellerInventoryID: (this.SellerInventoryID === undefined)? null : this.SellerInventoryID,
		PictureDetails: (this.PictureDetails === undefined)? null : this.PictureDetails.toJSON(with_null),
		DispatchTimeMax: (this.DispatchTimeMax === undefined)? null : this.DispatchTimeMax,
		SkypeEnabled: (this.SkypeEnabled === undefined)? null : this.SkypeEnabled,
		SkypeID: (this.SkypeID === undefined)? null : this.SkypeID,
		SkypeContactOption: (this.SkypeContactOption === undefined)? null : this.SkypeContactOption,
		BestOfferEnabled: (this.BestOfferEnabled === undefined)? null : this.BestOfferEnabled,
		LocalListing: (this.LocalListing === undefined)? null : this.LocalListing,
		ThirdPartyCheckoutIntegration: (this.ThirdPartyCheckoutIntegration === undefined)? null : this.ThirdPartyCheckoutIntegration,
		ListingCheckoutRedirectPreference: (this.ListingCheckoutRedirectPreference === undefined)? null : this.ListingCheckoutRedirectPreference.toJSON(with_null),
		SellerContactDetails: (this.SellerContactDetails === undefined)? null : this.SellerContactDetails.toJSON(with_null),
		TotalQuestionCount: (this.TotalQuestionCount === undefined)? null : this.TotalQuestionCount,
		ProxyItem: (this.ProxyItem === undefined)? null : this.ProxyItem,
		ExtendedSellerContactDetails: (this.ExtendedSellerContactDetails === undefined)? null : this.ExtendedSellerContactDetails.toJSON(with_null),
		LeadCount: (this.LeadCount === undefined)? null : this.LeadCount,
		NewLeadCount: (this.NewLeadCount === undefined)? null : this.NewLeadCount,
		ItemSpecifics: (this.ItemSpecifics === undefined)? null : this.ItemSpecifics.toJSON(with_null),
		GroupCategoryID: (this.GroupCategoryID === undefined)? null : this.GroupCategoryID,
		ClassifiedAdPayPerLeadFee: (this.ClassifiedAdPayPerLeadFee === undefined)? null : this.ClassifiedAdPayPerLeadFee,
		BidGroupItem: (this.BidGroupItem === undefined)? null : this.BidGroupItem,
		ApplyBuyerProtection: (this.ApplyBuyerProtection === undefined)? null : this.ApplyBuyerProtection.toJSON(with_null),
		ListingSubtype2: (this.ListingSubtype2 === undefined)? null : this.ListingSubtype2,
		MechanicalCheckAccepted: (this.MechanicalCheckAccepted === undefined)? null : this.MechanicalCheckAccepted,
		UpdateSellerInfo: (this.UpdateSellerInfo === undefined)? null : this.UpdateSellerInfo,
		UpdateReturnPolicy: (this.UpdateReturnPolicy === undefined)? null : this.UpdateReturnPolicy,
		ItemPolicyViolation: (this.ItemPolicyViolation === undefined)? null : this.ItemPolicyViolation.toJSON(with_null),
		CrossBorderTrade: (this.CrossBorderTrade === undefined)? null : this.CrossBorderTrade,
		BusinessSellerDetails: (this.BusinessSellerDetails === undefined)? null : this.BusinessSellerDetails.toJSON(with_null),
		BuyerGuaranteePrice: (this.BuyerGuaranteePrice === undefined)? null : this.BuyerGuaranteePrice,
		BuyerRequirementDetails: (this.BuyerRequirementDetails === undefined)? null : this.BuyerRequirementDetails.toJSON(with_null),
		ReturnPolicy: (this.ReturnPolicy === undefined)? null : this.ReturnPolicy.toJSON(with_null),
		PaymentAllowedSite: (this.PaymentAllowedSite === undefined)? null : this.PaymentAllowedSite,
		InventoryTrackingMethod: (this.InventoryTrackingMethod === undefined)? null : this.InventoryTrackingMethod,
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled,
		Variations: (this.Variations === undefined)? null : this.Variations.toJSON(with_null),
		ItemCompatibilityList: (this.ItemCompatibilityList === undefined)? null : this.ItemCompatibilityList.toJSON(with_null),
		ItemCompatibilityCount: (this.ItemCompatibilityCount === undefined)? null : this.ItemCompatibilityCount,
		ConditionID: (this.ConditionID === undefined)? null : this.ConditionID,
		ConditionDescription: (this.ConditionDescription === undefined)? null : this.ConditionDescription,
		ConditionDisplayName: (this.ConditionDisplayName === undefined)? null : this.ConditionDisplayName,
		TaxCategory: (this.TaxCategory === undefined)? null : this.TaxCategory,
		QuantityAvailableHint: (this.QuantityAvailableHint === undefined)? null : this.QuantityAvailableHint,
		QuantityThreshold: (this.QuantityThreshold === undefined)? null : this.QuantityThreshold,
		PostCheckoutExperienceEnabled: (this.PostCheckoutExperienceEnabled === undefined)? null : this.PostCheckoutExperienceEnabled,
		DiscountPriceInfo: (this.DiscountPriceInfo === undefined)? null : this.DiscountPriceInfo.toJSON(with_null),
		UseRecommendedProduct: (this.UseRecommendedProduct === undefined)? null : this.UseRecommendedProduct,
		SellerProvidedTitle: (this.SellerProvidedTitle === undefined)? null : this.SellerProvidedTitle,
		VIN: (this.VIN === undefined)? null : this.VIN,
		VINLink: (this.VINLink === undefined)? null : this.VINLink,
		VRM: (this.VRM === undefined)? null : this.VRM,
		VRMLink: (this.VRMLink === undefined)? null : this.VRMLink,
		QuantityInfo: (this.QuantityInfo === undefined)? null : this.QuantityInfo.toJSON(with_null),
		SellerProfiles: (this.SellerProfiles === undefined)? null : this.SellerProfiles.toJSON(with_null),
		ShippingServiceCostOverrideList: (this.ShippingServiceCostOverrideList === undefined)? null : this.ShippingServiceCostOverrideList.toJSON(with_null),
		ShippingPackageDetails: (this.ShippingPackageDetails === undefined)? null : this.ShippingPackageDetails.toJSON(with_null),
		TopRatedListing: (this.TopRatedListing === undefined)? null : this.TopRatedListing,
		QuantityRestrictionPerBuyer: (this.QuantityRestrictionPerBuyer === undefined)? null : this.QuantityRestrictionPerBuyer.toJSON(with_null),
		FloorPrice: (this.FloorPrice === undefined)? null : this.FloorPrice,
		CeilingPrice: (this.CeilingPrice === undefined)? null : this.CeilingPrice,
		IsIntermediatedShippingEligible: (this.IsIntermediatedShippingEligible === undefined)? null : this.IsIntermediatedShippingEligible,
		UnitInfo: (this.UnitInfo === undefined)? null : this.UnitInfo.toJSON(with_null),
		RelistParentID: (this.RelistParentID === undefined)? null : this.RelistParentID,
		ConditionDefinition: (this.ConditionDefinition === undefined)? null : this.ConditionDefinition,
		HideFromSearch: (this.HideFromSearch === undefined)? null : this.HideFromSearch,
		ReasonHideFromSearch: (this.ReasonHideFromSearch === undefined)? null : this.ReasonHideFromSearch,
		IncludeRecommendations: (this.IncludeRecommendations === undefined)? null : this.IncludeRecommendations,
		PickupInStoreDetails: (this.PickupInStoreDetails === undefined)? null : this.PickupInStoreDetails.toJSON(with_null),
		eBayNowEligible: (this.eBayNowEligible === undefined)? null : this.eBayNowEligible,
		eBayNowAvailable: (this.eBayNowAvailable === undefined)? null : this.eBayNowAvailable,
		IgnoreQuantity: (this.IgnoreQuantity === undefined)? null : this.IgnoreQuantity,
		AvailableForPickupDropOff: (this.AvailableForPickupDropOff === undefined)? null : this.AvailableForPickupDropOff,
		EligibleForPickupDropOff: (this.EligibleForPickupDropOff === undefined)? null : this.EligibleForPickupDropOff,
		LiveAuction: (this.LiveAuction === undefined)? null : this.LiveAuction,
		DigitalGoodInfo: (this.DigitalGoodInfo === undefined)? null : this.DigitalGoodInfo.toJSON(with_null),
		eBayPlus: (this.eBayPlus === undefined)? null : this.eBayPlus,
		eBayPlusEligible: (this.eBayPlusEligible === undefined)? null : this.eBayPlusEligible,
		eMailDeliveryAvailable: (this.eMailDeliveryAvailable === undefined)? null : this.eMailDeliveryAvailable
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
module.exports = ItemType;
