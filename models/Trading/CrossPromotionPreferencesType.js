function CrossPromotionPreferencesType(CrossPromotionEnabled, CrossSellItemFormatSortFilter, CrossSellGallerySortFilter, CrossSellItemSortFilter, UpSellItemFormatSortFilter, UpSellGallerySortFilter, UpSellItemSortFilter) {

	/**
	  Documentation
	   Contains preferences describing how items similar to the one the user is presently viewing are promoted. <br><br> <span class="tablenote"><b>Note:</b> eBay Store Cross Promotions are no longer supported in
                    the Trading API, so the <b>CrossPromotionPreferences</b> container and the <b>ShowCrossPromotionPreferences</b> flag (in <b>GetUserPreferences</b>) should no longer be used/set. </span>
	 */

	/**
	 * Arrays
	 */
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
		CrossSellItemFormatSortFilter: (this.CrossSellItemFormatSortFilter === undefined)? null : this.CrossSellItemFormatSortFilter,
		CrossSellGallerySortFilter: (this.CrossSellGallerySortFilter === undefined)? null : this.CrossSellGallerySortFilter,
		CrossSellItemSortFilter: (this.CrossSellItemSortFilter === undefined)? null : this.CrossSellItemSortFilter,
		UpSellItemFormatSortFilter: (this.UpSellItemFormatSortFilter === undefined)? null : this.UpSellItemFormatSortFilter,
		UpSellGallerySortFilter: (this.UpSellGallerySortFilter === undefined)? null : this.UpSellGallerySortFilter,
		UpSellItemSortFilter: (this.UpSellItemSortFilter === undefined)? null : this.UpSellItemSortFilter
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