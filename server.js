var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
//integrate body-parser to receive post data
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//connecting database
mongoose.connect('mongodb://localhost/quotingdojodb', { useMongoClient: true });

mongoose.connection.on('error', (err)=>{});

mongoose.Promise = global.Promise;


//declare QuotesSchema

var QuotesSchema = new mongoose.Schema({
	name: String,
	quote: String
});
//validations
//QuotesSchema.path('name').required(true, 'You Need a name!');
//QuotesSchema.path('quotes').required(true, 'Give me a quote pls');

var Quote = mongoose.model('Quotes', QuotesSchema);

app.listen(4200, ()=>{
	console.log('listening on port 4200')
});

var route = require('./routes/index.js')(app,Quote);
