const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ObjectId } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = 5000;
const dbUser = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const movieTbl = process.env.TBL_MOVIE;
const userBookingTbl = process.env.TBL_USER_BOOKING;

app.get('/', (req, res) => res.send('Backend is working'));

const uri = `mongodb+srv://${dbUser}:${password}@cluster0.ou4zy.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const movieCollection = client.db(dbName).collection(movieTbl);
  const userBookingCollection = client.db(dbName).collection(userBookingTbl);

  app.post('/addMovie', (req, res) => {
        const movie = req.body;
        movieCollection.insertOne(movie)
            .then(result => res.send(result.insertedCount > 0));
    });

    app.get('/getAllMovies', (req, res) => {
        movieCollection.find({})
            .toArray((err, document) => res.send(document));
    });

    app.post('/addBooking', (req, res) => {
        const booking = req.body;
        userBookingCollection.insertOne(booking)
            .then(result => res.send(result.insertedCount > 0));
    });

    app.get('/getBookingByMovieId/:id', (req, res) => {
        const id = req.params.id;
        userBookingCollection.find({ movieId: id})
        .toArray((err, document) => res.send(document));
    });

});

app.listen(port);