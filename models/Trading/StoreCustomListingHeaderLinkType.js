var StoreCustomListingHeaderLinkCodeType = require('./StoreCustomListingHeaderLinkCodeType');

function StoreCustomListingHeaderLinkType(LinkID, Order, LinkType) {

	/**
	  Documentation
	   
                Custom listing header link.
            
	 */

	/**
	 * Arrays
	 */
	var _LinkType;
	Object.defineProperty(this, 'LinkType', {
		 get: function(){
			 return _LinkType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomListingHeaderLinkCodeType){ 
					_LinkType = value; 
				}else{
					console.log('LinkType expects type StoreCustomListingHeaderLinkCodeType');
				}
			}
		}
	});
	this.LinkID = LinkID;
	this.Order = Order;
	this.LinkType = LinkType;
}
StoreCustomListingHeaderLinkType.prototype.toJSON = function(with_null) {
	var json = { 
		LinkID: (this.LinkID === undefined)? null : this.LinkID,
		Order: (this.Order === undefined)? null : this.Order,
		LinkType: (this.LinkType === undefined)? null : this.LinkType.toJSON()
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
module.exports = StoreCustomListingHeaderLinkType;