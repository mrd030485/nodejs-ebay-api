function StoreVacationPreferencesType(OnVacation, ReturnDate, HideFixedPriceStoreItems, MessageItem, MessageStore, DisplayMessageStoreCustomText, MessageStoreCustomText) {

	/**
	  Documentation
	   Specifies a set of Store vacation preferences.
	 */

	/**
	 * Arrays
	 */
	this.OnVacation = OnVacation;
	this.ReturnDate = ReturnDate;
	this.HideFixedPriceStoreItems = HideFixedPriceStoreItems;
	this.MessageItem = MessageItem;
	this.MessageStore = MessageStore;
	this.DisplayMessageStoreCustomText = DisplayMessageStoreCustomText;
	this.MessageStoreCustomText = MessageStoreCustomText;
}
StoreVacationPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		OnVacation: (this.OnVacation === undefined)? null : this.OnVacation,
		ReturnDate: (this.ReturnDate === undefined)? null : this.ReturnDate,
		HideFixedPriceStoreItems: (this.HideFixedPriceStoreItems === undefined)? null : this.HideFixedPriceStoreItems,
		MessageItem: (this.MessageItem === undefined)? null : this.MessageItem,
		MessageStore: (this.MessageStore === undefined)? null : this.MessageStore,
		DisplayMessageStoreCustomText: (this.DisplayMessageStoreCustomText === undefined)? null : this.DisplayMessageStoreCustomText,
		MessageStoreCustomText: (this.MessageStoreCustomText === undefined)? null : this.MessageStoreCustomText
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
module.exports = StoreVacationPreferencesType;