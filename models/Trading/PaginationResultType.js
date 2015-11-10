function PaginationResultType(TotalNumberOfPages, TotalNumberOfEntries) {

	/**
	  Documentation
	   
                Shows the pagination of data returned by call requests. Pagination of returned data is not needed nor supported for every Trading API call. See the documentation for individual calls to determine whether pagination is supported, required, or desirable.
            
	 */

	/**
	 * Arrays
	 */
	this.TotalNumberOfPages = TotalNumberOfPages;
	this.TotalNumberOfEntries = TotalNumberOfEntries;
}
PaginationResultType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalNumberOfPages: (this.TotalNumberOfPages === undefined)? null : this.TotalNumberOfPages,
		TotalNumberOfEntries: (this.TotalNumberOfEntries === undefined)? null : this.TotalNumberOfEntries
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
module.exports = PaginationResultType;