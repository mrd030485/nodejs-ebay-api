function ListingRecommendationType(Type, Group, FieldName, Code, Value, Message, Metadata) {

	/**
	  Documentation
	   
                Type defining the <b>Recommendation</b> container(s) that are conditionally returned in all Add/Revise/Relist/Verify API calls. Each <b>Recommendation</b> container provides a message to the seller on how a listing can be improved
                or brought up to standard in regards to top-rated seller/listing requirements, mandated or recommended Item Specifics, picture quality requirements, pricing and/or listing format recommendations, recommended keywords and/or Item Specifics
                in a Title, and/or a recommendation to use Fast 'N Free shipping. <br><br> One or more <b>Recommendation</b> containers can be returned for each listing.
            
	 */

	/**
	 * Arrays
	 *	Metadata: MetadataType
	 */
	this.Type = Type;
	this.Group = Group;
	this.FieldName = FieldName;
	this.Code = Code;
	this.Value = Value;
	this.Message = Message;
	this.Metadata = Metadata;
}
ListingRecommendationType.prototype.toJSON = function(with_null) {
	var json = { 
		Type: (this.Type === undefined)? null : this.Type,
		Group: (this.Group === undefined)? null : this.Group,
		FieldName: (this.FieldName === undefined)? null : this.FieldName,
		Code: (this.Code === undefined)? null : this.Code,
		Value: (this.Value === undefined)? null : this.Value,
		Message: (this.Message === undefined)? null : this.Message,
		Metadata: (this.Metadata === undefined)? null : this.Metadata
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
module.exports = ListingRecommendationType;