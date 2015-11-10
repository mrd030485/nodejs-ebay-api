function ItemSpecificDetailsType(MaxItemSpecificsPerItem, MaxValuesPerName, MaxCharactersPerValue, MaxCharactersPerName, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details about custom Item Specifics validation rules.
	 */

	/**
	 * Arrays
	 */
	this.MaxItemSpecificsPerItem = MaxItemSpecificsPerItem;
	this.MaxValuesPerName = MaxValuesPerName;
	this.MaxCharactersPerValue = MaxCharactersPerValue;
	this.MaxCharactersPerName = MaxCharactersPerName;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ItemSpecificDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MaxItemSpecificsPerItem: (this.MaxItemSpecificsPerItem === undefined)? null : this.MaxItemSpecificsPerItem,
		MaxValuesPerName: (this.MaxValuesPerName === undefined)? null : this.MaxValuesPerName,
		MaxCharactersPerValue: (this.MaxCharactersPerValue === undefined)? null : this.MaxCharactersPerValue,
		MaxCharactersPerName: (this.MaxCharactersPerName === undefined)? null : this.MaxCharactersPerName,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = ItemSpecificDetailsType;