function MetadataType(Name, Value) {

	/**
	  Documentation
	   This type is used by the <b>Metadata</b> container to provide price guidance information, which includes the minimum and maximum recommended prices for the item, which are based on recent sales of similar items.
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.Value = Value;
}
MetadataType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		Value: (this.Value === undefined)? null : this.Value
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
module.exports = MetadataType;