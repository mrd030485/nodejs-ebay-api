var ItemArrayType = require('./ItemArrayType'),
	MyeBayFavoriteSearchListType = require('./MyeBayFavoriteSearchListType'),
	MyeBayFavoriteSellerListType = require('./MyeBayFavoriteSellerListType');

function UserDefinedListType(Name, ItemCount, FavoriteSearcheCount, FavoriteSellerCount, ItemArray, FavoriteSearches, FavoriteSellers) {

	/**
	  Documentation
	   
                Contains the items, searches and sellers that the user has saved to this list using the "Add to list" feature. The name of the list is given by the "Name" element.
            
	 */

	/**
	 * Arrays
	 */
	var _ItemArray;
	var _FavoriteSearches;
	var _FavoriteSellers;
	Object.defineProperty(this, 'ItemArray', {
		 get: function(){
			 return _ItemArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemArrayType){ 
					_ItemArray = value; 
				}else{
					console.log('ItemArray expects type ItemArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FavoriteSearches', {
		 get: function(){
			 return _FavoriteSearches;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyeBayFavoriteSearchListType){ 
					_FavoriteSearches = value; 
				}else{
					console.log('FavoriteSearches expects type MyeBayFavoriteSearchListType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FavoriteSellers', {
		 get: function(){
			 return _FavoriteSellers;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MyeBayFavoriteSellerListType){ 
					_FavoriteSellers = value; 
				}else{
					console.log('FavoriteSellers expects type MyeBayFavoriteSellerListType');
				}
			}
		}
	});
	this.Name = Name;
	this.ItemCount = ItemCount;
	this.FavoriteSearcheCount = FavoriteSearcheCount;
	this.FavoriteSellerCount = FavoriteSellerCount;
	this.ItemArray = ItemArray;
	this.FavoriteSearches = FavoriteSearches;
	this.FavoriteSellers = FavoriteSellers;
}
UserDefinedListType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		ItemCount: (this.ItemCount === undefined)? null : this.ItemCount,
		FavoriteSearcheCount: (this.FavoriteSearcheCount === undefined)? null : this.FavoriteSearcheCount,
		FavoriteSellerCount: (this.FavoriteSellerCount === undefined)? null : this.FavoriteSellerCount,
		ItemArray: (this.ItemArray === undefined)? null : this.ItemArray.toJSON(),
		FavoriteSearches: (this.FavoriteSearches === undefined)? null : this.FavoriteSearches.toJSON(),
		FavoriteSellers: (this.FavoriteSellers === undefined)? null : this.FavoriteSellers.toJSON()
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
module.exports = UserDefinedListType;