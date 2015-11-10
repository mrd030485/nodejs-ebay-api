var MaximumItemRequirementsType = require('./MaximumItemRequirementsType'),
	VerifiedUserRequirementsType = require('./VerifiedUserRequirementsType'),
	MaximumUnpaidItemStrikesInfoType = require('./MaximumUnpaidItemStrikesInfoType'),
	MaximumBuyerPolicyViolationsType = require('./MaximumBuyerPolicyViolationsType');

function BuyerRequirementDetailsType(ShipToRegistrationCountry, ZeroFeedbackScore, MinimumFeedbackScore, MaximumItemRequirements, LinkedPayPalAccount, VerifiedUserRequirements, MaximumUnpaidItemStrikesInfo, MaximumBuyerPolicyViolations) {

	/**
	  Documentation
	   
                Type defining the <b>BuyerRequirementDetails</b> container, which allows the seller to set buyer requirements at the listing level. For the corresponding listing, all buyer requirement values/settings will overwrite values/settings in Buyer
                Requirements preferences in My eBay.
            
	 */

	/**
	 * Arrays
	 */
	var _MaximumItemRequirements;
	var _VerifiedUserRequirements;
	var _MaximumUnpaidItemStrikesInfo;
	var _MaximumBuyerPolicyViolations;
	Object.defineProperty(this, 'MaximumItemRequirements', {
		 get: function(){
			 return _MaximumItemRequirements;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaximumItemRequirementsType){ 
					_MaximumItemRequirements = value; 
				}else{
					console.log('MaximumItemRequirements expects type MaximumItemRequirementsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VerifiedUserRequirements', {
		 get: function(){
			 return _VerifiedUserRequirements;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VerifiedUserRequirementsType){ 
					_VerifiedUserRequirements = value; 
				}else{
					console.log('VerifiedUserRequirements expects type VerifiedUserRequirementsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaximumUnpaidItemStrikesInfo', {
		 get: function(){
			 return _MaximumUnpaidItemStrikesInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaximumUnpaidItemStrikesInfoType){ 
					_MaximumUnpaidItemStrikesInfo = value; 
				}else{
					console.log('MaximumUnpaidItemStrikesInfo expects type MaximumUnpaidItemStrikesInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaximumBuyerPolicyViolations', {
		 get: function(){
			 return _MaximumBuyerPolicyViolations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaximumBuyerPolicyViolationsType){ 
					_MaximumBuyerPolicyViolations = value; 
				}else{
					console.log('MaximumBuyerPolicyViolations expects type MaximumBuyerPolicyViolationsType');
				}
			}
		}
	});
	this.ShipToRegistrationCountry = ShipToRegistrationCountry;
	this.ZeroFeedbackScore = ZeroFeedbackScore;
	this.MinimumFeedbackScore = MinimumFeedbackScore;
	this.MaximumItemRequirements = MaximumItemRequirements;
	this.LinkedPayPalAccount = LinkedPayPalAccount;
	this.VerifiedUserRequirements = VerifiedUserRequirements;
	this.MaximumUnpaidItemStrikesInfo = MaximumUnpaidItemStrikesInfo;
	this.MaximumBuyerPolicyViolations = MaximumBuyerPolicyViolations;
}
BuyerRequirementDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShipToRegistrationCountry: (this.ShipToRegistrationCountry === undefined)? null : this.ShipToRegistrationCountry,
		ZeroFeedbackScore: (this.ZeroFeedbackScore === undefined)? null : this.ZeroFeedbackScore,
		MinimumFeedbackScore: (this.MinimumFeedbackScore === undefined)? null : this.MinimumFeedbackScore,
		MaximumItemRequirements: (this.MaximumItemRequirements === undefined)? null : this.MaximumItemRequirements.toJSON(),
		LinkedPayPalAccount: (this.LinkedPayPalAccount === undefined)? null : this.LinkedPayPalAccount,
		VerifiedUserRequirements: (this.VerifiedUserRequirements === undefined)? null : this.VerifiedUserRequirements.toJSON(),
		MaximumUnpaidItemStrikesInfo: (this.MaximumUnpaidItemStrikesInfo === undefined)? null : this.MaximumUnpaidItemStrikesInfo.toJSON(),
		MaximumBuyerPolicyViolations: (this.MaximumBuyerPolicyViolations === undefined)? null : this.MaximumBuyerPolicyViolations.toJSON()
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
module.exports = BuyerRequirementDetailsType;