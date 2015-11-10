var BoldTitleCodeType = require('./BoldTitleCodeType'),
	BorderCodeType = require('./BorderCodeType'),
	HighlightCodeType = require('./HighlightCodeType'),
	GiftIconCodeType = require('./GiftIconCodeType'),
	HomePageFeaturedCodeType = require('./HomePageFeaturedCodeType'),
	FeaturedFirstCodeType = require('./FeaturedFirstCodeType'),
	FeaturedPlusCodeType = require('./FeaturedPlusCodeType'),
	ProPackCodeType = require('./ProPackCodeType');

function ListingFeatureDetailsType(BoldTitle, Border, Highlight, GiftIcon, HomePageFeatured, FeaturedFirst, FeaturedPlus, ProPack, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Details about feature availability for the site.
            
	 */

	/**
	 * Arrays
	 */
	var _BoldTitle;
	var _Border;
	var _Highlight;
	var _GiftIcon;
	var _HomePageFeatured;
	var _FeaturedFirst;
	var _FeaturedPlus;
	var _ProPack;
	Object.defineProperty(this, 'BoldTitle', {
		 get: function(){
			 return _BoldTitle;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BoldTitleCodeType){ 
					_BoldTitle = value; 
				}else{
					console.log('BoldTitle expects type BoldTitleCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Border', {
		 get: function(){
			 return _Border;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BorderCodeType){ 
					_Border = value; 
				}else{
					console.log('Border expects type BorderCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Highlight', {
		 get: function(){
			 return _Highlight;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof HighlightCodeType){ 
					_Highlight = value; 
				}else{
					console.log('Highlight expects type HighlightCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'GiftIcon', {
		 get: function(){
			 return _GiftIcon;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GiftIconCodeType){ 
					_GiftIcon = value; 
				}else{
					console.log('GiftIcon expects type GiftIconCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'HomePageFeatured', {
		 get: function(){
			 return _HomePageFeatured;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof HomePageFeaturedCodeType){ 
					_HomePageFeatured = value; 
				}else{
					console.log('HomePageFeatured expects type HomePageFeaturedCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FeaturedFirst', {
		 get: function(){
			 return _FeaturedFirst;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeaturedFirstCodeType){ 
					_FeaturedFirst = value; 
				}else{
					console.log('FeaturedFirst expects type FeaturedFirstCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FeaturedPlus', {
		 get: function(){
			 return _FeaturedPlus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeaturedPlusCodeType){ 
					_FeaturedPlus = value; 
				}else{
					console.log('FeaturedPlus expects type FeaturedPlusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProPack', {
		 get: function(){
			 return _ProPack;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProPackCodeType){ 
					_ProPack = value; 
				}else{
					console.log('ProPack expects type ProPackCodeType');
				}
			}
		}
	});
	this.BoldTitle = BoldTitle;
	this.Border = Border;
	this.Highlight = Highlight;
	this.GiftIcon = GiftIcon;
	this.HomePageFeatured = HomePageFeatured;
	this.FeaturedFirst = FeaturedFirst;
	this.FeaturedPlus = FeaturedPlus;
	this.ProPack = ProPack;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ListingFeatureDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BoldTitle: (this.BoldTitle === undefined)? null : this.BoldTitle.toJSON(),
		Border: (this.Border === undefined)? null : this.Border.toJSON(),
		Highlight: (this.Highlight === undefined)? null : this.Highlight.toJSON(),
		GiftIcon: (this.GiftIcon === undefined)? null : this.GiftIcon.toJSON(),
		HomePageFeatured: (this.HomePageFeatured === undefined)? null : this.HomePageFeatured.toJSON(),
		FeaturedFirst: (this.FeaturedFirst === undefined)? null : this.FeaturedFirst.toJSON(),
		FeaturedPlus: (this.FeaturedPlus === undefined)? null : this.FeaturedPlus.toJSON(),
		ProPack: (this.ProPack === undefined)? null : this.ProPack.toJSON(),
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = ListingFeatureDetailsType;