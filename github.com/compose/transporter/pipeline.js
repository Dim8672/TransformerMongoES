var mongoDBUri = "mongodb://ipServerMongo/Database";
var elasticsearchUri = "http://user:mdp@ipServerElastic:9200/Index"
var source = mongodb({
  "uri": mongoDBUri
  // "timeout": "30s",
  //"tail": true,
  // "ssl": false,
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  // "fsync": false,
  // "bulk": false,
  // "collection_filters": "{}"
});

var sink = elasticsearch({
  "uri": elasticsearchUri
  // "timeout": "20s", // defaults to 30s 
  // "aws_access_key": "ABCDEF", // used for signing requests to AWS Elasticsearch service
  // "aws_access_secret": "ABCDEF" // used for signing requests to AWS Elasticsearch service
});

t.Source("MongoDB", source, "/./").Transform(otto({"filename":"transform.js"})).Save("Elasticsearch", sink, "/./");