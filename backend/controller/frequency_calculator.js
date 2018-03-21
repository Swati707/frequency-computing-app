
const rp = require('request-promise');
const cheerio = require('cheerio');
const Hash = require('./hash');

//options to request the website for web scraping and then return a promise in html
const options = {
    uri: `https://www.terriblytinytales.com/test.txt`,
    transform: function (body) {
        //cheerio makes it easy to use the DOM elements using jQuery
      return cheerio.load(body);
    }
};

var text = "";
var words = [];
var regexp = /[ ,\.()\n\t0-9\?\/@\"\:\;\-_]+/;
var frequency = [];
var n_most_frequent_words = [];

//Computes the hashes of each word and calculates their frequency
function computeHash(words){
    var index = 0;
    let freq = {}
    words.forEach(word => {
        hash = Hash(word.toLowerCase());
        if(freq[hash] == undefined) {
            freq[hash] = {
                "word": word.toLowerCase(),
                "frequency": 1
            };
        } else {
            freq[hash]["frequency"] += 1;
        }
        Object.keys(freq).forEach(function(key, index) {
            frequency[index] = freq[key]; 
        });
    });
}

module.exports = {
    //Evaluates and return the top N most frequently words
    getTopNMostFrequentWords: async (req, res, next) => {
        const {number} = req.params;
        rp(options)
        .then(($) => {
            text = $('body').text();
            words = text.split(regexp);
            computeHash(words);
            frequency.sort((a, b) => {
                if(a.frequency < b.frequency){
                    return 1;
                } else if(a.frequency > b.frequency){
                    return -1;
                } else {
                    return (a.word < b.word)?1:-1;
                }
            });
            n_most_frequent_words = [];
            for(let index = 0; index<number && index<frequency.length; index++){
                n_most_frequent_words[index] = frequency[index];
            }
            res.json(n_most_frequent_words);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}