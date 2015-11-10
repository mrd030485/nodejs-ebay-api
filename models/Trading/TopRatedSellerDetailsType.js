function TopRatedSellerDetailsType(TopRatedProgram) {

	/**
	  Documentation
	   
                Container for top-rated seller program information.
            
	 */

	/**
	 * Arrays
	 *	TopRatedProgram: TopRatedProgramCodeType
	 */
	this.TopRatedProgram = TopRatedProgram;
}
TopRatedSellerDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		TopRatedProgram: (this.TopRatedProgram === undefined)? null : this.TopRatedProgram
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
module.exports = TopRatedSellerDetailsType;