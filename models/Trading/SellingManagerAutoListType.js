var SellingManagerAutoListMinActiveItemsType = require('./SellingManagerAutoListMinActiveItemsType'),
	SellingManagerAutoListAccordingToScheduleType = require('./SellingManagerAutoListAccordingToScheduleType');

function SellingManagerAutoListType(SourceSaleTemplateID, KeepMinActive, ListAccordingToSchedule) {

	/**
	  Documentation
	   Provides information about an automated listing rule. Automated listing rules cannot be combined with automated relisting rules. A template can have one set of information per automated listing rule specified.
	 */

	/**
	 * Arrays
	 */
	var _KeepMinActive;
	var _ListAccordingToSchedule;
	Object.defineProperty(this, 'KeepMinActive', {
		 get: function(){
			 return _KeepMinActive;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoListMinActiveItemsType){ 
					_KeepMinActive = value; 
				}else{
					console.log('KeepMinActive expects type SellingManagerAutoListMinActiveItemsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListAccordingToSchedule', {
		 get: function(){
			 return _ListAccordingToSchedule;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoListAccordingToScheduleType){ 
					_ListAccordingToSchedule = value; 
				}else{
					console.log('ListAccordingToSchedule expects type SellingManagerAutoListAccordingToScheduleType');
				}
			}
		}
	});
	this.SourceSaleTemplateID = SourceSaleTemplateID;
	this.KeepMinActive = KeepMinActive;
	this.ListAccordingToSchedule = ListAccordingToSchedule;
}
SellingManagerAutoListType.prototype.toJSON = function(with_null) {
	var json = { 
		SourceSaleTemplateID: (this.SourceSaleTemplateID === undefined)? null : this.SourceSaleTemplateID,
		KeepMinActive: (this.KeepMinActive === undefined)? null : this.KeepMinActive.toJSON(),
		ListAccordingToSchedule: (this.ListAccordingToSchedule === undefined)? null : this.ListAccordingToSchedule.toJSON()
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
module.exports = SellingManagerAutoListType;