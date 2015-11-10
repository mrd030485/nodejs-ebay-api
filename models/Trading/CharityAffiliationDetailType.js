var CharityAffiliationTypeCodeType = require('./CharityAffiliationTypeCodeType');

function CharityAffiliationDetailType(CharityID, AffiliationType, LastUsedTime) {

	/**
	  Documentation
	   
                Type defining the <b>CharityAffiliationDetail</b> container that is returned in the <b>GetUser</b> response. The <b>CharityAffiliationDetail</b> container consists of information on a nonprofit charity organization
                associated with the seller's account. A separate <b>CharityAffiliationDetail</b> container is returned for each nonprofit charity organization associated with the seller's account.
            
	 */

	/**
	 * Arrays
	 */
	var _AffiliationType;
	Object.defineProperty(this, 'AffiliationType', {
		 get: function(){
			 return _AffiliationType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharityAffiliationTypeCodeType){ 
					_AffiliationType = value; 
				}else{
					console.log('AffiliationType expects type CharityAffiliationTypeCodeType');
				}
			}
		}
	});
	this.CharityID = CharityID;
	this.AffiliationType = AffiliationType;
	this.LastUsedTime = LastUsedTime;
}
CharityAffiliationDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		CharityID: (this.CharityID === undefined)? null : this.CharityID,
		AffiliationType: (this.AffiliationType === undefined)? null : this.AffiliationType.toJSON(),
		LastUsedTime: (this.LastUsedTime === undefined)? null : this.LastUsedTime
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
module.exports = CharityAffiliationDetailType;