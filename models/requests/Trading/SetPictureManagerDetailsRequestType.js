var PictureManagerDetailsType = require('../../Trading/PictureManagerDetailsType');

function SetPictureManagerDetailsRequestType(PictureManagerDetails, Action) {

	/**
	  Documentation
	   Creates, updates, or deletes Picture Manager account settings, folders, or pictures.
	 */

	/**
	 * Arrays
	 */
	var _PictureManagerDetails;
	Object.defineProperty(this, 'PictureManagerDetails', {
		 get: function(){
			 return _PictureManagerDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PictureManagerDetailsType){ 
					_PictureManagerDetails = value; 
				}else{
					console.log('PictureManagerDetails expects type PictureManagerDetailsType');
				}
			}
		}
	});
	this.PictureManagerDetails = PictureManagerDetails;
	this.Action = Action;
}
SetPictureManagerDetailsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PictureManagerDetails: (this.PictureManagerDetails === undefined)? null : this.PictureManagerDetails.toJSON(),
		Action: (this.Action === undefined)? null : this.Action
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
module.exports = SetPictureManagerDetailsRequestType;