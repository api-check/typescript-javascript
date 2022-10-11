import { ResultAbstract } from "./abstract";
export declare class ResultSearchAddress extends ResultAbstract {
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
export {};
