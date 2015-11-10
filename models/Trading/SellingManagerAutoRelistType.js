var SellingManagerAutoRelistTypeCodeType = require('./SellingManagerAutoRelistTypeCodeType'),
	SellingManagerAutoRelistOptionCodeType = require('./SellingManagerAutoRelistOptionCodeType'),
	BestOfferDetailsType = require('./BestOfferDetailsType');

function SellingManagerAutoRelistType(Type, RelistCondition, RelistAfterDays, RelistAfterHours, RelistAtSpecificTimeOfDay, BestOfferDetails, ListingHoldInventoryLevel) {

	/**
	  Documentation
	   
                Provides information about an automated relisting rule. Automated relisting rules cannot be combined with automated listing rules. A template can have one set of information per automated relisting rule specified.
            
	 */

	/**
	 * Arrays
	 */
	var _Type;
	var _RelistCondition;
	var _BestOfferDetails;
	Object.defineProperty(this, 'Type', {
		 get: function(){
			 return _Type;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoRelistTypeCodeType){ 
					_Type = value; 
				}else{
					console.log('Type expects type SellingManagerAutoRelistTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RelistCondition', {
		 get: function(){
			 return _RelistCondition;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoRelistOptionCodeType){ 
					_RelistCondition = value; 
				}else{
					console.log('RelistCondition expects type SellingManagerAutoRelistOptionCodeType');
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
	this.Type = Type;
	this.RelistCondition = RelistCondition;
	this.RelistAfterDays = RelistAfterDays;
	this.RelistAfterHours = RelistAfterHours;
	this.RelistAtSpecificTimeOfDay = RelistAtSpecificTimeOfDay;
	this.BestOfferDetails = BestOfferDetails;
	this.ListingHoldInventoryLevel = ListingHoldInventoryLevel;
}
SellingManagerAutoRelistType.prototype.toJSON = function(with_null) {
	var json = { 
		Type: (this.Type === undefined)? null : this.Type.toJSON(),
		RelistCondition: (this.RelistCondition === undefined)? null : this.RelistCondition.toJSON(),
		RelistAfterDays: (this.RelistAfterDays === undefined)? null : this.RelistAfterDays,
		RelistAfterHours: (this.RelistAfterHours === undefined)? null : this.RelistAfterHours,
		RelistAtSpecificTimeOfDay: (this.RelistAtSpecificTimeOfDay === undefined)? null : this.RelistAtSpecificTimeOfDay,
		BestOfferDetails: (this.BestOfferDetails === undefined)? null : this.BestOfferDetails.toJSON(),
		ListingHoldInventoryLevel: (this.ListingHoldInventoryLevel === undefined)? null : this.ListingHoldInventoryLevel
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
module.exports = SellingManagerAutoRelistType;