import { ResultAbstract } from "./abstract";

export class ResultLookup extends ResultAbstract {
    constructor(
        public error: boolean,
        public data: Data) {
        super();
    }
}

export interface Data {
    street: string;
    number: string;
    numberAddition: null;
    postalcode: string;
    city: string;
    municipality: string;
    Country: Country;
    Coordinates: Coordinates;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Country {
    name: string;
    code: string;
}
