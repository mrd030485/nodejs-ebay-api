var DescriptionTemplateCodeType = require('./DescriptionTemplateCodeType');

function DescriptionTemplateType(GroupID, ID, ImageURL, Name, TemplateXML, Type) {

	/**
	  Documentation
	   
                The information for one Theme or one Layout.
            
	 */

	/**
	 * Arrays
	 */
	var _Type;
	Object.defineProperty(this, 'Type', {
		 get: function(){
			 return _Type;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DescriptionTemplateCodeType){ 
					_Type = value; 
				}else{
					console.log('Type expects type DescriptionTemplateCodeType');
				}
			}
		}
	});
	this.GroupID = GroupID;
	this.ID = ID;
	this.ImageURL = ImageURL;
	this.Name = Name;
	this.TemplateXML = TemplateXML;
	this.Type = Type;
}
DescriptionTemplateType.prototype.toJSON = function(with_null) {
	var json = { 
		GroupID: (this.GroupID === undefined)? null : this.GroupID,
		ID: (this.ID === undefined)? null : this.ID,
		ImageURL: (this.ImageURL === undefined)? null : this.ImageURL,
		Name: (this.Name === undefined)? null : this.Name,
		TemplateXML: (this.TemplateXML === undefined)? null : this.TemplateXML,
		Type: (this.Type === undefined)? null : this.Type.toJSON()
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
module.exports = DescriptionTemplateType;