function NameValueListType(Name, Value, Source) {

	/**
	  Documentation
	   A name and corresponding value (a name/value pair).
	 */

	/**
	 * Arrays
	 */
	this.Name = Name;
	this.Value = Value;
	this.Source = Source;
}
NameValueListType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		Value: (this.Value === undefined)? null : this.Value,
		Source: (this.Source === undefined)? null : this.Source
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
module.exports = NameValueListType;