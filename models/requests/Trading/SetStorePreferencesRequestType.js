var StorePreferencesType = require('../../Trading/StorePreferencesType');

function SetStorePreferencesRequestType(StorePreferences) {

	/**
	  Documentation
	   Sets the preferences for a user's eBay Store.
	 */

	/**
	 * Arrays
	 */
	var _StorePreferences;
	Object.defineProperty(this, 'StorePreferences', {
		 get: function(){
			 return _StorePreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StorePreferencesType){ 
					_StorePreferences = value; 
				}else{
					console.log('StorePreferences expects type StorePreferencesType');
				}
			}
		}
	});
	this.StorePreferences = StorePreferences;
}
SetStorePreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		StorePreferences: (this.StorePreferences === undefined)? null : this.StorePreferences.toJSON()
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
module.exports = SetStorePreferencesRequestType;