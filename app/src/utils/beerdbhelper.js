var axios = require('axios');
var breweryKey = require('../apikeys');

//api key for brewerydb
var key = breweryKey.breweryDb;

//http://api.brewerydb.com/v2/search

function searchBeer(beerQuery) {
    //  console.log(beerQuery);
    // http://api.brewerydb.com/v2
    // http://localhost:3000
    if (beerQuery[1] === 'beername') {
        return axios.get('http://api.brewerydb.com/v2/search?q=' + beerQuery[0] + '&type=beer&key=' + key)
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
                        return axios.get('http://api.brewerydb.com/v2/beers?ids=' + response + '&order=' + beerQuery[3] + '&sort=' + beerQuery[2] + '&key=' + key);
                    })
    } else if (beerQuery[1] === 'breweryname') {
        return axios.get('http://api.brewerydb.com/v2/search?q=' + beerQuery[0] + '&type=brewery&key=' + key)
            .then(function(response) {
                //console.log(response.data.data[0].id);
                return axios.get('http://api.brewerydb.com/v2/brewery/' + response.data.data[0].id + '/beers?key=' + key)
            });
    } else if (beerQuery[1] === 'beertype') {
        return axios.get('http://api.brewerydb.com/v2/search/style?q=' + beerQuery[0] + '&key=' + key)
            .then(function(response) {
                // console.log(response.data.data[0]);
                return axios.get('http://api.brewerydb.com/v2/beers?styleId=' + response.data.data[0].id + '&key=' + key)
            });
    }
};

function sortBeer(inboundSort){
                console.log(inboundSort);
                console.log(inboundSort[2]);
           return  inboundSort[2].sort(function(a,b){
                      return a.abv - b.abv;
                })


    };




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
