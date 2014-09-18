/*jslint node:true*/

/*
 * GET home page.
 */


// Render the Home page
exports.home = function(req, res) {
	res.render('home');
};

// Render the Contact Us page
exports.seafood = function(req, res) {
	res.render('seafood');
};

// Render the Contact Us page
exports.meat = function(req, res) {
	res.render('steak');
};


// Render the Contact Us page
exports.vege = function(req, res) {
	res.render('salad');
};


// Render the Contact Us page
exports.dessert = function(req, res) {
	res.render('pie');
};


// Render the Contact Us page
exports.contact = function(req, res) {
	res.render('contact');
};

