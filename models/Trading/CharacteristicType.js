var LabelType = require('./LabelType');

function CharacteristicType(AttributeID, DateFormat, DisplaySequence, DisplayUOM, Label, SortOrder, ValueList) {

	/**
	  Documentation
	   This type is deprecated as the <b>GetProduct*</b> calls are no longer available. 
	 */

	/**
	 * Arrays
	 *	ValueList: ValType
	 */
	var _Label;
	Object.defineProperty(this, 'Label', {
		 get: function(){
			 return _Label;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof LabelType){ 
					_Label = value; 
				}else{
					console.log('Label expects type LabelType');
				}
			}
		}
	});
	this.AttributeID = AttributeID;
	this.DateFormat = DateFormat;
	this.DisplaySequence = DisplaySequence;
	this.DisplayUOM = DisplayUOM;
	this.Label = Label;
	this.SortOrder = SortOrder;
	this.ValueList = ValueList;
}
CharacteristicType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeID: (this.AttributeID === undefined)? null : this.AttributeID,
		DateFormat: (this.DateFormat === undefined)? null : this.DateFormat,
		DisplaySequence: (this.DisplaySequence === undefined)? null : this.DisplaySequence,
		DisplayUOM: (this.DisplayUOM === undefined)? null : this.DisplayUOM,
		Label: (this.Label === undefined)? null : this.Label.toJSON(),
		SortOrder: (this.SortOrder === undefined)? null : this.SortOrder,
		ValueList: (this.ValueList === undefined)? null : this.ValueList
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
module.exports = CharacteristicType;