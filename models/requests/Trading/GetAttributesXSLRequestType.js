function GetAttributesXSLRequestType(FileName, FileVersion) {

	/**
	  Documentation
	   This type is deprecated as the call is no longer available. 
	 */

	/**
	 * Arrays
	 */
	this.FileName = FileName;
	this.FileVersion = FileVersion;
}
GetAttributesXSLRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		FileName: (this.FileName === undefined)? null : this.FileName,
		FileVersion: (this.FileVersion === undefined)? null : this.FileVersion
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
module.exports = GetAttributesXSLRequestType;