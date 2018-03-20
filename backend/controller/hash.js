"use strict";

//hash function used in node package string-hash
function hash(str) {
    var hash = 5381,
        i    = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
}
module.exports = hash;