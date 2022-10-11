export declare class ApiCheckClient {
    apiKey: string;
    baseUrl: string;
    /**
     * @param {string} apiKey
     */
    constructor(apiKey: string);
    /**
     * @param {string} fullName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    lookup(countryCode: string, postalcode: string, number: string, numberAddition: string | null, callback: Function): void;
    searchAddress(countryCode: string, callback: Function, limit?: number, number?: number, numberAddition?: string, street_id?: number, city_id?: number, postalcode_id?: number): void;
    searchCity(countryCode: string, name: string, callback: Function, limit?: number): void;
    searchStreet(countryCode: string, name: string, callback: Function, limit?: number, city_id?: number, postalcode_id?: number): void;
    searchPostalcode(countryCode: string, name: string, callback: Function, limit?: number, city_id?: number): void;
    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    private performRequest;
}
