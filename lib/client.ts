import { ResultLookup } from "./result/lookup";
import { ResultSearchAddress } from "./result/search-address";
import { ResultSearchCity } from "./result/search-city";
import { ResultSearchPostalcode } from "./result/search-postalcode";
import { ResultSearchStreet } from "./result/search-street";
import * as https from 'https';

export class Client {

    public baseUrl = 'https://api.apicheck.nl';

    /**
     * @param {string} apiKey
     */
    constructor(public apiKey: string) {
    }

    /**
     * @param {string} fullName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public lookup(countryCode: string, postalcode: string, number: string, numberAddition: string | null, callback: Function): void {
        this.performRequest('/lookup/v1/address/', { country: countryCode, postalcode: postalcode, number: number, numberAddition: numberAddition }, (json: any) => {
            callback(<ResultLookup>json);
        });
    }


    public searchAddress(countryCode: string, callback: Function, limit?: number, number?: number, numberAddition?: string, street_id?: number, city_id?: number, postalcode_id?: number): void {
        // Set required fields
        const data: any = {
            country: countryCode,
        };

        // Set optional parameters
        if (limit) { data.limit = limit }
        if (number) { data.number = number }
        if (numberAddition) { data.numberAddition = numberAddition }
        if (street_id) { data.street_id = street_id }
        if (city_id) { data.city_id = city_id }
        if (postalcode_id) { data.postalcode_id = city_id }

        this.performRequest('/search/v1/address/', data, (json: any) => {
            callback(<ResultSearchAddress>json);
        });
    }

    public searchCity(countryCode: string, name: string, callback: Function, limit?: number): void {
        // Set required fields
        const data: any = {
            country: countryCode,
            name: name
        };

        // Set optional parameters
        if (limit) { data.limit = limit }

        this.performRequest('/search/v1/city/', data, (json: any) => {
            callback(<ResultSearchCity>json);
        });
    }

    public searchStreet(countryCode: string, name: string, callback: Function, limit?: number, city_id?: number, postalcode_id?: number): void {
        // Set required fields
        const data: any = {
            country: countryCode,
            name: name
        };

        // Set optional parameters
        if (limit) { data.limit = limit }
        if (city_id) { data.city_id = city_id }
        if (postalcode_id) { data.postalcode_id = postalcode_id }

        this.performRequest('/search/v1/postalcode/', data, (json: any) => {
            callback(<ResultSearchStreet>json);
        });
    }

    public searchPostalcode(countryCode: string, name: string, callback: Function, limit?: number, city_id?: number): void {
        // Set required fields
        const data: any = {
            country: countryCode,
            name: name
        };

        // Set optional parameters
        if (limit) { data.limit = limit }
        if (city_id) { data.city_id = city_id }

        this.performRequest('/search/v1/street/', data, (json: any) => {
            callback(<ResultSearchPostalcode>json);
        });
    }

    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    private performRequest(endpoint: string, data: any, callback: Function): void {
        let formData = '';
        const dataKeys = Object.keys(data);
        for (let i = 0; i < dataKeys.length; i++) {
            formData += '&' + dataKeys[i] + '=' + encodeURI(data[dataKeys[i]]);
        }

        https.get(this.baseUrl + endpoint + formData, (resp: any) => {
            let data = '';

            resp.on('data', (chunk: string) => {
                data += chunk;
            });

            resp.on('end', () => {
                let json = JSON.parse(data);

                if (json.errmsg) {
                    throw new Error(json.errno + ': ' + json.errmsg);
                }

                callback(json);
            });

        }).on("error", (err: any) => {
            throw new Error(err.message);
        });
    }
}