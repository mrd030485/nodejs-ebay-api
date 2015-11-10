var PictureManagerPictureDisplayTypeCodeType = require('./PictureManagerPictureDisplayTypeCodeType');

function PictureManagerPictureDisplayType(DisplayType, URL, Size, Height, Width) {

	/**
	  Documentation
	   
                This type is deprecated as Pictures Manager was retired.
                
            
	 */

	/**
	 * Arrays
	 */
	var _DisplayType;
	Object.defineProperty(this, 'DisplayType', {
		 get: function(){
			 return _DisplayType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PictureManagerPictureDisplayTypeCodeType){ 
					_DisplayType = value; 
				}else{
					console.log('DisplayType expects type PictureManagerPictureDisplayTypeCodeType');
				}
			}
		}
	});
	this.DisplayType = DisplayType;
	this.URL = URL;
	this.Size = Size;
	this.Height = Height;
	this.Width = Width;
}
PictureManagerPictureDisplayType.prototype.toJSON = function(with_null) {
	var json = { 
		DisplayType: (this.DisplayType === undefined)? null : this.DisplayType.toJSON(),
		URL: (this.URL === undefined)? null : this.URL,
		Size: (this.Size === undefined)? null : this.Size,
		Height: (this.Height === undefined)? null : this.Height,
		Width: (this.Width === undefined)? null : this.Width
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
module.exports = PictureManagerPictureDisplayType;