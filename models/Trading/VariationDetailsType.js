function VariationDetailsType(MaxVariationsPerItem, MaxNamesPerVariationSpecificsSet, MaxValuesPerVariationSpecificsSetName, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Type defining the <b>VariationDetails</b> container that is returned in <b>GeteBayDetails</b> if <b>VariationDetails</b> is included in the request as a <b>DetailName</b> filter, or if <b>GeteBayDetails</b>
                    is called with no <b>DetailName</b> filters.
	 */

	/**
	 * Arrays
	 */
	this.MaxVariationsPerItem = MaxVariationsPerItem;
	this.MaxNamesPerVariationSpecificsSet = MaxNamesPerVariationSpecificsSet;
	this.MaxValuesPerVariationSpecificsSetName = MaxValuesPerVariationSpecificsSetName;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
VariationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MaxVariationsPerItem: (this.MaxVariationsPerItem === undefined)? null : this.MaxVariationsPerItem,
		MaxNamesPerVariationSpecificsSet: (this.MaxNamesPerVariationSpecificsSet === undefined)? null : this.MaxNamesPerVariationSpecificsSet,
		MaxValuesPerVariationSpecificsSetName: (this.MaxValuesPerVariationSpecificsSetName === undefined)? null : this.MaxValuesPerVariationSpecificsSetName,
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
module.exports = VariationDetailsType;