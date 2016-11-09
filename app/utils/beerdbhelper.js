var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;



function searchBeer(beerName){

    return axios.get('http://api.brewerydb.com/v2/search?q=' + beerName + ' &type=beer&key=' + key + );

};



function getBeerInfo(query){



};
