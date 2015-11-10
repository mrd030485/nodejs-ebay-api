function ModifyNameArrayType(ModifyName) {

	/**
	  Documentation
	   
                A list of one or more ModifyName containers. Each ModifyName container has Name and NewName elements.
            
	 */

	/**
	 * Arrays
	 *	ModifyName: ModifyNameType
	 */
	this.ModifyName = ModifyName;
}
ModifyNameArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ModifyName: (this.ModifyName === undefined)? null : this.ModifyName
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
module.exports = ModifyNameArrayType;