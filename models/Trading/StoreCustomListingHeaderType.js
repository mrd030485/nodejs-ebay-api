var StoreCustomListingHeaderDisplayCodeType = require('./StoreCustomListingHeaderDisplayCodeType');

function StoreCustomListingHeaderType(DisplayType, Logo, SearchBox, LinkToInclude, AddToFavoriteStores, SignUpForStoreNewsletter) {

	/**
	  Documentation
	   
                Configuration of a Store custom listing header.
            
	 */

	/**
	 * Arrays
	 *	LinkToInclude: StoreCustomListingHeaderLinkType
	 */
	var _DisplayType;
	Object.defineProperty(this, 'DisplayType', {
		 get: function(){
			 return _DisplayType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomListingHeaderDisplayCodeType){ 
					_DisplayType = value; 
				}else{
					console.log('DisplayType expects type StoreCustomListingHeaderDisplayCodeType');
				}
			}
		}
	});
	this.DisplayType = DisplayType;
	this.Logo = Logo;
	this.SearchBox = SearchBox;
	this.LinkToInclude = LinkToInclude;
	this.AddToFavoriteStores = AddToFavoriteStores;
	this.SignUpForStoreNewsletter = SignUpForStoreNewsletter;
}
StoreCustomListingHeaderType.prototype.toJSON = function(with_null) {
	var json = { 
		DisplayType: (this.DisplayType === undefined)? null : this.DisplayType.toJSON(),
		Logo: (this.Logo === undefined)? null : this.Logo,
		SearchBox: (this.SearchBox === undefined)? null : this.SearchBox,
		LinkToInclude: (this.LinkToInclude === undefined)? null : this.LinkToInclude,
		AddToFavoriteStores: (this.AddToFavoriteStores === undefined)? null : this.AddToFavoriteStores,
		SignUpForStoreNewsletter: (this.SignUpForStoreNewsletter === undefined)? null : this.SignUpForStoreNewsletter
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
module.exports = StoreCustomListingHeaderType;