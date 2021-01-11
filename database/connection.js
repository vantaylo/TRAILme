const mongoose = require('mongoose')

//Connect to MongoDB
mongoose.connect('mongodb+srv://vantaylo:TrailmeTrailme@trailme.tnl75.mongodb.net/TRAILME?retryWrites=true&w=majority');

mongoose.connection.once('open', function() {
    console.log("Connected to database!")
    }).on('error', function(error) {
        console.log('Connection error:', error)
    })