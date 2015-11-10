function ModifyNameType(Name, NewName) {

	/**
	  Documentation
	   Defines the details about one specific trait name.
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.NewName = NewName;
}
ModifyNameType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		NewName: (this.NewName === undefined)? null : this.NewName
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
module.exports = ModifyNameType;