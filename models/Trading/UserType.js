var FeedbackRatingStarCodeType = require('./FeedbackRatingStarCodeType'),
	AddressType = require('./AddressType'),
	SiteCodeType = require('./SiteCodeType'),
	UserStatusCodeType = require('./UserStatusCodeType'),
	UserIDType = require('./UserIDType'),
	VATStatusCodeType = require('./VATStatusCodeType'),
	BuyerType = require('./BuyerType'),
	SellerType = require('./SellerType'),
	BusinessRoleType = require('./BusinessRoleType'),
	CharityAffiliationsType = require('./CharityAffiliationsType'),
	PayPalAccountLevelCodeType = require('./PayPalAccountLevelCodeType'),
	PayPalAccountTypeCodeType = require('./PayPalAccountTypeCodeType'),
	PayPalAccountStatusCodeType = require('./PayPalAccountStatusCodeType'),
	SellerPaymentMethodCodeType = require('./SellerPaymentMethodCodeType'),
	BiddingSummaryType = require('./BiddingSummaryType');

function UserType(AboutMePage, EIASToken, Email, FeedbackScore, UniqueNegativeFeedbackCount, UniquePositiveFeedbackCount, PositiveFeedbackPercent, FeedbackPrivate, FeedbackRatingStar, IDVerified, eBayGoodStanding, NewUser, RegistrationAddress, RegistrationDate, Site, Status, UserID, UserIDChanged, UserIDLastChanged, VATStatus, BuyerInfo, SellerInfo, BusinessRole, CharityAffiliations, PayPalAccountLevel, PayPalAccountType, PayPalAccountStatus, UserSubscription, SiteVerified, SkypeID, eBayWikiReadOnly, TUVLevel, VATID, MotorsDealer, SellerPaymentMethod, BiddingSummary, UserAnonymized, UniqueNeutralFeedbackCount, EnterpriseSeller, BillingEmail, QualifiesForSelling, StaticAlias, ShippingAddress, UserFirstName, UserLastName) {

	/**
	  Documentation
	   
                Type to contain the data for one eBay user. Depending on the context, the user might be the seller or the buyer on either side of an order, or the bidder or winning bidder in a listing. An object of this type is returned by a number of calls, including
                the GetUser call.
            
	 */

	/**
	 * Arrays
	 *	UserSubscription: EBaySubscriptionTypeCodeType
	 */
	var _FeedbackRatingStar;
	var _RegistrationAddress;
	var _Site;
	var _Status;
	var _UserID;
	var _VATStatus;
	var _BuyerInfo;
	var _SellerInfo;
	var _BusinessRole;
	var _CharityAffiliations;
	var _PayPalAccountLevel;
	var _PayPalAccountType;
	var _PayPalAccountStatus;
	var _SellerPaymentMethod;
	var _BiddingSummary;
	var _ShippingAddress;
	Object.defineProperty(this, 'FeedbackRatingStar', {
		 get: function(){
			 return _FeedbackRatingStar;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackRatingStarCodeType){ 
					_FeedbackRatingStar = value; 
				}else{
					console.log('FeedbackRatingStar expects type FeedbackRatingStarCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RegistrationAddress', {
		 get: function(){
			 return _RegistrationAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_RegistrationAddress = value; 
				}else{
					console.log('RegistrationAddress expects type AddressType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Site', {
		 get: function(){
			 return _Site;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SiteCodeType){ 
					_Site = value; 
				}else{
					console.log('Site expects type SiteCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type UserStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UserID', {
		 get: function(){
			 return _UserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_UserID = value; 
				}else{
					console.log('UserID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATStatus', {
		 get: function(){
			 return _VATStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VATStatusCodeType){ 
					_VATStatus = value; 
				}else{
					console.log('VATStatus expects type VATStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerInfo', {
		 get: function(){
			 return _BuyerInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerType){ 
					_BuyerInfo = value; 
				}else{
					console.log('BuyerInfo expects type BuyerType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerInfo', {
		 get: function(){
			 return _SellerInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerType){ 
					_SellerInfo = value; 
				}else{
					console.log('SellerInfo expects type SellerType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BusinessRole', {
		 get: function(){
			 return _BusinessRole;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BusinessRoleType){ 
					_BusinessRole = value; 
				}else{
					console.log('BusinessRole expects type BusinessRoleType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CharityAffiliations', {
		 get: function(){
			 return _CharityAffiliations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharityAffiliationsType){ 
					_CharityAffiliations = value; 
				}else{
					console.log('CharityAffiliations expects type CharityAffiliationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PayPalAccountLevel', {
		 get: function(){
			 return _PayPalAccountLevel;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayPalAccountLevelCodeType){ 
					_PayPalAccountLevel = value; 
				}else{
					console.log('PayPalAccountLevel expects type PayPalAccountLevelCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PayPalAccountType', {
		 get: function(){
			 return _PayPalAccountType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayPalAccountTypeCodeType){ 
					_PayPalAccountType = value; 
				}else{
					console.log('PayPalAccountType expects type PayPalAccountTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PayPalAccountStatus', {
		 get: function(){
			 return _PayPalAccountStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PayPalAccountStatusCodeType){ 
					_PayPalAccountStatus = value; 
				}else{
					console.log('PayPalAccountStatus expects type PayPalAccountStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerPaymentMethod', {
		 get: function(){
			 return _SellerPaymentMethod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerPaymentMethodCodeType){ 
					_SellerPaymentMethod = value; 
				}else{
					console.log('SellerPaymentMethod expects type SellerPaymentMethodCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BiddingSummary', {
		 get: function(){
			 return _BiddingSummary;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BiddingSummaryType){ 
					_BiddingSummary = value; 
				}else{
					console.log('BiddingSummary expects type BiddingSummaryType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingAddress', {
		 get: function(){
			 return _ShippingAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_ShippingAddress = value; 
				}else{
					console.log('ShippingAddress expects type AddressType');
				}
			}
		}
	});
	this.AboutMePage = AboutMePage;
	this.EIASToken = EIASToken;
	this.Email = Email;
	this.FeedbackScore = FeedbackScore;
	this.UniqueNegativeFeedbackCount = UniqueNegativeFeedbackCount;
	this.UniquePositiveFeedbackCount = UniquePositiveFeedbackCount;
	this.PositiveFeedbackPercent = PositiveFeedbackPercent;
	this.FeedbackPrivate = FeedbackPrivate;
	this.FeedbackRatingStar = FeedbackRatingStar;
	this.IDVerified = IDVerified;
	this.eBayGoodStanding = eBayGoodStanding;
	this.NewUser = NewUser;
	this.RegistrationAddress = RegistrationAddress;
	this.RegistrationDate = RegistrationDate;
	this.Site = Site;
	this.Status = Status;
	this.UserID = UserID;
	this.UserIDChanged = UserIDChanged;
	this.UserIDLastChanged = UserIDLastChanged;
	this.VATStatus = VATStatus;
	this.BuyerInfo = BuyerInfo;
	this.SellerInfo = SellerInfo;
	this.BusinessRole = BusinessRole;
	this.CharityAffiliations = CharityAffiliations;
	this.PayPalAccountLevel = PayPalAccountLevel;
	this.PayPalAccountType = PayPalAccountType;
	this.PayPalAccountStatus = PayPalAccountStatus;
	this.UserSubscription = UserSubscription;
	this.SiteVerified = SiteVerified;
	this.SkypeID = SkypeID;
	this.eBayWikiReadOnly = eBayWikiReadOnly;
	this.TUVLevel = TUVLevel;
	this.VATID = VATID;
	this.MotorsDealer = MotorsDealer;
	this.SellerPaymentMethod = SellerPaymentMethod;
	this.BiddingSummary = BiddingSummary;
	this.UserAnonymized = UserAnonymized;
	this.UniqueNeutralFeedbackCount = UniqueNeutralFeedbackCount;
	this.EnterpriseSeller = EnterpriseSeller;
	this.BillingEmail = BillingEmail;
	this.QualifiesForSelling = QualifiesForSelling;
	this.StaticAlias = StaticAlias;
	this.ShippingAddress = ShippingAddress;
	this.UserFirstName = UserFirstName;
	this.UserLastName = UserLastName;
}
UserType.prototype.toJSON = function(with_null) {
	var json = { 
		AboutMePage: (this.AboutMePage === undefined)? null : this.AboutMePage,
		EIASToken: (this.EIASToken === undefined)? null : this.EIASToken,
		Email: (this.Email === undefined)? null : this.Email,
		FeedbackScore: (this.FeedbackScore === undefined)? null : this.FeedbackScore,
		UniqueNegativeFeedbackCount: (this.UniqueNegativeFeedbackCount === undefined)? null : this.UniqueNegativeFeedbackCount,
		UniquePositiveFeedbackCount: (this.UniquePositiveFeedbackCount === undefined)? null : this.UniquePositiveFeedbackCount,
		PositiveFeedbackPercent: (this.PositiveFeedbackPercent === undefined)? null : this.PositiveFeedbackPercent,
		FeedbackPrivate: (this.FeedbackPrivate === undefined)? null : this.FeedbackPrivate,
		FeedbackRatingStar: (this.FeedbackRatingStar === undefined)? null : this.FeedbackRatingStar.toJSON(),
		IDVerified: (this.IDVerified === undefined)? null : this.IDVerified,
		eBayGoodStanding: (this.eBayGoodStanding === undefined)? null : this.eBayGoodStanding,
		NewUser: (this.NewUser === undefined)? null : this.NewUser,
		RegistrationAddress: (this.RegistrationAddress === undefined)? null : this.RegistrationAddress.toJSON(),
		RegistrationDate: (this.RegistrationDate === undefined)? null : this.RegistrationDate,
		Site: (this.Site === undefined)? null : this.Site.toJSON(),
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		UserIDChanged: (this.UserIDChanged === undefined)? null : this.UserIDChanged,
		UserIDLastChanged: (this.UserIDLastChanged === undefined)? null : this.UserIDLastChanged,
		VATStatus: (this.VATStatus === undefined)? null : this.VATStatus.toJSON(),
		BuyerInfo: (this.BuyerInfo === undefined)? null : this.BuyerInfo.toJSON(),
		SellerInfo: (this.SellerInfo === undefined)? null : this.SellerInfo.toJSON(),
		BusinessRole: (this.BusinessRole === undefined)? null : this.BusinessRole.toJSON(),
		CharityAffiliations: (this.CharityAffiliations === undefined)? null : this.CharityAffiliations.toJSON(),
		PayPalAccountLevel: (this.PayPalAccountLevel === undefined)? null : this.PayPalAccountLevel.toJSON(),
		PayPalAccountType: (this.PayPalAccountType === undefined)? null : this.PayPalAccountType.toJSON(),
		PayPalAccountStatus: (this.PayPalAccountStatus === undefined)? null : this.PayPalAccountStatus.toJSON(),
		UserSubscription: (this.UserSubscription === undefined)? null : this.UserSubscription,
		SiteVerified: (this.SiteVerified === undefined)? null : this.SiteVerified,
		SkypeID: (this.SkypeID === undefined)? null : this.SkypeID,
		eBayWikiReadOnly: (this.eBayWikiReadOnly === undefined)? null : this.eBayWikiReadOnly,
		TUVLevel: (this.TUVLevel === undefined)? null : this.TUVLevel,
		VATID: (this.VATID === undefined)? null : this.VATID,
		MotorsDealer: (this.MotorsDealer === undefined)? null : this.MotorsDealer,
		SellerPaymentMethod: (this.SellerPaymentMethod === undefined)? null : this.SellerPaymentMethod.toJSON(),
		BiddingSummary: (this.BiddingSummary === undefined)? null : this.BiddingSummary.toJSON(),
		UserAnonymized: (this.UserAnonymized === undefined)? null : this.UserAnonymized,
		UniqueNeutralFeedbackCount: (this.UniqueNeutralFeedbackCount === undefined)? null : this.UniqueNeutralFeedbackCount,
		EnterpriseSeller: (this.EnterpriseSeller === undefined)? null : this.EnterpriseSeller,
		BillingEmail: (this.BillingEmail === undefined)? null : this.BillingEmail,
		QualifiesForSelling: (this.QualifiesForSelling === undefined)? null : this.QualifiesForSelling,
		StaticAlias: (this.StaticAlias === undefined)? null : this.StaticAlias,
		ShippingAddress: (this.ShippingAddress === undefined)? null : this.ShippingAddress.toJSON(),
		UserFirstName: (this.UserFirstName === undefined)? null : this.UserFirstName,
		UserLastName: (this.UserLastName === undefined)? null : this.UserLastName
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
module.exports = UserType;