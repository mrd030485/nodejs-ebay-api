function NameValueRelationshipType(ParentName, ParentValue) {

	/**
	  Documentation
	   
                Information about a parent name-value pair. Currently used to indicate relationships between Item Specifics.
            
	 */

	/**
	 * Arrays
	 */
	this.ParentName = ParentName;
	this.ParentValue = ParentValue;
}
NameValueRelationshipType.prototype.toJSON = function(with_null) {
	var json = { 
		ParentName: (this.ParentName === undefined)? null : this.ParentName,
		ParentValue: (this.ParentValue === undefined)? null : this.ParentValue
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
module.exports = NameValueRelationshipType;