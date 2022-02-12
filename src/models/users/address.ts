import { Coordinates } from "./coordinates";

export interface Address {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: Coordinates
}