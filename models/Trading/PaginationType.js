function PaginationType(EntriesPerPage, PageNumber) {

	/**
	  Documentation
	   
                Contains data for controlling pagination in API requests. Pagination of returned data is required for some calls and not needed in or not supported for some calls. See the documentation for individual calls to determine whether pagination is supported,
                required, or desirable.
            
	 */

	/**
	 * Arrays
	 */
	this.EntriesPerPage = EntriesPerPage;
	this.PageNumber = PageNumber;
}
PaginationType.prototype.toJSON = function(with_null) {
	var json = { 
		EntriesPerPage: (this.EntriesPerPage === undefined)? null : this.EntriesPerPage,
		PageNumber: (this.PageNumber === undefined)? null : this.PageNumber
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
module.exports = PaginationType;