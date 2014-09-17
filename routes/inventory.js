/*jslint node:true*/

/*
 * Set the current season value. Can be one
 * of the following: winter, spring, summer, fall.
 */
var currentSeason = 'spring';


var getInventory = function() {
	return [ {
		"objectId" : "2B402DCC-3AF6-4771-9418-CD011CCAB8FA",
		"createdAt" : 1393276907417,
		"modifiedAt" : 1393276907417,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Arctic Alltrack Ski Boots",
			"img" : "BootsImages_14.png",
			"name" : "Arctic Alltrack Ski Boots",
			"category" : "Boots",
			"inStock" : "Only 2 left!",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$452.75"
		}
	}, {
		"objectId" : "46159272-EBFE-442A-84D5-524037DF5A91",
		"createdAt" : 1393276905592,
		"modifiedAt" : 1393276905592,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Captain Ski Boots",
			"img" : "BootsImages_26.png",
			"name" : "Captain Ski Boots",
			"category" : "Boots",
			"inStock" : "In Stock",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$269.99"
		}
	}, {
		"objectId" : "57A6E9F1-5164-4123-BF6B-16653A3BBCBD",
		"createdAt" : 1393276905568,
		"modifiedAt" : 1393276905568,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Performance Ski Boots",
			"img" : "BootsImages_11.png",
			"name" : "Performance Ski Boots",
			"category" : "Boots",
			"inStock" : "Out of Stock!",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$549.95"
		}
	}, {
		"objectId" : "6881DC38-81CE-4EAA-B410-BA3A96BD60A8",
		"createdAt" : 1393276905391,
		"modifiedAt" : 1393276905391,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Arctic Alltrack Ski Boots",
			"img" : "BootsImages_14.png",
			"name" : "Arctic Alltrack Ski Boots",
			"category" : "Boots",
			"inStock" : "Arctic Alltrack Ski Boots",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$452.75"
		}
	}, {
		"objectId" : "8C7ED20E-BA16-4B7C-B75E-8A8A077C79AA",
		"createdAt" : 1393276905913,
		"modifiedAt" : 1393276905913,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Dynamite Ski Boots",
			"img" : "BootsImages_29.png",
			"name" : "Dynamite Ski Boots",
			"category" : "Boots",
			"inStock" : "New Colors!",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$499.99"
		}
	}, {
		"objectId" : "936BA94B-78EC-436C-8A02-3CD84F2EEE2F",
		"createdAt" : 1393276905963,
		"modifiedAt" : 1393276905963,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Cross-Country Ski Boots",
			"img" : "BootsImages_03.png",
			"name" : "Cross-Country Ski Boots",
			"category" : "Boots",
			"inStock" : "In Stock",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$649.95"
		}
	}, {
		"objectId" : "998B5754-6C0E-4AD0-8723-BB7E3182FCDF",
		"createdAt" : 1393276905524,
		"modifiedAt" : 1393276905524,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Ski Boot Bindings",
			"img" : "BootsImages_24.png",
			"name" : "Ski Boot Bindings",
			"category" : "Boots",
			"inStock" : "In Stock",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$229.00"
		}
	}, {
		"objectId" : "A2FD30B2-25B6-47FA-A5B1-CB8D8D26C3C0",
		"createdAt" : 1393276905788,
		"modifiedAt" : 1393276905788,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Boot Cut Ski Pants",
			"img" : "BootsImages_21.png",
			"name" : "Boot Cut Ski Pants",
			"category" : "Boots",
			"inStock" : "In Stock",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$34.99"
		}
	}, {
		"objectId" : "C381E36C-6BCC-4B86-8C7D-D09FE8F2C463",
		"createdAt" : 1393276906878,
		"modifiedAt" : 1393276906878,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Dynamite Ski Boots",
			"img" : "BootsImages_08.png",
			"name" : "Dynamite Ski Boots",
			"category" : "Boots",
			"inStock" : "New Colors!",
			"sizes" : [ "23", "24", "25", "26" ],
			"price" : "$499.99"
		}
	}, {
		"objectId" : "CE180E44-0DDA-469F-B0E9-EE64411FD292",
		"createdAt" : 1393276905636,
		"modifiedAt" : 1393276905636,
		"className" : "InventoryItem",
		"version" : "0",
		"attributes" : {
			"description" : "Blizzard Ski Boots",
			"img" : "BootsImages_22.png",
			"name" : "Blizzard Ski Boots",
			"category" : "Boots",
			"inStock" : "In Stock",
			"sizes" : [ "5", "6", "7", "8" ],
			"price" : "$269.83"
		}
	} ];
};

var getSpringInventory = function() {
	// from
	// https://mobile.ng.bluemix.net/data/rest/v1/apps/3724cab7-bb45-4701-9e33-49f0849a99a5/objects?classname=InventoryItem
	return [ {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "1" ],
				"category" : "Camping",
				"price" : "$39.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Camping Canteen",
				"name" : "Camping Canteen",
				"img" : "Camping Canteen.png",
				"inStock" : "In Stock!"
			},
			"objectId" : "137f73b3b9711c879abe9a3371ad1e015608ebf4",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "10", "11", "12", "13" ],
				"category" : "Boots",
				"price" : "$69.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Prong Lace Hiking Boots",
				"name" : "Prong Lace Hiking Boots",
				"img" : "Prong Lace Hiking Boots.png",
				"inStock" : "New Colors!"
			},
			"objectId" : "22da7c22dbf3f117849ddffa7899698d3286a639",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "10", "11", "12", "13" ],
				"category" : "Mountain Biking",
				"price" : "$79.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Mountain Bike Helmet",
				"name" : "Mountain Bike Helmet",
				"img" : "Mountain Bike Helmet.png",
				"inStock" : "New Colors!"
			},
			"objectId" : "3605eabab060d2b7675ee2ac636a75bd5d9147cf",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "1" ],
				"category" : "Knives",
				"price" : "$29.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Outdoor Utility Knife",
				"name" : "Outdoor Utility Knife",
				"img" : "Outdoor Utility Knife.png",
				"inStock" : "New Colors!"
			},
			"objectId" : "4630ca920cbe7c9b177d25e0245add9e55ef0e98",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "10", "11", "12", "13" ],
				"category" : "Boots",
				"price" : "$89.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "ToughGear Hiking Boots",
				"name" : "ToughGear Hiking Boots",
				"img" : "ToughGear Hiking Boots.png",
				"inStock" : "New Colors!"
			},
			"objectId" : "678e62fd4647997e05cff16d29731321f62abe1d",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "10", "11", "12", "13" ],
				"category" : "Boots",
				"price" : "$89.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Performance Hiking Boots",
				"name" : "Performance Hiking Boots",
				"img" : "Performance Hiking Boots.png",
				"inStock" : "New Colors!"
			},
			"objectId" : "8403aa2276f17020aa4a80dbdfd7f48003fe66a1",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "1" ],
				"category" : "Camping",
				"price" : "$119.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Internal Frame Pack",
				"name" : "Internal Frame Pack",
				"img" : "Internal Frame Pack.png",
				"inStock" : "New Colors!"
			},
			"objectId" : "a2bbaa44db48b00a78d4a73d9569772849e3d936",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "10", "11", "12", "13" ],
				"category" : "Boots",
				"price" : "$89.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Khaki Hiking Boots",
				"name" : "Khaki Hiking Boots",
				"img" : "Khaki Hiking Boots.png",
				"inStock" : "In Stock!"
			},
			"objectId" : "c5bffe6349ba205734f47c784912197f29a2861b",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "1" ],
				"category" : "Camping",
				"price" : "$29.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Hunting Spotlight",
				"name" : "Hunting Spotlight",
				"img" : "Hunting Spotlight.png",
				"inStock" : "In Stock!"
			},
			"objectId" : "cff8523a5986dbaf996d3829d3c7e96c94ddb6bb",
			"version" : "0"
		}, {
			"modifiedAt" : 1397678596897,
			"createdAt" : 1397678596897,
			"className" : "InventoryItem",
			"attributes" : {
				"sizes" : [ "1" ],
				"category" : "Backpacks",
				"price" : "$119.99",
				"modifiedAt" : 1397678596897,
				"createdAt" : 1397678596897,
				"description" : "Heavy Duty Pro Pack",
				"name" : "Heavy Duty Pro Pack",
				"img" : "Heavy Duty Pro Pack.png",
				"inStock" : "Only 3 Left!"
			},
			"objectId" : "d02f9866c0918b2aae9831bacdbcf6093bf61065",
			"version" : "0"
		} ];
};

exports.getSeasonInventory = function() {
	var seasonInventory = null;
	switch (currentSeason) {
		case 'winter' :
			seasonInventory = getInventory();
			break;
		case 'spring' :
			seasonInventory = getSpringInventory();
			break;
		default :
			seasonInventory = getInventory();
	}
	return seasonInventory;
};