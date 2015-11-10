function CategoryType(BestOfferEnabled, AutoPayEnabled, B2BVATEnabled, CatalogEnabled, CategoryID, CategoryLevel, CategoryName, CategoryParentID, CategoryParentName, ProductSearchPageAvailable, ProductFinderIDs, CharacteristicsSets, Expired, IntlAutosFixedCat, LeafCategory, Virtual, NumOfItems, SellerGuaranteeEligible, ORPA, ORRA, LSD, Keywords) {

	/**
	  Documentation
	   
                Container for data on one listing category. Many <b>CategoryType</b> fields are only returned in the <b>GetCategories</b> response. Add/Revise/Relist calls only use the <b>CategoryID</b> field to specify which eBay
                category in which to list the item.
            
	 */

	/**
	 * Arrays
	 *	ProductFinderIDs: ExtendedProductFinderIDType
	 *	CharacteristicsSets: CharacteristicsSetType
	 */
	this.BestOfferEnabled = BestOfferEnabled;
	this.AutoPayEnabled = AutoPayEnabled;
	this.B2BVATEnabled = B2BVATEnabled;
	this.CatalogEnabled = CatalogEnabled;
	this.CategoryID = CategoryID;
	this.CategoryLevel = CategoryLevel;
	this.CategoryName = CategoryName;
	this.CategoryParentID = CategoryParentID;
	this.CategoryParentName = CategoryParentName;
	this.ProductSearchPageAvailable = ProductSearchPageAvailable;
	this.ProductFinderIDs = ProductFinderIDs;
	this.CharacteristicsSets = CharacteristicsSets;
	this.Expired = Expired;
	this.IntlAutosFixedCat = IntlAutosFixedCat;
	this.LeafCategory = LeafCategory;
	this.Virtual = Virtual;
	this.NumOfItems = NumOfItems;
	this.SellerGuaranteeEligible = SellerGuaranteeEligible;
	this.ORPA = ORPA;
	this.ORRA = ORRA;
	this.LSD = LSD;
	this.Keywords = Keywords;
}
CategoryType.prototype.toJSON = function(with_null) {
	var json = { 
		BestOfferEnabled: (this.BestOfferEnabled === undefined)? null : this.BestOfferEnabled,
		AutoPayEnabled: (this.AutoPayEnabled === undefined)? null : this.AutoPayEnabled,
		B2BVATEnabled: (this.B2BVATEnabled === undefined)? null : this.B2BVATEnabled,
		CatalogEnabled: (this.CatalogEnabled === undefined)? null : this.CatalogEnabled,
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		CategoryLevel: (this.CategoryLevel === undefined)? null : this.CategoryLevel,
		CategoryName: (this.CategoryName === undefined)? null : this.CategoryName,
		CategoryParentID: (this.CategoryParentID === undefined)? null : this.CategoryParentID,
		CategoryParentName: (this.CategoryParentName === undefined)? null : this.CategoryParentName,
		ProductSearchPageAvailable: (this.ProductSearchPageAvailable === undefined)? null : this.ProductSearchPageAvailable,
		ProductFinderIDs: (this.ProductFinderIDs === undefined)? null : this.ProductFinderIDs,
		CharacteristicsSets: (this.CharacteristicsSets === undefined)? null : this.CharacteristicsSets,
		Expired: (this.Expired === undefined)? null : this.Expired,
		IntlAutosFixedCat: (this.IntlAutosFixedCat === undefined)? null : this.IntlAutosFixedCat,
		LeafCategory: (this.LeafCategory === undefined)? null : this.LeafCategory,
		Virtual: (this.Virtual === undefined)? null : this.Virtual,
		NumOfItems: (this.NumOfItems === undefined)? null : this.NumOfItems,
		SellerGuaranteeEligible: (this.SellerGuaranteeEligible === undefined)? null : this.SellerGuaranteeEligible,
		ORPA: (this.ORPA === undefined)? null : this.ORPA,
		ORRA: (this.ORRA === undefined)? null : this.ORRA,
		LSD: (this.LSD === undefined)? null : this.LSD,
		Keywords: (this.Keywords === undefined)? null : this.Keywords
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
module.exports = CategoryType;