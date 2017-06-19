var source = mongodb({
  "uri": "mongodb://localhost/cityflow"
  // "timeout": "30s",
  // "tail": false,
  // "ssl": false,
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  // "fsync": false,
  // "bulk": false,
  // "collection_filters": "{}"
})

var sink = elasticsearch({
  "uri": "http://user:mdp@urlCityFlow/"
  // "timeout": "20s", // defaults to 30s 
  // "aws_access_key": "ABCDEF", // used for signing requests to AWS Elasticsearch service
  // "aws_access_secret": "ABCDEF" // used for signing requests to AWS Elasticsearch service
})

t.Source("mongodb",source, "/.*/").Transform(pretty({})).Save("es",sink, "/cityflow*/")
