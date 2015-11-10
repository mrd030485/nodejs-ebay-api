function MyeBayFavoriteSellerListType(TotalAvailable, FavoriteSeller) {

	/**
	  Documentation
	   
                A list of favorite sellers the user has saved on the My eBay page.
            
	 */

	/**
	 * Arrays
	 *	FavoriteSeller: MyeBayFavoriteSellerType
	 */
	this.TotalAvailable = TotalAvailable;
	this.FavoriteSeller = FavoriteSeller;
}
MyeBayFavoriteSellerListType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalAvailable: (this.TotalAvailable === undefined)? null : this.TotalAvailable,
		FavoriteSeller: (this.FavoriteSeller === undefined)? null : this.FavoriteSeller
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
module.exports = MyeBayFavoriteSellerListType;