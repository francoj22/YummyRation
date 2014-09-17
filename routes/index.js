/*jslint node:true*/

/*
 * GET home page.
 */


// Render the Home page
exports.home = function(req, res) {
	res.render('home');
};


// Render the Contact Us page
exports.contactUs = function(req, res) {
	res.render('contact');
};




/*
// Render the Bikes page
exports.bikes = function(req, res) {
	res.render('bikes', {
		bicycles : specials.getSpecialsBikes()
		// Replace the line above with this one to introduce a defect
		// bicycles : specials.getSpecials()
	});
};

*/

