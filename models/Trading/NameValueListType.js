var ItemSpecificSourceCodeType = require('./ItemSpecificSourceCodeType');

function NameValueListType(Name, Value, Source) {

	/**
	  Documentation
	   
                A name and corresponding value (a name/value pair).
            
	 */

	/**
	 * Arrays
	 */
	var _Source;
	Object.defineProperty(this, 'Source', {
		 get: function(){
			 return _Source;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemSpecificSourceCodeType){ 
					_Source = value; 
				}else{
					console.log('Source expects type ItemSpecificSourceCodeType');
				}
			}
		}
	});
	this.Name = Name;
	this.Value = Value;
	this.Source = Source;
}
NameValueListType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		Value: (this.Value === undefined)? null : this.Value,
		Source: (this.Source === undefined)? null : this.Source.toJSON()
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
module.exports = NameValueListType;