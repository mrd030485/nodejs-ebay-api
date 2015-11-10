var StoreType = require('../../Trading/StoreType');

function SetStoreRequestType(Store) {

	/**
	  Documentation
	   Sets the configuration of the eBay store owned by the caller.
	 */

	/**
	 * Arrays
	 */
	var _Store;
	Object.defineProperty(this, 'Store', {
		 get: function(){
			 return _Store;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreType){ 
					_Store = value; 
				}else{
					console.log('Store expects type StoreType');
				}
			}
		}
	});
	this.Store = Store;
}
SetStoreRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Store: (this.Store === undefined)? null : this.Store.toJSON()
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
module.exports = SetStoreRequestType;