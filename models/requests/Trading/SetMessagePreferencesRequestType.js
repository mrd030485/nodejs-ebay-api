var ASQPreferencesType = require('../../Trading/ASQPreferencesType');

function SetMessagePreferencesRequestType(ASQPreferences) {

	/**
	  Documentation
	   Enables a seller to add custom Ask Seller a Question (ASQ) subjects to their Ask a Question page, or to reset any custom subjects to their default values.
	 */

	/**
	 * Arrays
	 */
	var _ASQPreferences;
	Object.defineProperty(this, 'ASQPreferences', {
		 get: function(){
			 return _ASQPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ASQPreferencesType){ 
					_ASQPreferences = value; 
				}else{
					console.log('ASQPreferences expects type ASQPreferencesType');
				}
			}
		}
	});
	this.ASQPreferences = ASQPreferences;
}
SetMessagePreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ASQPreferences: (this.ASQPreferences === undefined)? null : this.ASQPreferences.toJSON()
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
module.exports = SetMessagePreferencesRequestType;