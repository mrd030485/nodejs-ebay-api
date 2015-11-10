function CharacteristicsSetType(Name, AttributeSetID, AttributeSetVersion, Characteristics) {

	/**
	  Documentation
	   
                No longer applicable to any category.
            
	 */

	/**
	 * Arrays
	 *	Characteristics: CharacteristicType
	 */
	this.Name = Name;
	this.AttributeSetID = AttributeSetID;
	this.AttributeSetVersion = AttributeSetVersion;
	this.Characteristics = Characteristics;
}
CharacteristicsSetType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		AttributeSetID: (this.AttributeSetID === undefined)? null : this.AttributeSetID,
		AttributeSetVersion: (this.AttributeSetVersion === undefined)? null : this.AttributeSetVersion,
		Characteristics: (this.Characteristics === undefined)? null : this.Characteristics
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
module.exports = CharacteristicsSetType;