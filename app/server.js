let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();
console.log("Server is initializing...");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, { 'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

// Use environment variable, or default to local MongoDB
let mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017";

// use when starting application as docker container, part of docker-compose
let mongoUrlDockerCompose = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker
let databaseName = "user-account";
let collectionName = "users";

app.get('/get-profile', function (req, res) {
  let response = {};
  MongoClient.connect(mongoUrlDockerCompose, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);
    let myquery = { userid: 1 };

    db.collection(collectionName).findOne(myquery, function (err, result) {
      if (err) {
        console.error("MongoDB find error:", err);
      } else {
        console.log("MongoDB find success:", result);
      }
      response = result;
      client.close();
      res.send(response ? response : {});
    });
  });
});

app.post('/update-profile', function (req, res) {
  let userObj = req.body;
  console.log('Received user update:', userObj);

  MongoClient.connect(mongoUrlDockerCompose, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);
    userObj['userid'] = 1;

    let myquery = { userid: 1 };
    let newvalues = { $set: userObj };

    db.collection(collectionName).updateOne(myquery, newvalues, { upsert: true }, function (err, result) {
      if (err) {
        console.error("MongoDB update error:", err);
      } else {
        console.log("MongoDB update result:", result.result);
      }
      client.close();
    });
  });

  res.send(userObj);
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});