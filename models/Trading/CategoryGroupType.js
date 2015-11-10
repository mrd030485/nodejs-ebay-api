function CategoryGroupType(Name, IsDefault) {

	/**
	  Documentation
	   
                Type defining the <b>CategoryGroup</b> container, which defines the category group to which the corresponding Business Policies profile will be applied, and a flag that indicates whether or not that Business Policies profile is the default
                for that category group.
            
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.IsDefault = IsDefault;
}
CategoryGroupType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		IsDefault: (this.IsDefault === undefined)? null : this.IsDefault
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
module.exports = CategoryGroupType;