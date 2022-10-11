import { ResultAbstract } from "./abstract";

export class ResultSearchCity extends ResultAbstract {
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
    name: string;
    city_id: number;
    Postalcodes: Postalcode[];
}

interface Postalcode {
    name: string;
    postalcode_id: number;
}
