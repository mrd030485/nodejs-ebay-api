var SellingManagerProductDetailsType = require('./SellingManagerProductDetailsType'),
	SellingManagerTemplateDetailsArrayType = require('./SellingManagerTemplateDetailsArrayType'),
	SellingManagerProductInventoryStatusType = require('./SellingManagerProductInventoryStatusType'),
	SellingManagerProductSpecificsType = require('./SellingManagerProductSpecificsType');

function SellingManagerProductType(SellingManagerProductDetails, SellingManagerTemplateDetailsArray, SellingManagerProductInventoryStatus, SellingManagerProductSpecifics) {

	/**
	  Documentation
	   Describes a Selling Manager Product
	 */

	/**
	 * Arrays
	 */
	var _SellingManagerProductDetails;
	var _SellingManagerTemplateDetailsArray;
	var _SellingManagerProductInventoryStatus;
	var _SellingManagerProductSpecifics;
	Object.defineProperty(this, 'SellingManagerProductDetails', {
		 get: function(){
			 return _SellingManagerProductDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductDetailsType){ 
					_SellingManagerProductDetails = value; 
				}else{
					console.log('SellingManagerProductDetails expects type SellingManagerProductDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingManagerTemplateDetailsArray', {
		 get: function(){
			 return _SellingManagerTemplateDetailsArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerTemplateDetailsArrayType){ 
					_SellingManagerTemplateDetailsArray = value; 
				}else{
					console.log('SellingManagerTemplateDetailsArray expects type SellingManagerTemplateDetailsArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingManagerProductInventoryStatus', {
		 get: function(){
			 return _SellingManagerProductInventoryStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductInventoryStatusType){ 
					_SellingManagerProductInventoryStatus = value; 
				}else{
					console.log('SellingManagerProductInventoryStatus expects type SellingManagerProductInventoryStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingManagerProductSpecifics', {
		 get: function(){
			 return _SellingManagerProductSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductSpecificsType){ 
					_SellingManagerProductSpecifics = value; 
				}else{
					console.log('SellingManagerProductSpecifics expects type SellingManagerProductSpecificsType');
				}
			}
		}
	});
	this.SellingManagerProductDetails = SellingManagerProductDetails;
	this.SellingManagerTemplateDetailsArray = SellingManagerTemplateDetailsArray;
	this.SellingManagerProductInventoryStatus = SellingManagerProductInventoryStatus;
	this.SellingManagerProductSpecifics = SellingManagerProductSpecifics;
}
SellingManagerProductType.prototype.toJSON = function(with_null) {
	var json = { 
		SellingManagerProductDetails: (this.SellingManagerProductDetails === undefined)? null : this.SellingManagerProductDetails.toJSON(),
		SellingManagerTemplateDetailsArray: (this.SellingManagerTemplateDetailsArray === undefined)? null : this.SellingManagerTemplateDetailsArray.toJSON(),
		SellingManagerProductInventoryStatus: (this.SellingManagerProductInventoryStatus === undefined)? null : this.SellingManagerProductInventoryStatus.toJSON(),
		SellingManagerProductSpecifics: (this.SellingManagerProductSpecifics === undefined)? null : this.SellingManagerProductSpecifics.toJSON()
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
module.exports = SellingManagerProductType;