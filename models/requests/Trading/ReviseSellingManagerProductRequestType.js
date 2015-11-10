var SellingManagerProductDetailsType = require('../../Trading/SellingManagerProductDetailsType'),
	SellingManagerFolderDetailsType = require('../../Trading/SellingManagerFolderDetailsType'),
	SellingManagerProductSpecificsType = require('../../Trading/SellingManagerProductSpecificsType');

function ReviseSellingManagerProductRequestType(SellingManagerProductDetails, SellingManagerFolderDetails, DeletedField, SellingManagerProductSpecifics) {

	/**
	  Documentation
	   Revises a Selling Manager product. <br><br> This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _SellingManagerProductDetails;
	var _SellingManagerFolderDetails;
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
	Object.defineProperty(this, 'SellingManagerFolderDetails', {
		 get: function(){
			 return _SellingManagerFolderDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerFolderDetailsType){ 
					_SellingManagerFolderDetails = value; 
				}else{
					console.log('SellingManagerFolderDetails expects type SellingManagerFolderDetailsType');
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
	this.SellingManagerFolderDetails = SellingManagerFolderDetails;
	this.DeletedField = DeletedField;
	this.SellingManagerProductSpecifics = SellingManagerProductSpecifics;
}
ReviseSellingManagerProductRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SellingManagerProductDetails: (this.SellingManagerProductDetails === undefined)? null : this.SellingManagerProductDetails.toJSON(),
		SellingManagerFolderDetails: (this.SellingManagerFolderDetails === undefined)? null : this.SellingManagerFolderDetails.toJSON(),
		DeletedField: (this.DeletedField === undefined)? null : this.DeletedField,
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
module.exports = ReviseSellingManagerProductRequestType;