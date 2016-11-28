var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;

//http://api.brewerydb.com/v2/search

function searchBeer(beerQuery){
     console.log(beerQuery);

    if(beerQuery[1] === 'beername'){
    return  axios.get('http://localhost:3000/search?q=' + beerQuery[0] + '&type=beer&key=' + key)
  } else if(beerQuery[1] === 'breweryname'){
      return  axios.get('http://localhost:3000/search?q=' + beerQuery[0] + '&type=brewery&key=' + key)
            .then(function(response){
                console.log(response.data.data[0].id);
                return axios.get('http://localhost:3000/brewery/' + response.data.data[0].id + '/beers?key=' + key)
            });
  } else if(beerQuery[1] === 'beertype'){
        axios.get('http://localhost:3000/style?q=' + beerQuery[0] + '&key=' + key)
  }
};



function getBeerInfo(query){



};


var beerhelpers = {

    search: function(beerQuery){
      //console.log(beerQuery);
      return searchBeer(beerQuery)
          .then(function(res){
                return res.data.data;
            });

    }

};


module.exports = beerhelpers;
