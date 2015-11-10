var MaximumBuyerPolicyViolationsDetailsType = require('./MaximumBuyerPolicyViolationsDetailsType'),
	MaximumItemRequirementsDetailsType = require('./MaximumItemRequirementsDetailsType'),
	MaximumUnpaidItemStrikesInfoDetailsType = require('./MaximumUnpaidItemStrikesInfoDetailsType'),
	MinimumFeedbackScoreDetailsType = require('./MinimumFeedbackScoreDetailsType'),
	VerifiedUserRequirementsDetailsType = require('./VerifiedUserRequirementsDetailsType');

function SiteBuyerRequirementDetailsType(LinkedPayPalAccount, MaximumBuyerPolicyViolations, MaximumItemRequirements, MaximumUnpaidItemStrikesInfo, MinimumFeedbackScore, ShipToRegistrationCountry, VerifiedUserRequirements, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Type defining the <b>BuyerRequirementDetails</b> container, which is returned in GeteBayDetails, and provides the seller with the buyer requirement features (and applicable values) that are supported by the listing site. <br/><br/>
                    <span class="tablenote"><b>Note: </b> This container is only returned if <b>BuyerRequirementDetails</b> is included as a <b>DetailName</b> filter in the request, or if no <b>DetailName</b>
                    filters are used in the request. </span> <br/><br/>
	 */

	/**
	 * Arrays
	 */
	var _MaximumBuyerPolicyViolations;
	var _MaximumItemRequirements;
	var _MaximumUnpaidItemStrikesInfo;
	var _MinimumFeedbackScore;
	var _VerifiedUserRequirements;
	Object.defineProperty(this, 'MaximumBuyerPolicyViolations', {
		 get: function(){
			 return _MaximumBuyerPolicyViolations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaximumBuyerPolicyViolationsDetailsType){ 
					_MaximumBuyerPolicyViolations = value; 
				}else{
					console.log('MaximumBuyerPolicyViolations expects type MaximumBuyerPolicyViolationsDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaximumItemRequirements', {
		 get: function(){
			 return _MaximumItemRequirements;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaximumItemRequirementsDetailsType){ 
					_MaximumItemRequirements = value; 
				}else{
					console.log('MaximumItemRequirements expects type MaximumItemRequirementsDetailsType');
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
				if(value instanceof MaximumUnpaidItemStrikesInfoDetailsType){ 
					_MaximumUnpaidItemStrikesInfo = value; 
				}else{
					console.log('MaximumUnpaidItemStrikesInfo expects type MaximumUnpaidItemStrikesInfoDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinimumFeedbackScore', {
		 get: function(){
			 return _MinimumFeedbackScore;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MinimumFeedbackScoreDetailsType){ 
					_MinimumFeedbackScore = value; 
				}else{
					console.log('MinimumFeedbackScore expects type MinimumFeedbackScoreDetailsType');
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
				if(value instanceof VerifiedUserRequirementsDetailsType){ 
					_VerifiedUserRequirements = value; 
				}else{
					console.log('VerifiedUserRequirements expects type VerifiedUserRequirementsDetailsType');
				}
			}
		}
	});
	this.LinkedPayPalAccount = LinkedPayPalAccount;
	this.MaximumBuyerPolicyViolations = MaximumBuyerPolicyViolations;
	this.MaximumItemRequirements = MaximumItemRequirements;
	this.MaximumUnpaidItemStrikesInfo = MaximumUnpaidItemStrikesInfo;
	this.MinimumFeedbackScore = MinimumFeedbackScore;
	this.ShipToRegistrationCountry = ShipToRegistrationCountry;
	this.VerifiedUserRequirements = VerifiedUserRequirements;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
SiteBuyerRequirementDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		LinkedPayPalAccount: (this.LinkedPayPalAccount === undefined)? null : this.LinkedPayPalAccount,
		MaximumBuyerPolicyViolations: (this.MaximumBuyerPolicyViolations === undefined)? null : this.MaximumBuyerPolicyViolations.toJSON(),
		MaximumItemRequirements: (this.MaximumItemRequirements === undefined)? null : this.MaximumItemRequirements.toJSON(),
		MaximumUnpaidItemStrikesInfo: (this.MaximumUnpaidItemStrikesInfo === undefined)? null : this.MaximumUnpaidItemStrikesInfo.toJSON(),
		MinimumFeedbackScore: (this.MinimumFeedbackScore === undefined)? null : this.MinimumFeedbackScore.toJSON(),
		ShipToRegistrationCountry: (this.ShipToRegistrationCountry === undefined)? null : this.ShipToRegistrationCountry,
		VerifiedUserRequirements: (this.VerifiedUserRequirements === undefined)? null : this.VerifiedUserRequirements.toJSON(),
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = SiteBuyerRequirementDetailsType;