var SellingManagerFolderDetailsType = require('../../Trading/SellingManagerFolderDetailsType');

function ReviseSellingManagerInventoryFolderRequestType(Folder) {

	/**
	  Documentation
	   Renames a Selling Manager inventory folder. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _Folder;
	Object.defineProperty(this, 'Folder', {
		 get: function(){
			 return _Folder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerFolderDetailsType){ 
					_Folder = value; 
				}else{
					console.log('Folder expects type SellingManagerFolderDetailsType');
				}
			}
		}
	});
	this.Folder = Folder;
}
ReviseSellingManagerInventoryFolderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Folder: (this.Folder === undefined)? null : this.Folder.toJSON()
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
module.exports = ReviseSellingManagerInventoryFolderRequestType;