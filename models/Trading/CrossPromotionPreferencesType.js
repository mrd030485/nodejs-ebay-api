var ItemFormatSortFilterCodeType = require('./ItemFormatSortFilterCodeType'),
	GallerySortFilterCodeType = require('./GallerySortFilterCodeType'),
	ItemSortFilterCodeType = require('./ItemSortFilterCodeType');

function CrossPromotionPreferencesType(CrossPromotionEnabled, CrossSellItemFormatSortFilter, CrossSellGallerySortFilter, CrossSellItemSortFilter, UpSellItemFormatSortFilter, UpSellGallerySortFilter, UpSellItemSortFilter) {

	/**
	  Documentation
	   
                Contains preferences describing how items similar to the one the user is presently viewing are promoted. <br><br> <span class="tablenote"><b>Note:</b> eBay Store Cross Promotions are no longer supported in the Trading API,
                so the <b>CrossPromotionPreferences</b> container and the <b>ShowCrossPromotionPreferences</b> flag (in <b>GetUserPreferences</b>) should no longer be used/set. </span>
            
	 */

	/**
	 * Arrays
	 */
	var _CrossSellItemFormatSortFilter;
	var _CrossSellGallerySortFilter;
	var _CrossSellItemSortFilter;
	var _UpSellItemFormatSortFilter;
	var _UpSellGallerySortFilter;
	var _UpSellItemSortFilter;
	Object.defineProperty(this, 'CrossSellItemFormatSortFilter', {
		 get: function(){
			 return _CrossSellItemFormatSortFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemFormatSortFilterCodeType){ 
					_CrossSellItemFormatSortFilter = value; 
				}else{
					console.log('CrossSellItemFormatSortFilter expects type ItemFormatSortFilterCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossSellGallerySortFilter', {
		 get: function(){
			 return _CrossSellGallerySortFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GallerySortFilterCodeType){ 
					_CrossSellGallerySortFilter = value; 
				}else{
					console.log('CrossSellGallerySortFilter expects type GallerySortFilterCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CrossSellItemSortFilter', {
		 get: function(){
			 return _CrossSellItemSortFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemSortFilterCodeType){ 
					_CrossSellItemSortFilter = value; 
				}else{
					console.log('CrossSellItemSortFilter expects type ItemSortFilterCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UpSellItemFormatSortFilter', {
		 get: function(){
			 return _UpSellItemFormatSortFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemFormatSortFilterCodeType){ 
					_UpSellItemFormatSortFilter = value; 
				}else{
					console.log('UpSellItemFormatSortFilter expects type ItemFormatSortFilterCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UpSellGallerySortFilter', {
		 get: function(){
			 return _UpSellGallerySortFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GallerySortFilterCodeType){ 
					_UpSellGallerySortFilter = value; 
				}else{
					console.log('UpSellGallerySortFilter expects type GallerySortFilterCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UpSellItemSortFilter', {
		 get: function(){
			 return _UpSellItemSortFilter;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemSortFilterCodeType){ 
					_UpSellItemSortFilter = value; 
				}else{
					console.log('UpSellItemSortFilter expects type ItemSortFilterCodeType');
				}
			}
		}
	});
	this.CrossPromotionEnabled = CrossPromotionEnabled;
	this.CrossSellItemFormatSortFilter = CrossSellItemFormatSortFilter;
	this.CrossSellGallerySortFilter = CrossSellGallerySortFilter;
	this.CrossSellItemSortFilter = CrossSellItemSortFilter;
	this.UpSellItemFormatSortFilter = UpSellItemFormatSortFilter;
	this.UpSellGallerySortFilter = UpSellGallerySortFilter;
	this.UpSellItemSortFilter = UpSellItemSortFilter;
}
CrossPromotionPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		CrossPromotionEnabled: (this.CrossPromotionEnabled === undefined)? null : this.CrossPromotionEnabled,
		CrossSellItemFormatSortFilter: (this.CrossSellItemFormatSortFilter === undefined)? null : this.CrossSellItemFormatSortFilter.toJSON(),
		CrossSellGallerySortFilter: (this.CrossSellGallerySortFilter === undefined)? null : this.CrossSellGallerySortFilter.toJSON(),
		CrossSellItemSortFilter: (this.CrossSellItemSortFilter === undefined)? null : this.CrossSellItemSortFilter.toJSON(),
		UpSellItemFormatSortFilter: (this.UpSellItemFormatSortFilter === undefined)? null : this.UpSellItemFormatSortFilter.toJSON(),
		UpSellGallerySortFilter: (this.UpSellGallerySortFilter === undefined)? null : this.UpSellGallerySortFilter.toJSON(),
		UpSellItemSortFilter: (this.UpSellItemSortFilter === undefined)? null : this.UpSellItemSortFilter.toJSON()
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
module.exports = CrossPromotionPreferencesType;