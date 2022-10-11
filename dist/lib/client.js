"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var https = require("https");
var Client = /** @class */ (function () {
    /**
     * @param {string} apiKey
     */
    function Client(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.apicheck.nl';
    }
    /**
     * @param {string} fullName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    Client.prototype.lookup = function (countryCode, postalcode, number, numberAddition, callback) {
        this.performRequest('/lookup/v1/address/', { country: countryCode, postalcode: postalcode, number: number, numberAddition: numberAddition }, function (json) {
            callback(json);
        });
    };
    Client.prototype.searchAddress = function (countryCode, callback, limit, number, numberAddition, street_id, city_id, postalcode_id) {
        // Set required fields
        var data = {
            country: countryCode,
        };
        // Set optional parameters
        if (limit) {
            data.limit = limit;
        }
        if (number) {
            data.number = number;
        }
        if (numberAddition) {
            data.numberAddition = numberAddition;
        }
        if (street_id) {
            data.street_id = street_id;
        }
        if (city_id) {
            data.city_id = city_id;
        }
        if (postalcode_id) {
            data.postalcode_id = city_id;
        }
        this.performRequest('/search/v1/address/', data, function (json) {
            callback(json);
        });
    };
    Client.prototype.searchCity = function (countryCode, name, callback, limit) {
        // Set required fields
        var data = {
            country: countryCode,
            name: name
        };
        // Set optional parameters
        if (limit) {
            data.limit = limit;
        }
        this.performRequest('/search/v1/city/', data, function (json) {
            callback(json);
        });
    };
    Client.prototype.searchStreet = function (countryCode, name, callback, limit, city_id, postalcode_id) {
        // Set required fields
        var data = {
            country: countryCode,
            name: name
        };
        // Set optional parameters
        if (limit) {
            data.limit = limit;
        }
        if (city_id) {
            data.city_id = city_id;
        }
        if (postalcode_id) {
            data.postalcode_id = postalcode_id;
        }
        this.performRequest('/search/v1/postalcode/', data, function (json) {
            callback(json);
        });
    };
    Client.prototype.searchPostalcode = function (countryCode, name, callback, limit, city_id) {
        // Set required fields
        var data = {
            country: countryCode,
            name: name
        };
        // Set optional parameters
        if (limit) {
            data.limit = limit;
        }
        if (city_id) {
            data.city_id = city_id;
        }
        this.performRequest('/search/v1/street/', data, function (json) {
            callback(json);
        });
    };
    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    Client.prototype.performRequest = function (endpoint, data, callback) {
        var formData = '';
        var dataKeys = Object.keys(data);
        for (var i = 0; i < dataKeys.length; i++) {
            formData += '&' + dataKeys[i] + '=' + encodeURI(data[dataKeys[i]]);
        }
        https.get(this.baseUrl + endpoint + formData, function (resp) {
            var data = '';
            resp.on('data', function (chunk) {
                data += chunk;
            });
            resp.on('end', function () {
                var json = JSON.parse(data);
                if (json.errmsg) {
                    throw new Error(json.errno + ': ' + json.errmsg);
                }
                callback(json);
            });
        }).on("error", function (err) {
            throw new Error(err.message);
        });
    };
    return Client;
}());
exports.Client = Client;
