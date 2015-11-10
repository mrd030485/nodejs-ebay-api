var CharityStatusCodeType = require('./CharityStatusCodeType');

function CharityInfoType(Name, ListingNPEmailNotifPref, ListingNPEmail, ListingNPContactName, Mission, LogoURL, Status, SearchableString, CharityRegion, CharityDomain, CharityID, LogoURLSelling, DisplayLogoSelling, DisplayNameInCheckout, Description, ShowMultipleDonationAmountInCheckout, ExternalID, PopularityIndex, EIN, NonProfitSecondName, NonProfitAddress, NonProfitSocialAddress) {

	/**
	  Documentation
	   
                Type defining the <b>Charity</b> container, which consists of all details related to a nonprofit charity organization.
            
	 */

	/**
	 * Arrays
	 *	NonProfitAddress: NonProfitAddressType
	 *	NonProfitSocialAddress: NonProfitSocialAddressType
	 */
	var _Status;
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharityStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type CharityStatusCodeType');
				}
			}
		}
	});
	this.Name = Name;
	this.ListingNPEmailNotifPref = ListingNPEmailNotifPref;
	this.ListingNPEmail = ListingNPEmail;
	this.ListingNPContactName = ListingNPContactName;
	this.Mission = Mission;
	this.LogoURL = LogoURL;
	this.Status = Status;
	this.SearchableString = SearchableString;
	this.CharityRegion = CharityRegion;
	this.CharityDomain = CharityDomain;
	this.CharityID = CharityID;
	this.LogoURLSelling = LogoURLSelling;
	this.DisplayLogoSelling = DisplayLogoSelling;
	this.DisplayNameInCheckout = DisplayNameInCheckout;
	this.Description = Description;
	this.ShowMultipleDonationAmountInCheckout = ShowMultipleDonationAmountInCheckout;
	this.ExternalID = ExternalID;
	this.PopularityIndex = PopularityIndex;
	this.EIN = EIN;
	this.NonProfitSecondName = NonProfitSecondName;
	this.NonProfitAddress = NonProfitAddress;
	this.NonProfitSocialAddress = NonProfitSocialAddress;
}
CharityInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		ListingNPEmailNotifPref: (this.ListingNPEmailNotifPref === undefined)? null : this.ListingNPEmailNotifPref,
		ListingNPEmail: (this.ListingNPEmail === undefined)? null : this.ListingNPEmail,
		ListingNPContactName: (this.ListingNPContactName === undefined)? null : this.ListingNPContactName,
		Mission: (this.Mission === undefined)? null : this.Mission,
		LogoURL: (this.LogoURL === undefined)? null : this.LogoURL,
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		SearchableString: (this.SearchableString === undefined)? null : this.SearchableString,
		CharityRegion: (this.CharityRegion === undefined)? null : this.CharityRegion,
		CharityDomain: (this.CharityDomain === undefined)? null : this.CharityDomain,
		CharityID: (this.CharityID === undefined)? null : this.CharityID,
		LogoURLSelling: (this.LogoURLSelling === undefined)? null : this.LogoURLSelling,
		DisplayLogoSelling: (this.DisplayLogoSelling === undefined)? null : this.DisplayLogoSelling,
		DisplayNameInCheckout: (this.DisplayNameInCheckout === undefined)? null : this.DisplayNameInCheckout,
		Description: (this.Description === undefined)? null : this.Description,
		ShowMultipleDonationAmountInCheckout: (this.ShowMultipleDonationAmountInCheckout === undefined)? null : this.ShowMultipleDonationAmountInCheckout,
		ExternalID: (this.ExternalID === undefined)? null : this.ExternalID,
		PopularityIndex: (this.PopularityIndex === undefined)? null : this.PopularityIndex,
		EIN: (this.EIN === undefined)? null : this.EIN,
		NonProfitSecondName: (this.NonProfitSecondName === undefined)? null : this.NonProfitSecondName,
		NonProfitAddress: (this.NonProfitAddress === undefined)? null : this.NonProfitAddress,
		NonProfitSocialAddress: (this.NonProfitSocialAddress === undefined)? null : this.NonProfitSocialAddress
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
module.exports = CharityInfoType;