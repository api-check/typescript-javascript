import { ResultAbstract } from "./abstract";
export declare class ResultSearchStreet extends ResultAbstract {
    error: boolean;
    data: Data;
    count: number;
    constructor(error: boolean, data: Data, count: number);
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
    street_id: number;
    City: City;
}
interface City {
    name: string;
    city_id: number;
}
export {};
