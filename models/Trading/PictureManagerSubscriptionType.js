var AmountType = require('./AmountType');

function PictureManagerSubscriptionType(SubscriptionLevel, Fee, StorageSize) {

	/**
	  Documentation
	   This type is deprecated as Pictures Manager was retired. 
	 */

	/**
	 * Arrays
	 */
	var _Fee;
	Object.defineProperty(this, 'Fee', {
		 get: function(){
			 return _Fee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Fee = value; 
				}else{
					console.log('Fee expects type AmountType');
				}
			}
		}
	});
	this.SubscriptionLevel = SubscriptionLevel;
	this.Fee = Fee;
	this.StorageSize = StorageSize;
}
PictureManagerSubscriptionType.prototype.toJSON = function(with_null) {
	var json = { 
		SubscriptionLevel: (this.SubscriptionLevel === undefined)? null : this.SubscriptionLevel,
		Fee: (this.Fee === undefined)? null : this.Fee.toJSON(),
		StorageSize: (this.StorageSize === undefined)? null : this.StorageSize
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
module.exports = PictureManagerSubscriptionType;