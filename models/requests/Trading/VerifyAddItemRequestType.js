var ItemType = require('../../Trading/ItemType'),
	ExternalProductIDType = require('../../Trading/ExternalProductIDType');

function VerifyAddItemRequestType(Item, IncludeExpressRequirements, ExternalProductID) {

	/**
	  Documentation
	   Enables a seller to specify the definition of a new item and submit the definition to eBay without creating a listing.&nbsp;<b>Also for Half.com</b>. <br><br> Sellers who engage in cross-border trade on sites
                    that require a recoupment agreement, must agree to the recoupment terms before adding or verifying items. This agreement allows eBay to reimburse a buyer during a dispute and then recoup the cost from the seller. The US site is a recoupment
                    site, and the agreement is located <a href="https://scgi.ebay.com/ws/eBayISAPI.dll?CBTRecoupAgreement">here</a>. The list of the sites where a user has agreed to the recoupment terms is returned by the GetUser response.
	 */

	/**
	 * Arrays
	 */
	var _Item;
	var _ExternalProductID;
	Object.defineProperty(this, 'Item', {
		 get: function(){
			 return _Item;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Item = value; 
				}else{
					console.log('Item expects type ItemType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExternalProductID', {
		 get: function(){
			 return _ExternalProductID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExternalProductIDType){ 
					_ExternalProductID = value; 
				}else{
					console.log('ExternalProductID expects type ExternalProductIDType');
				}
			}
		}
	});
	this.Item = Item;
	this.IncludeExpressRequirements = IncludeExpressRequirements;
	this.ExternalProductID = ExternalProductID;
}
VerifyAddItemRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		IncludeExpressRequirements: (this.IncludeExpressRequirements === undefined)? null : this.IncludeExpressRequirements,
		ExternalProductID: (this.ExternalProductID === undefined)? null : this.ExternalProductID.toJSON()
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
module.exports = VerifyAddItemRequestType;