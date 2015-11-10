function StoreCustomPageType(Name, PageID, URLPath, URL, Status, Content, LeftNav, PreviewEnabled, Order) {
	/**
	 * Arrays
	 */
	this.Name = Name;
	this.PageID = PageID;
	this.URLPath = URLPath;
	this.URL = URL;
	this.Status = Status;
	this.Content = Content;
	this.LeftNav = LeftNav;
	this.PreviewEnabled = PreviewEnabled;
	this.Order = Order;
}
StoreCustomPageType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		PageID: (this.PageID === undefined)? null : this.PageID,
		URLPath: (this.URLPath === undefined)? null : this.URLPath,
		URL: (this.URL === undefined)? null : this.URL,
		Status: (this.Status === undefined)? null : this.Status,
		Content: (this.Content === undefined)? null : this.Content,
		LeftNav: (this.LeftNav === undefined)? null : this.LeftNav,
		PreviewEnabled: (this.PreviewEnabled === undefined)? null : this.PreviewEnabled,
		Order: (this.Order === undefined)? null : this.Order
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
module.exports = StoreCustomPageType;