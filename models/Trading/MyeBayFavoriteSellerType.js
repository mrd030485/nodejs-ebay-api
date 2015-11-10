function MyeBayFavoriteSellerType(UserID, StoreName) {

	/**
	  Documentation
	   
                Characteristics of the My eBay Favorite Seller.
            
	 */

	/**
	 * Arrays
	 */
	this.UserID = UserID;
	this.StoreName = StoreName;
}
MyeBayFavoriteSellerType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID,
		StoreName: (this.StoreName === undefined)? null : this.StoreName
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
module.exports = MyeBayFavoriteSellerType;