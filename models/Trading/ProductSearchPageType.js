var CharacteristicsSetType = require('./CharacteristicsSetType');

function ProductSearchPageType(SearchCharacteristicsSet, SearchType, SortCharacteristics, DataElementSet) {

	/**
	  Documentation
	   This type is deprecated as <b>GetProduct*</b> calls were deprecated. 
	 */

	/**
	 * Arrays
	 *	SortCharacteristics: CharacteristicType
	 *	DataElementSet: DataElementSetType
	 */
	var _SearchCharacteristicsSet;
	Object.defineProperty(this, 'SearchCharacteristicsSet', {
		 get: function(){
			 return _SearchCharacteristicsSet;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharacteristicsSetType){ 
					_SearchCharacteristicsSet = value; 
				}else{
					console.log('SearchCharacteristicsSet expects type CharacteristicsSetType');
				}
			}
		}
	});
	this.SearchCharacteristicsSet = SearchCharacteristicsSet;
	this.SearchType = SearchType;
	this.SortCharacteristics = SortCharacteristics;
	this.DataElementSet = DataElementSet;
}
ProductSearchPageType.prototype.toJSON = function(with_null) {
	var json = { 
		SearchCharacteristicsSet: (this.SearchCharacteristicsSet === undefined)? null : this.SearchCharacteristicsSet.toJSON(),
		SearchType: (this.SearchType === undefined)? null : this.SearchType,
		SortCharacteristics: (this.SortCharacteristics === undefined)? null : this.SortCharacteristics,
		DataElementSet: (this.DataElementSet === undefined)? null : this.DataElementSet
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
module.exports = ProductSearchPageType;