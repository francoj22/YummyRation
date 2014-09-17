/*jslint node:true*/

exports.getSalesData = function(customer) {
	return [
        {
           "objectid":"3HA02DCC-3AF6-4661-9418-MD1011ABBB7H4",
           "customername":customer,
           "transactionid":97903,
           "trandate":1393276907417,
           "salesmethod":"On-Line",
           "product":{
              "productnumber":74892930,
              "productname":"Artic Alltrack Ski Boots",
              "img":"BootsImages_14.png",
              "productsize":25,
              "price":452.75
           }
        },
        {
           "objectid":"3HA01BHC-3AF6-4661-9528-HG1011ACCB7H5",
           "customername":customer,
           "transactionid":37969,
           "trandate":1393276907417,
           "salesmethod":"On-Line",
           "product":{
              "productnumber":83872890,
              "productname":"Mountain Bike Helmet",
              "img":"Mountain Bike Helmet.png",
              "productsize":"Large",
              "price":79.99
           }
        }
     ];
};