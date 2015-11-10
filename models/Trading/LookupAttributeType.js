function LookupAttributeType(Name, Value) {

	/**
	  Documentation
	   
                This type is deprecated because attributes are deprecated.
                
            
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.Value = Value;
}
LookupAttributeType.prototype.toJSON = function(with_null) {
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
module.exports = LookupAttributeType;