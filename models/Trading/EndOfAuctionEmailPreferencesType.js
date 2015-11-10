function EndOfAuctionEmailPreferencesType(TemplateText, LogoURL, LogoType, EmailCustomized, TextCustomized, LogoCustomized, CopyEmail) {

	/**
	  Documentation
	   Contains the seller's preferences for the email sent to the buyer after the creation of the order line item.
	 */

	/**
	 * Arrays
	 */
	this.TemplateText = TemplateText;
	this.LogoURL = LogoURL;
	this.LogoType = LogoType;
	this.EmailCustomized = EmailCustomized;
	this.TextCustomized = TextCustomized;
	this.LogoCustomized = LogoCustomized;
	this.CopyEmail = CopyEmail;
}
EndOfAuctionEmailPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		TemplateText: (this.TemplateText === undefined)? null : this.TemplateText,
		LogoURL: (this.LogoURL === undefined)? null : this.LogoURL,
		LogoType: (this.LogoType === undefined)? null : this.LogoType,
		EmailCustomized: (this.EmailCustomized === undefined)? null : this.EmailCustomized,
		TextCustomized: (this.TextCustomized === undefined)? null : this.TextCustomized,
		LogoCustomized: (this.LogoCustomized === undefined)? null : this.LogoCustomized,
		CopyEmail: (this.CopyEmail === undefined)? null : this.CopyEmail
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
module.exports = EndOfAuctionEmailPreferencesType;