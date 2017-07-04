getGeoPoint = function(collectorId){
	var location = {};
	if(collectorId === "59520afa30d0340015a4fb6b"){
		location.lat = 47.155172;
		location.lon = 7.002279;
	} else if(collectorId === "59520b1130d0340015a52aa3") {
		location.lat = 47.155326;
		location.lon = 7.002590;
	}
	return location;
}

module.exports = function(doc) {
	if(doc.ns === "facts"){
		doc.data.location = getGeoPoint(doc.data.collector_id.$oid);
		delete doc.data.additional_infos; // pas besoin de ces informations dans ElasticSearch
		doc.data.insertDate = doc.data.captured_at;
	} else if(doc.ns === "trajects"){
		doc.data.locationA = getGeoPoint(doc.data.capture_a.collector_id.$oid);
		doc.data.locationB = getGeoPoint(doc.data.capture_b.collector_id.$oid);
		delete doc.data.capture_a.additional_infos; // pas besoin de ces informations dans ElasticSearch
		delete doc.data.capture_b.additional_infos; // pas besoin de ces informations dans ElasticSearch
		doc.data.insertDate = doc.data.capture_a.captured_at;
		}
	
	return doc;
}