var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;

//http://api.brewerydb.com/v2/search

const apiUrl = 'http://localhost:3030';

function searchBeer(beerQuery) {
      console.log(beerQuery);
    //  console.log(beerQuery.type);
    // http://api.brewerydb.com/v2
    // http://localhost:3030
    if (beerQuery.type === 'beername') {
        return axios.get(apiUrl + '/search?q=' + beerQuery.term + '&type=beer&key=' + key)
                .then(function(response){
                        //console.log(response);
                        //console.log(beerQuery[2]);
                        var beersToGet = [];
                        while(beersToGet.length < 10){
                            response.data.data.map(function(data){
                              beersToGet.push(data.id)
                            })
                        }
                        return beersToGet;
                    }).then(function(response){
                        return axios.get( apiUrl + '/beers?ids=' + response + '&order=' + beerQuery.sortOrder + '&sort=' + beerQuery.sortBy + '&key=' + key);
                    })
    } else if (beerQuery.type === 'breweryname') {
        return axios.get(apiUrl + '/search?q=' + beerQuery[0] + '&type=brewery&key=' + key)
            .then(function(response) {
                //console.log(response.data.data[0].id);
                return axios.get(apiUrl + '/brewery/' + response.data.data[0].id + '/beers?key=' + key)
            });
    } else if (beerQuery.type === 'beertype') {
        return axios.get(apiUrl + '/search/style?q=' + beerQuery[0] + '&key=' + key)
            .then(function(response) {
                // console.log(response.data.data[0]);
                return axios.get(apiUrl + '/beers?styleId=' + response.data.data[0].id + '&key=' + key)
            });
    }
};

// function sortBeer(inboundSort){
//                 console.log(inboundSort);
//                 console.log(inboundSort[2]);
//            return  inboundSort[2].sort(function(a,b){
//                       return a.abv - b.abv;
//                 })
//
//
//     };




var beerhelpers = {

    search: function(beerQuery) {
        //console.log(beerQuery);
        return searchBeer(beerQuery)
            .then(function(res) {

                return res.data.data;
            });
    }
};


module.exports = beerhelpers;
