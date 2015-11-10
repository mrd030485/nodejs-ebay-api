var UserIDType = require('./UserIDType');

function BuyingGuideType(Name, URL, CategoryID, ProductFinderID, Title, Text, CreationTime, UserID) {

	/**
	  Documentation
	   
                This type is not used by any Trading API calls.
            
	 */

	/**
	 * Arrays
	 */
	var _UserID;
	Object.defineProperty(this, 'UserID', {
		 get: function(){
			 return _UserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_UserID = value; 
				}else{
					console.log('UserID expects type UserIDType');
				}
			}
		}
	});
	this.Name = Name;
	this.URL = URL;
	this.CategoryID = CategoryID;
	this.ProductFinderID = ProductFinderID;
	this.Title = Title;
	this.Text = Text;
	this.CreationTime = CreationTime;
	this.UserID = UserID;
}
BuyingGuideType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		URL: (this.URL === undefined)? null : this.URL,
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		ProductFinderID: (this.ProductFinderID === undefined)? null : this.ProductFinderID,
		Title: (this.Title === undefined)? null : this.Title,
		Text: (this.Text === undefined)? null : this.Text,
		CreationTime: (this.CreationTime === undefined)? null : this.CreationTime,
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON()
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
module.exports = BuyingGuideType;