var StoreVacationPreferencesType = require('./StoreVacationPreferencesType');

function StorePreferencesType(VacationPreferences) {

	/**
	  Documentation
	   Store Preferences type.
	 */

	/**
	 * Arrays
	 */
	var _VacationPreferences;
	Object.defineProperty(this, 'VacationPreferences', {
		 get: function(){
			 return _VacationPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreVacationPreferencesType){ 
					_VacationPreferences = value; 
				}else{
					console.log('VacationPreferences expects type StoreVacationPreferencesType');
				}
			}
		}
	});
	this.VacationPreferences = VacationPreferences;
}
StorePreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		VacationPreferences: (this.VacationPreferences === undefined)? null : this.VacationPreferences.toJSON()
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
module.exports = StorePreferencesType;