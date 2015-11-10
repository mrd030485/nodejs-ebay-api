function StorefrontType(StoreCategoryID, StoreCategory2ID, StoreCategoryName, StoreCategory2Name, StoreURL, StoreName) {

	/**
	  Documentation
	   This type defines the <b>Storefront</b> container, which can be used by eBay Stores sellers to list an item under two primary custom categories either by category ID or category name. A custom category is a category that was
                    created by a seller in their eBay store. This container is used by Add/Revise/Relist calls. <br/><br/> The <b>Storefront</b> container is also returned in <b>GetItem</b> and other Trading calls that
                    retrieve Item data. <br/><br/> <span class="tablenote"><b>Note: </b> This type is applicable only for eBay Store sellers. </span> <br/><br/>
	 */

	/**
	 * Arrays
	 */
	this.StoreCategoryID = StoreCategoryID;
	this.StoreCategory2ID = StoreCategory2ID;
	this.StoreCategoryName = StoreCategoryName;
	this.StoreCategory2Name = StoreCategory2Name;
	this.StoreURL = StoreURL;
	this.StoreName = StoreName;
}
StorefrontType.prototype.toJSON = function(with_null) {
	var json = { 
		StoreCategoryID: (this.StoreCategoryID === undefined)? null : this.StoreCategoryID,
		StoreCategory2ID: (this.StoreCategory2ID === undefined)? null : this.StoreCategory2ID,
		StoreCategoryName: (this.StoreCategoryName === undefined)? null : this.StoreCategoryName,
		StoreCategory2Name: (this.StoreCategory2Name === undefined)? null : this.StoreCategory2Name,
		StoreURL: (this.StoreURL === undefined)? null : this.StoreURL,
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
module.exports = StorefrontType;