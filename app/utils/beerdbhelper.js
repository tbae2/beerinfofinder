var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;



function searchBeer(beerName){
    console.log(beerName);
    return axios.get('http://localhost:3000/'+ '?q=' + beerName + ' &type=beer&key=' + key);

};



function getBeerInfo(query){



};


var beerhelpers = {

    search: function(beerName){
        return searchBeer(beerName);
    }

};


module.exports = beerhelpers;
