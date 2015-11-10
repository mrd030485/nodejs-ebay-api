var StoreSubscriptionLevelCodeType = require('./StoreSubscriptionLevelCodeType'),
	StoreLogoType = require('./StoreLogoType'),
	StoreThemeType = require('./StoreThemeType'),
	StoreHeaderStyleCodeType = require('./StoreHeaderStyleCodeType'),
	StoreItemListLayoutCodeType = require('./StoreItemListLayoutCodeType'),
	StoreItemListSortOrderCodeType = require('./StoreItemListSortOrderCodeType'),
	StoreCustomHeaderLayoutCodeType = require('./StoreCustomHeaderLayoutCodeType'),
	StoreCustomCategoryArrayType = require('./StoreCustomCategoryArrayType'),
	StoreCustomListingHeaderType = require('./StoreCustomListingHeaderType'),
	MerchDisplayCodeType = require('./MerchDisplayCodeType');

function StoreType(Name, URLPath, URL, SubscriptionLevel, Description, Logo, Theme, HeaderStyle, HomePage, ItemListLayout, ItemListSortOrder, CustomHeaderLayout, CustomHeader, ExportListings, CustomCategories, CustomListingHeader, MerchDisplay, LastOpenedTime, TitleWithCompatibility) {

	/**
	  Documentation
	   
                The configuration of an eBay Store.
            
	 */

	/**
	 * Arrays
	 */
	var _SubscriptionLevel;
	var _Logo;
	var _Theme;
	var _HeaderStyle;
	var _ItemListLayout;
	var _ItemListSortOrder;
	var _CustomHeaderLayout;
	var _CustomCategories;
	var _CustomListingHeader;
	var _MerchDisplay;
	Object.defineProperty(this, 'SubscriptionLevel', {
		 get: function(){
			 return _SubscriptionLevel;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreSubscriptionLevelCodeType){ 
					_SubscriptionLevel = value; 
				}else{
					console.log('SubscriptionLevel expects type StoreSubscriptionLevelCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'HeaderStyle', {
		 get: function(){
			 return _HeaderStyle;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreHeaderStyleCodeType){ 
					_HeaderStyle = value; 
				}else{
					console.log('HeaderStyle expects type StoreHeaderStyleCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemListLayout', {
		 get: function(){
			 return _ItemListLayout;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreItemListLayoutCodeType){ 
					_ItemListLayout = value; 
				}else{
					console.log('ItemListLayout expects type StoreItemListLayoutCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemListSortOrder', {
		 get: function(){
			 return _ItemListSortOrder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreItemListSortOrderCodeType){ 
					_ItemListSortOrder = value; 
				}else{
					console.log('ItemListSortOrder expects type StoreItemListSortOrderCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CustomHeaderLayout', {
		 get: function(){
			 return _CustomHeaderLayout;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomHeaderLayoutCodeType){ 
					_CustomHeaderLayout = value; 
				}else{
					console.log('CustomHeaderLayout expects type StoreCustomHeaderLayoutCodeType');
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
	Object.defineProperty(this, 'MerchDisplay', {
		 get: function(){
			 return _MerchDisplay;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MerchDisplayCodeType){ 
					_MerchDisplay = value; 
				}else{
					console.log('MerchDisplay expects type MerchDisplayCodeType');
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
		SubscriptionLevel: (this.SubscriptionLevel === undefined)? null : this.SubscriptionLevel.toJSON(),
		Description: (this.Description === undefined)? null : this.Description,
		Logo: (this.Logo === undefined)? null : this.Logo.toJSON(),
		Theme: (this.Theme === undefined)? null : this.Theme.toJSON(),
		HeaderStyle: (this.HeaderStyle === undefined)? null : this.HeaderStyle.toJSON(),
		HomePage: (this.HomePage === undefined)? null : this.HomePage,
		ItemListLayout: (this.ItemListLayout === undefined)? null : this.ItemListLayout.toJSON(),
		ItemListSortOrder: (this.ItemListSortOrder === undefined)? null : this.ItemListSortOrder.toJSON(),
		CustomHeaderLayout: (this.CustomHeaderLayout === undefined)? null : this.CustomHeaderLayout.toJSON(),
		CustomHeader: (this.CustomHeader === undefined)? null : this.CustomHeader,
		ExportListings: (this.ExportListings === undefined)? null : this.ExportListings,
		CustomCategories: (this.CustomCategories === undefined)? null : this.CustomCategories.toJSON(),
		CustomListingHeader: (this.CustomListingHeader === undefined)? null : this.CustomListingHeader.toJSON(),
		MerchDisplay: (this.MerchDisplay === undefined)? null : this.MerchDisplay.toJSON(),
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