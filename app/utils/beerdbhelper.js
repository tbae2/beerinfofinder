var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;



function searchBeer(beerName){
    console.log(beerName);
    return axios.get('http://api.brewerydb.com/v2/search?q=' + beerName + ' &type=beer&key=' + key);

};



function getBeerInfo(query){



};


var beerhelpers = {

    search: function(beerName){
        return searchBeer(beerName);
    }.catch(function(err){
      console.warn('Error in searchbeer' , err);
    }

};


module.exports = beerhelpers;
