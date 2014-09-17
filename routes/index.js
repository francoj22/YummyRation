/*jslint node:true*/

/*
 * GET home page.
 */


var inventory = require('./inventory.js');
var specials = require('./specials.js');
var sales = require('./sales.js');


var specialName = '';

/*
 * Set the current season value. Can be one
 * of the following: winter, spring, summer, fall.
 */
var currentSeason = 'spring';

exports.getSpecial = function(req, res) {
	res.json({"specialName" : specialName});
};

exports.setSpecial = function(req, res) {
	if (req.body.specialName) {
		specialName = req.body.specialName;
	}
	res.redirect('/');
};

var getSeasonalInventory = function() {
	return inventory.getSeasonInventory();
};


var getSeasonalInventoryWithSpecials = function() {
	var inv = inventory.getSeasonInventory();
	var spec = specials.getSpecials();
	return spec.concat(inv);
};

exports.getInventory = function(req, res) {
	res.json(getSeasonalInventory());
};

exports.getSpecials = function(req, res) {
	res.json(specials.getSpecials());
};

// Render the Home page
exports.home = function(req, res) {
	res.render('home');
};

// The Accessories page
exports.products = function(req, res) {
	res.render('products', {
		inventory : getSeasonalInventory(),
		specials : specials.getSpecials()
	});
};

// Render the Bikes page
exports.bikes = function(req, res) {
	res.render('bikes', {
		bicycles : specials.getSpecialsBikes()
		// Replace the line above with this one to introduce a defect
		// bicycles : specials.getSpecials()
	});
};

// Render the Contact Us page
exports.contactUs = function(req, res) {
	res.render('contact');
};

