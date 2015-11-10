function GetProductFinderXSLRequestType(FileName, FileVersion) {

	/**
	  Documentation
	   Retrieves the Product Finder XSL stylesheet. Apply the stylesheet to the XML returned from a call to GetProductFinder to render a form that lets a user form a multi-attribute query against eBay catalog data. See the Developer's Guide for
                    an overview of Pre- filled Item Information and information on searching for catalog products.
	 */

	/**
	 * Arrays
	 */
	this.FileName = FileName;
	this.FileVersion = FileVersion;
}
GetProductFinderXSLRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetProductFinderXSLRequestType;