function MyeBayFavoriteSearchListType(TotalAvailable, FavoriteSearch) {

	/**
	  Documentation
	   
                A list of favorite searches a user has saved on the My eBay page.
            
	 */

	/**
	 * Arrays
	 *	FavoriteSearch: MyeBayFavoriteSearchType
	 */
	this.TotalAvailable = TotalAvailable;
	this.FavoriteSearch = FavoriteSearch;
}
MyeBayFavoriteSearchListType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalAvailable: (this.TotalAvailable === undefined)? null : this.TotalAvailable,
		FavoriteSearch: (this.FavoriteSearch === undefined)? null : this.FavoriteSearch
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
module.exports = MyeBayFavoriteSearchListType;