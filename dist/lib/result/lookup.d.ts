import { ResultAbstract } from "./abstract";
export declare class ResultLookup extends ResultAbstract {
    error: boolean;
    data: Data;
    constructor(error: boolean, data: Data);
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
