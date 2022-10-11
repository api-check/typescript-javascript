import { ResultAbstract } from "./abstract";

export class ResultSearchPostalcode extends ResultAbstract {
    constructor(public error: boolean,
        public data: Data,
        public count: number) {
        super();
    }
}

interface ResultLookup {
    error: boolean;
    data: Data;
    count: number;
}

interface Data {
    Country: Country;
    Results: Result[];
}

interface Country {
    name: string;
    code: string;
    nameInt: string;
}

interface Result {
    name: string;
    postalcode_id: number;
    City: City;
}

interface City {
    name: string;
    city_id: number;
}
