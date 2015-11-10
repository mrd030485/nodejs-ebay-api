var AmountType = require('./AmountType'),
	SellingManagerVendorDetailsType = require('./SellingManagerVendorDetailsType');

function SellingManagerProductDetailsType(ProductName, ProductID, CustomLabel, QuantityAvailable, UnitCost, FolderID, RestockAlert, RestockThreshold, VendorInfo, Note) {

	/**
	  Documentation
	   Returned if the user is a Selling Manager user. Defines product information for Selling Manager users.
	 */

	/**
	 * Arrays
	 */
	var _UnitCost;
	var _VendorInfo;
	Object.defineProperty(this, 'UnitCost', {
		 get: function(){
			 return _UnitCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_UnitCost = value; 
				}else{
					console.log('UnitCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VendorInfo', {
		 get: function(){
			 return _VendorInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerVendorDetailsType){ 
					_VendorInfo = value; 
				}else{
					console.log('VendorInfo expects type SellingManagerVendorDetailsType');
				}
			}
		}
	});
	this.ProductName = ProductName;
	this.ProductID = ProductID;
	this.CustomLabel = CustomLabel;
	this.QuantityAvailable = QuantityAvailable;
	this.UnitCost = UnitCost;
	this.FolderID = FolderID;
	this.RestockAlert = RestockAlert;
	this.RestockThreshold = RestockThreshold;
	this.VendorInfo = VendorInfo;
	this.Note = Note;
}
SellingManagerProductDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductName: (this.ProductName === undefined)? null : this.ProductName,
		ProductID: (this.ProductID === undefined)? null : this.ProductID,
		CustomLabel: (this.CustomLabel === undefined)? null : this.CustomLabel,
		QuantityAvailable: (this.QuantityAvailable === undefined)? null : this.QuantityAvailable,
		UnitCost: (this.UnitCost === undefined)? null : this.UnitCost.toJSON(),
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		RestockAlert: (this.RestockAlert === undefined)? null : this.RestockAlert,
		RestockThreshold: (this.RestockThreshold === undefined)? null : this.RestockThreshold,
		VendorInfo: (this.VendorInfo === undefined)? null : this.VendorInfo.toJSON(),
		Note: (this.Note === undefined)? null : this.Note
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
module.exports = SellingManagerProductDetailsType;