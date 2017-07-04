# TransformerMongoES

Ce programme se base sur le compose Transporter project : https://github.com/compose/transporter

Ce programme prend les données d'une base de données MongoDB et les met dans ElasticSearch

# Adaptation in CityFlow

L'essentiel se trouve dans le fichier pipeline.js et transform.js.

# Configuration
La configuration intervient dans le fichier pipeline.js. l'édition de 2 variables est essentiels : <br/>

1) mongoDBUri : le serveur MongoDb avec la database qui souhaite être copier (Exemple : mongodb://ipServerMongo/Database)
2) elasticsearchUri = le serveur ElasticSearch avec l'index ou les données doivent être copiées (Exemple : http://user:mdp@ipServerElastic:9200/Index)

le fichier transform.js permet de rajouter ou de supprimer des champs avant l'importation dans ElasticSearch (notamment la latitude / longitude de l'appareil dans ce cas). <br/>

Afin d'exécuter le transporter, il faut ouvrir un invite de commande dans le dossier ou se trouvent le fichier pipeline.js et rentrer la commande <br>

`transporter.exe run`
