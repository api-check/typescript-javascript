import {ResultAbstract} from "./abstract";

export class ResultSearchStreet extends ResultAbstract {
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
    name:    string;
    code:    string;
    nameInt: string;
}

interface Result {
    name:      string;
    street_id: number;
    City:      City;
}

interface City {
    name:    string;
    city_id: number;
}
