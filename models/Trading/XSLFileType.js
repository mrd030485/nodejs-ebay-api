function XSLFileType(FileName, FileVersion, FileContent) {

	/**
	  Documentation
	   This type is deprecated because the calls that use it are deprected. 
	 */

	/**
	 * Arrays
	 */
	this.FileName = FileName;
	this.FileVersion = FileVersion;
	this.FileContent = FileContent;
}
XSLFileType.prototype.toJSON = function(with_null) {
	var json = { 
		FileName: (this.FileName === undefined)? null : this.FileName,
		FileVersion: (this.FileVersion === undefined)? null : this.FileVersion,
		FileContent: (this.FileContent === undefined)? null : this.FileContent
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
module.exports = XSLFileType;