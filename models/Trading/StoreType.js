var StoreLogoType = require('./StoreLogoType'),
	StoreThemeType = require('./StoreThemeType'),
	StoreCustomCategoryArrayType = require('./StoreCustomCategoryArrayType'),
	StoreCustomListingHeaderType = require('./StoreCustomListingHeaderType');

function StoreType(Name, URLPath, URL, SubscriptionLevel, Description, Logo, Theme, HeaderStyle, HomePage, ItemListLayout, ItemListSortOrder, CustomHeaderLayout, CustomHeader, ExportListings, CustomCategories, CustomListingHeader, MerchDisplay, LastOpenedTime, TitleWithCompatibility) {

	/**
	  Documentation
	   The configuration of an eBay Store.
	 */

	/**
	 * Arrays
	 */
	var _Logo;
	var _Theme;
	var _CustomCategories;
	var _CustomListingHeader;
	Object.defineProperty(this, 'Logo', {
		 get: function(){
			 return _Logo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreLogoType){ 
					_Logo = value; 
				}else{
					console.log('Logo expects type StoreLogoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Theme', {
		 get: function(){
			 return _Theme;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreThemeType){ 
					_Theme = value; 
				}else{
					console.log('Theme expects type StoreThemeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CustomCategories', {
		 get: function(){
			 return _CustomCategories;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomCategoryArrayType){ 
					_CustomCategories = value; 
				}else{
					console.log('CustomCategories expects type StoreCustomCategoryArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CustomListingHeader', {
		 get: function(){
			 return _CustomListingHeader;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomListingHeaderType){ 
					_CustomListingHeader = value; 
				}else{
					console.log('CustomListingHeader expects type StoreCustomListingHeaderType');
				}
			}
		}
	});
	this.Name = Name;
	this.URLPath = URLPath;
	this.URL = URL;
	this.SubscriptionLevel = SubscriptionLevel;
	this.Description = Description;
	this.Logo = Logo;
	this.Theme = Theme;
	this.HeaderStyle = HeaderStyle;
	this.HomePage = HomePage;
	this.ItemListLayout = ItemListLayout;
	this.ItemListSortOrder = ItemListSortOrder;
	this.CustomHeaderLayout = CustomHeaderLayout;
	this.CustomHeader = CustomHeader;
	this.ExportListings = ExportListings;
	this.CustomCategories = CustomCategories;
	this.CustomListingHeader = CustomListingHeader;
	this.MerchDisplay = MerchDisplay;
	this.LastOpenedTime = LastOpenedTime;
	this.TitleWithCompatibility = TitleWithCompatibility;
}
StoreType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		URLPath: (this.URLPath === undefined)? null : this.URLPath,
		URL: (this.URL === undefined)? null : this.URL,
		SubscriptionLevel: (this.SubscriptionLevel === undefined)? null : this.SubscriptionLevel,
		Description: (this.Description === undefined)? null : this.Description,
		Logo: (this.Logo === undefined)? null : this.Logo.toJSON(),
		Theme: (this.Theme === undefined)? null : this.Theme.toJSON(),
		HeaderStyle: (this.HeaderStyle === undefined)? null : this.HeaderStyle,
		HomePage: (this.HomePage === undefined)? null : this.HomePage,
		ItemListLayout: (this.ItemListLayout === undefined)? null : this.ItemListLayout,
		ItemListSortOrder: (this.ItemListSortOrder === undefined)? null : this.ItemListSortOrder,
		CustomHeaderLayout: (this.CustomHeaderLayout === undefined)? null : this.CustomHeaderLayout,
		CustomHeader: (this.CustomHeader === undefined)? null : this.CustomHeader,
		ExportListings: (this.ExportListings === undefined)? null : this.ExportListings,
		CustomCategories: (this.CustomCategories === undefined)? null : this.CustomCategories.toJSON(),
		CustomListingHeader: (this.CustomListingHeader === undefined)? null : this.CustomListingHeader.toJSON(),
		MerchDisplay: (this.MerchDisplay === undefined)? null : this.MerchDisplay,
		LastOpenedTime: (this.LastOpenedTime === undefined)? null : this.LastOpenedTime,
		TitleWithCompatibility: (this.TitleWithCompatibility === undefined)? null : this.TitleWithCompatibility
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
module.exports = StoreType;