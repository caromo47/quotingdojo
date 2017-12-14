module.exports = function Route(app, Quote) {
	app.get('/', function(req, res){
	  res.render('index');
	});

	app.get('/quotes', function(req, res){
	  // Logic to grab all quotes and pass into the rendered view
	  Quote.find({}, function(err, results){
	    if(err) { console.log(err); }
	    res.render('main', { quotes: results });
	  });
	});

	app.post('/quotes', function(req, res){
	  Quote.create(req.body, function(err){
	    if(err) { console.log(err); }
	    res.redirect('/quotes');
	  });
	});

}


// //errors
// var errors = [];
// app.get('/', (req, res) => {
// 	res.render('index', {
// 		errors: errors
// 	});
// });
// app.get('/quotes', (req, res) => {
// 			//grab all the quotes from database
// 			Quotes.find({}, (err, quotes)=> {
// 				//grab quotes and send to the front end
// 				res.render('main', {
// 					quotes: results
// 				});
// 				});
// 			});
// app.post('/quotes', (req, res) => {
// 	var quotes = new Quotes({
// 		name: req.body.name,
// 		quotes: req.body.quotes
// 	});
// 	console.log(quotes);
//
// 	quotes.save((err) => {
// 		//reset errors
// 		errors = [];
//
// 		if (err) {
// 			console.log('something went wrong')
// 			//push the errors into errors array
// 			for (var x in err.errors) {
// 				errors.push(err.errors[x].message);
// 			}
// 			res.redirect('/');
// 		} else {
// 			res.redirect('/quotes');
// 		}
// 	});
// });
