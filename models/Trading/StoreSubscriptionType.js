var StoreSubscriptionLevelCodeType = require('./StoreSubscriptionLevelCodeType'),
	AmountType = require('./AmountType');

function StoreSubscriptionType(Level, Fee) {

	/**
	  Documentation
	   
                Type used by the Subscription container that is returned in GetStoreOptions to indicate the subscription level and monthly fee associated with the eBay Store.
            
	 */

	/**
	 * Arrays
	 */
	var _Level;
	var _Fee;
	Object.defineProperty(this, 'Level', {
		 get: function(){
			 return _Level;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreSubscriptionLevelCodeType){ 
					_Level = value; 
				}else{
					console.log('Level expects type StoreSubscriptionLevelCodeType');
				}
			}
		}
	});
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
	this.Level = Level;
	this.Fee = Fee;
}
StoreSubscriptionType.prototype.toJSON = function(with_null) {
	var json = { 
		Level: (this.Level === undefined)? null : this.Level.toJSON(),
		Fee: (this.Fee === undefined)? null : this.Fee.toJSON()
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
module.exports = StoreSubscriptionType;