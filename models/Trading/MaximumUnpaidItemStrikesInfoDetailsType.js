var MaximumUnpaidItemStrikesCountDetailsType = require('./MaximumUnpaidItemStrikesCountDetailsType');

function MaximumUnpaidItemStrikesInfoDetailsType(MaximumUnpaidItemStrikesCount, MaximumUnpaidItemStrikesDuration) {

	/**
	  Documentation
	   Details of a buyer's maximum unpaid item strikes in a pre-defined time period. This is applicable only to sellers.
	 */

	/**
	 * Arrays
	 *	MaximumUnpaidItemStrikesDuration: MaximumUnpaidItemStrikesDurationDetailsType
	 */
	var _MaximumUnpaidItemStrikesCount;
	Object.defineProperty(this, 'MaximumUnpaidItemStrikesCount', {
		 get: function(){
			 return _MaximumUnpaidItemStrikesCount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MaximumUnpaidItemStrikesCountDetailsType){ 
					_MaximumUnpaidItemStrikesCount = value; 
				}else{
					console.log('MaximumUnpaidItemStrikesCount expects type MaximumUnpaidItemStrikesCountDetailsType');
				}
			}
		}
	});
	this.MaximumUnpaidItemStrikesCount = MaximumUnpaidItemStrikesCount;
	this.MaximumUnpaidItemStrikesDuration = MaximumUnpaidItemStrikesDuration;
}
MaximumUnpaidItemStrikesInfoDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MaximumUnpaidItemStrikesCount: (this.MaximumUnpaidItemStrikesCount === undefined)? null : this.MaximumUnpaidItemStrikesCount.toJSON(),
		MaximumUnpaidItemStrikesDuration: (this.MaximumUnpaidItemStrikesDuration === undefined)? null : this.MaximumUnpaidItemStrikesDuration
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
module.exports = MaximumUnpaidItemStrikesInfoDetailsType;