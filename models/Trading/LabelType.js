function LabelType(Name) {

	/**
	  Documentation
	   
                This type is deprecated as the <b>GetProduct*</b> calls are no longer available.
                
            
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
}
LabelType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name
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
module.exports = LabelType;