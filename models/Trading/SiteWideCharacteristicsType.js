var CharacteristicsSetType = require('./CharacteristicsSetType');

function SiteWideCharacteristicsType(CharacteristicsSet, ExcludeCategoryID) {

	/**
	  Documentation
	   
                A list of one or more characteristics sets mapped to the category, if any. Use this information when working with Item Specifics (Attributes) and Pre-filled Item Information (Catalogs) functionality.
            
	 */

	/**
	 * Arrays
	 */
	var _CharacteristicsSet;
	Object.defineProperty(this, 'CharacteristicsSet', {
		 get: function(){
			 return _CharacteristicsSet;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharacteristicsSetType){ 
					_CharacteristicsSet = value; 
				}else{
					console.log('CharacteristicsSet expects type CharacteristicsSetType');
				}
			}
		}
	});
	this.CharacteristicsSet = CharacteristicsSet;
	this.ExcludeCategoryID = ExcludeCategoryID;
}
SiteWideCharacteristicsType.prototype.toJSON = function(with_null) {
	var json = { 
		CharacteristicsSet: (this.CharacteristicsSet === undefined)? null : this.CharacteristicsSet.toJSON(),
		ExcludeCategoryID: (this.ExcludeCategoryID === undefined)? null : this.ExcludeCategoryID
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
module.exports = SiteWideCharacteristicsType;