var SiteCodeType = require('./SiteCodeType');

function SubscriptionType(EIASToken, SiteID, Active) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 */
	var _SiteID;
	Object.defineProperty(this, 'SiteID', {
		 get: function(){
			 return _SiteID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SiteCodeType){ 
					_SiteID = value; 
				}else{
					console.log('SiteID expects type SiteCodeType');
				}
			}
		}
	});
	this.EIASToken = EIASToken;
	this.SiteID = SiteID;
	this.Active = Active;
}
SubscriptionType.prototype.toJSON = function(with_null) {
	var json = { 
		EIASToken: (this.EIASToken === undefined)? null : this.EIASToken,
		SiteID: (this.SiteID === undefined)? null : this.SiteID.toJSON(),
		Active: (this.Active === undefined)? null : this.Active
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
module.exports = SubscriptionType;