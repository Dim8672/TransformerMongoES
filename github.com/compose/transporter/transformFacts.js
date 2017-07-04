module.exports = function(doc) {
	var location = {};
	// Adding the latitude, longitude for the collector
	if(doc.data.collector_id.$oid === "59520afa30d0340015a4fb6b") {
		location.lat = 47.155172;
		location.lon = 7.002279;
		doc.data.location = location;
	} else if(doc.data.collector_id.$oid === "59520b1130d0340015a52aa3") {
		location.lat = 47.155326;
		location.lon = 7.002590;
		doc.data.location = location;
	}
	delete doc.data.additional_infos; // pas besoin de ces informations dans ElasticSearch
	return doc;
}