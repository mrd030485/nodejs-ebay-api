var ItemIDType = require('./ItemIDType'),
	SiteCodeType = require('./SiteCodeType');

function WantItNowPostType(CategoryID, Description, PostID, Site, StartTime, ResponseCount, Title) {

	/**
	  Documentation
	   
                Contains the data describing a single Want It Now post. Buyers create Want It Now posts to communicate to sellers specific requirements for items they would like to buy.
            
	 */

	/**
	 * Arrays
	 */
	var _PostID;
	var _Site;
	Object.defineProperty(this, 'PostID', {
		 get: function(){
			 return _PostID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_PostID = value; 
				}else{
					console.log('PostID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Site', {
		 get: function(){
			 return _Site;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SiteCodeType){ 
					_Site = value; 
				}else{
					console.log('Site expects type SiteCodeType');
				}
			}
		}
	});
	this.CategoryID = CategoryID;
	this.Description = Description;
	this.PostID = PostID;
	this.Site = Site;
	this.StartTime = StartTime;
	this.ResponseCount = ResponseCount;
	this.Title = Title;
}
WantItNowPostType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		Description: (this.Description === undefined)? null : this.Description,
		PostID: (this.PostID === undefined)? null : this.PostID.toJSON(),
		Site: (this.Site === undefined)? null : this.Site.toJSON(),
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		ResponseCount: (this.ResponseCount === undefined)? null : this.ResponseCount,
		Title: (this.Title === undefined)? null : this.Title
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
module.exports = WantItNowPostType;