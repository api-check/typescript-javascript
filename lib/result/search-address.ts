import { ResultAbstract } from "./abstract";

export class ResultSearchAddress extends ResultAbstract {
    constructor(public error: boolean,
        public data: Data,
        public count: number) {
        super();
    }
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
    street: string;
    number: string;
    numberAddition: null;
    postalcode: string;
    city: string;
    municipality: string;
    region: null;
    formattedAddress: string;
    Location: Location;
}

interface Location {
    Coordinates: Coordinates;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}
