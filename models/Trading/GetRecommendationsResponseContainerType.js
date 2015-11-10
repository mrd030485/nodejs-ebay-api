var ListingAnalyzerRecommendationsType = require('./ListingAnalyzerRecommendationsType'),
	SIFFTASRecommendationsType = require('./SIFFTASRecommendationsType'),
	PricingRecommendationsType = require('./PricingRecommendationsType'),
	AttributeRecommendationsType = require('./AttributeRecommendationsType'),
	ProductRecommendationsType = require('./ProductRecommendationsType'),
	RecommendationsType = require('./RecommendationsType'),
	ProductListingDetailsType = require('./ProductListingDetailsType');

function GetRecommendationsResponseContainerType(ListingAnalyzerRecommendations, SIFFTASRecommendations, PricingRecommendations, AttributeRecommendations, ProductRecommendations, CorrelationID, Recommendations, ProductListingDetails, Title) {

	/**
	  Documentation
	   Returns recommended changes or opportunities for improvement related to listing data that was passed in a GetItemRecommendations request.
	 */

	/**
	 * Arrays
	 */
	var _ListingAnalyzerRecommendations;
	var _SIFFTASRecommendations;
	var _PricingRecommendations;
	var _AttributeRecommendations;
	var _ProductRecommendations;
	var _Recommendations;
	var _ProductListingDetails;
	Object.defineProperty(this, 'ListingAnalyzerRecommendations', {
		 get: function(){
			 return _ListingAnalyzerRecommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingAnalyzerRecommendationsType){ 
					_ListingAnalyzerRecommendations = value; 
				}else{
					console.log('ListingAnalyzerRecommendations expects type ListingAnalyzerRecommendationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SIFFTASRecommendations', {
		 get: function(){
			 return _SIFFTASRecommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SIFFTASRecommendationsType){ 
					_SIFFTASRecommendations = value; 
				}else{
					console.log('SIFFTASRecommendations expects type SIFFTASRecommendationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PricingRecommendations', {
		 get: function(){
			 return _PricingRecommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PricingRecommendationsType){ 
					_PricingRecommendations = value; 
				}else{
					console.log('PricingRecommendations expects type PricingRecommendationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AttributeRecommendations', {
		 get: function(){
			 return _AttributeRecommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AttributeRecommendationsType){ 
					_AttributeRecommendations = value; 
				}else{
					console.log('AttributeRecommendations expects type AttributeRecommendationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProductRecommendations', {
		 get: function(){
			 return _ProductRecommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductRecommendationsType){ 
					_ProductRecommendations = value; 
				}else{
					console.log('ProductRecommendations expects type ProductRecommendationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Recommendations', {
		 get: function(){
			 return _Recommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RecommendationsType){ 
					_Recommendations = value; 
				}else{
					console.log('Recommendations expects type RecommendationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProductListingDetails', {
		 get: function(){
			 return _ProductListingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductListingDetailsType){ 
					_ProductListingDetails = value; 
				}else{
					console.log('ProductListingDetails expects type ProductListingDetailsType');
				}
			}
		}
	});
	this.ListingAnalyzerRecommendations = ListingAnalyzerRecommendations;
	this.SIFFTASRecommendations = SIFFTASRecommendations;
	this.PricingRecommendations = PricingRecommendations;
	this.AttributeRecommendations = AttributeRecommendations;
	this.ProductRecommendations = ProductRecommendations;
	this.CorrelationID = CorrelationID;
	this.Recommendations = Recommendations;
	this.ProductListingDetails = ProductListingDetails;
	this.Title = Title;
}
GetRecommendationsResponseContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingAnalyzerRecommendations: (this.ListingAnalyzerRecommendations === undefined)? null : this.ListingAnalyzerRecommendations.toJSON(),
		SIFFTASRecommendations: (this.SIFFTASRecommendations === undefined)? null : this.SIFFTASRecommendations.toJSON(),
		PricingRecommendations: (this.PricingRecommendations === undefined)? null : this.PricingRecommendations.toJSON(),
		AttributeRecommendations: (this.AttributeRecommendations === undefined)? null : this.AttributeRecommendations.toJSON(),
		ProductRecommendations: (this.ProductRecommendations === undefined)? null : this.ProductRecommendations.toJSON(),
		CorrelationID: (this.CorrelationID === undefined)? null : this.CorrelationID,
		Recommendations: (this.Recommendations === undefined)? null : this.Recommendations.toJSON(),
		ProductListingDetails: (this.ProductListingDetails === undefined)? null : this.ProductListingDetails.toJSON(),
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
module.exports = GetRecommendationsResponseContainerType;