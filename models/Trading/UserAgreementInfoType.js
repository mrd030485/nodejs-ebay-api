var SiteCodeType = require('./SiteCodeType'),
	SellereBayPaymentProcessStatusCodeType = require('./SellereBayPaymentProcessStatusCodeType');

function UserAgreementInfoType(Site, SellereBayPaymentProcessStatus, AcceptedTime, SellereBayPaymentProcessEnableTime, UserAgreementURL) {

	/**
	  Documentation
	   
                This type is no longer used.
            
	 */

	/**
	 * Arrays
	 */
	var _Site;
	var _SellereBayPaymentProcessStatus;
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
	Object.defineProperty(this, 'SellereBayPaymentProcessStatus', {
		 get: function(){
			 return _SellereBayPaymentProcessStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellereBayPaymentProcessStatusCodeType){ 
					_SellereBayPaymentProcessStatus = value; 
				}else{
					console.log('SellereBayPaymentProcessStatus expects type SellereBayPaymentProcessStatusCodeType');
				}
			}
		}
	});
	this.Site = Site;
	this.SellereBayPaymentProcessStatus = SellereBayPaymentProcessStatus;
	this.AcceptedTime = AcceptedTime;
	this.SellereBayPaymentProcessEnableTime = SellereBayPaymentProcessEnableTime;
	this.UserAgreementURL = UserAgreementURL;
}
UserAgreementInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site.toJSON(),
		SellereBayPaymentProcessStatus: (this.SellereBayPaymentProcessStatus === undefined)? null : this.SellereBayPaymentProcessStatus.toJSON(),
		AcceptedTime: (this.AcceptedTime === undefined)? null : this.AcceptedTime,
		SellereBayPaymentProcessEnableTime: (this.SellereBayPaymentProcessEnableTime === undefined)? null : this.SellereBayPaymentProcessEnableTime,
		UserAgreementURL: (this.UserAgreementURL === undefined)? null : this.UserAgreementURL
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
module.exports = UserAgreementInfoType;