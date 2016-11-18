var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;

//http://api.brewerydb.com/v2/search

function searchBeer(beerName){
    // console.log(beerName);
    return  axios.get('http://localhost:3000/?q=' + beerName + ' &type=beer&key=' + key)
};



function getBeerInfo(query){



};


var beerhelpers = {

    search: function(beerName){
      return searchBeer(beerName)
          .then(function(res){
                return res.data.data;
            });

    }

};


module.exports = beerhelpers;
