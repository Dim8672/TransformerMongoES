module.exports = function(doc) {
	var locationA = {};
	var locationB = {};
	// Adding the latitude, longitude for the collector
	if(doc.data.capture_a.collector_id.$oid === "59520afa30d0340015a4fb6b") {
		locationA.lat = 47.155172;
		locationA.lon = 7.002279;
		doc.data.capture_a.location = locationA;
	} else if(doc.data.capture_a.collector_id.$oid === "59520b1130d0340015a52aa3") {
		locationA.lat = 47.155326;
		locationA.lon = 7.002590;
		doc.data.capture_a.location = locationA;
	}
	if(doc.data.capture_b.collector_id.$oid === "59520afa30d0340015a4fb6b") {
		locationB.lat = 47.155172;
		locationB.lon = 7.002279;
		doc.data.capture_b.location = locationB;
	} else if(doc.data.capture_b.collector_id.$oid === "59520b1130d0340015a52aa3") {
		locationB.lat = 47.155326;
		locationB.lon = 7.002590;
		doc.data.capture_b.location = locationB;
	}

	delete doc.data.capture_a.additional_infos; // pas besoin de ces informations dans ElasticSearch
	delete doc.data.capture_b.additional_infos;
	console.log(JSON.stringify(doc, null, 2));
	return doc;
}