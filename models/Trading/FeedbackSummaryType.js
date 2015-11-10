var FeedbackPeriodArrayType = require('./FeedbackPeriodArrayType'),
	SellerRatingSummaryArrayType = require('./SellerRatingSummaryArrayType'),
	SellerRoleMetricsType = require('./SellerRoleMetricsType'),
	BuyerRoleMetricsType = require('./BuyerRoleMetricsType');

function FeedbackSummaryType(BidRetractionFeedbackPeriodArray, NegativeFeedbackPeriodArray, NeutralFeedbackPeriodArray, PositiveFeedbackPeriodArray, TotalFeedbackPeriodArray, NeutralCommentCountFromSuspendedUsers, UniqueNegativeFeedbackCount, UniquePositiveFeedbackCount, UniqueNeutralFeedbackCount, SellerRatingSummaryArray, SellerRoleMetrics, BuyerRoleMetrics) {

	/**
	  Documentation
	   Specifies all feedback summary information (except Score). Contains FeedbackPeriodArrayType objects that each convey feedback counts for positive, negative, neutral, and total feedback counts - for various time periods each. Also conveys
                    counts of bid retractions for the predefined time periods.
	 */

	/**
	 * Arrays
	 */
	var _BidRetractionFeedbackPeriodArray;
	var _NegativeFeedbackPeriodArray;
	var _NeutralFeedbackPeriodArray;
	var _PositiveFeedbackPeriodArray;
	var _TotalFeedbackPeriodArray;
	var _SellerRatingSummaryArray;
	var _SellerRoleMetrics;
	var _BuyerRoleMetrics;
	Object.defineProperty(this, 'BidRetractionFeedbackPeriodArray', {
		 get: function(){
			 return _BidRetractionFeedbackPeriodArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackPeriodArrayType){ 
					_BidRetractionFeedbackPeriodArray = value; 
				}else{
					console.log('BidRetractionFeedbackPeriodArray expects type FeedbackPeriodArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NegativeFeedbackPeriodArray', {
		 get: function(){
			 return _NegativeFeedbackPeriodArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackPeriodArrayType){ 
					_NegativeFeedbackPeriodArray = value; 
				}else{
					console.log('NegativeFeedbackPeriodArray expects type FeedbackPeriodArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NeutralFeedbackPeriodArray', {
		 get: function(){
			 return _NeutralFeedbackPeriodArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackPeriodArrayType){ 
					_NeutralFeedbackPeriodArray = value; 
				}else{
					console.log('NeutralFeedbackPeriodArray expects type FeedbackPeriodArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PositiveFeedbackPeriodArray', {
		 get: function(){
			 return _PositiveFeedbackPeriodArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackPeriodArrayType){ 
					_PositiveFeedbackPeriodArray = value; 
				}else{
					console.log('PositiveFeedbackPeriodArray expects type FeedbackPeriodArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalFeedbackPeriodArray', {
		 get: function(){
			 return _TotalFeedbackPeriodArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackPeriodArrayType){ 
					_TotalFeedbackPeriodArray = value; 
				}else{
					console.log('TotalFeedbackPeriodArray expects type FeedbackPeriodArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerRatingSummaryArray', {
		 get: function(){
			 return _SellerRatingSummaryArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerRatingSummaryArrayType){ 
					_SellerRatingSummaryArray = value; 
				}else{
					console.log('SellerRatingSummaryArray expects type SellerRatingSummaryArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerRoleMetrics', {
		 get: function(){
			 return _SellerRoleMetrics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerRoleMetricsType){ 
					_SellerRoleMetrics = value; 
				}else{
					console.log('SellerRoleMetrics expects type SellerRoleMetricsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerRoleMetrics', {
		 get: function(){
			 return _BuyerRoleMetrics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerRoleMetricsType){ 
					_BuyerRoleMetrics = value; 
				}else{
					console.log('BuyerRoleMetrics expects type BuyerRoleMetricsType');
				}
			}
		}
	});
	this.BidRetractionFeedbackPeriodArray = BidRetractionFeedbackPeriodArray;
	this.NegativeFeedbackPeriodArray = NegativeFeedbackPeriodArray;
	this.NeutralFeedbackPeriodArray = NeutralFeedbackPeriodArray;
	this.PositiveFeedbackPeriodArray = PositiveFeedbackPeriodArray;
	this.TotalFeedbackPeriodArray = TotalFeedbackPeriodArray;
	this.NeutralCommentCountFromSuspendedUsers = NeutralCommentCountFromSuspendedUsers;
	this.UniqueNegativeFeedbackCount = UniqueNegativeFeedbackCount;
	this.UniquePositiveFeedbackCount = UniquePositiveFeedbackCount;
	this.UniqueNeutralFeedbackCount = UniqueNeutralFeedbackCount;
	this.SellerRatingSummaryArray = SellerRatingSummaryArray;
	this.SellerRoleMetrics = SellerRoleMetrics;
	this.BuyerRoleMetrics = BuyerRoleMetrics;
}
FeedbackSummaryType.prototype.toJSON = function(with_null) {
	var json = { 
		BidRetractionFeedbackPeriodArray: (this.BidRetractionFeedbackPeriodArray === undefined)? null : this.BidRetractionFeedbackPeriodArray.toJSON(),
		NegativeFeedbackPeriodArray: (this.NegativeFeedbackPeriodArray === undefined)? null : this.NegativeFeedbackPeriodArray.toJSON(),
		NeutralFeedbackPeriodArray: (this.NeutralFeedbackPeriodArray === undefined)? null : this.NeutralFeedbackPeriodArray.toJSON(),
		PositiveFeedbackPeriodArray: (this.PositiveFeedbackPeriodArray === undefined)? null : this.PositiveFeedbackPeriodArray.toJSON(),
		TotalFeedbackPeriodArray: (this.TotalFeedbackPeriodArray === undefined)? null : this.TotalFeedbackPeriodArray.toJSON(),
		NeutralCommentCountFromSuspendedUsers: (this.NeutralCommentCountFromSuspendedUsers === undefined)? null : this.NeutralCommentCountFromSuspendedUsers,
		UniqueNegativeFeedbackCount: (this.UniqueNegativeFeedbackCount === undefined)? null : this.UniqueNegativeFeedbackCount,
		UniquePositiveFeedbackCount: (this.UniquePositiveFeedbackCount === undefined)? null : this.UniquePositiveFeedbackCount,
		UniqueNeutralFeedbackCount: (this.UniqueNeutralFeedbackCount === undefined)? null : this.UniqueNeutralFeedbackCount,
		SellerRatingSummaryArray: (this.SellerRatingSummaryArray === undefined)? null : this.SellerRatingSummaryArray.toJSON(),
		SellerRoleMetrics: (this.SellerRoleMetrics === undefined)? null : this.SellerRoleMetrics.toJSON(),
		BuyerRoleMetrics: (this.BuyerRoleMetrics === undefined)? null : this.BuyerRoleMetrics.toJSON()
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
module.exports = FeedbackSummaryType;