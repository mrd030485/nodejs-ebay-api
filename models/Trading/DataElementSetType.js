function DataElementSetType(DataElement, DataElementID) {

	/**
	  Documentation
	   
                This type is deprecated as the <b>GetProduct*</b> calls are no longer available.
                
            
	 */

	/**
	 * Arrays
	 */
	this.DataElement = DataElement;
	this.DataElementID = DataElementID;
}
DataElementSetType.prototype.toJSON = function(with_null) {
	var json = { 
		DataElement: (this.DataElement === undefined)? null : this.DataElement,
		DataElementID: (this.DataElementID === undefined)? null : this.DataElementID
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
module.exports = DataElementSetType;