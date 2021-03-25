import { Document } from 'mongoose'

export default interface IProperty extends Document {
    //id: string;
    ref: string;
    title: string:
    description: string;
    location: Location;
    operation: Operation;
    type: string;
    amenities?: Amenities;
    price: Price;
    images?: ImageData;
    state: State;
    creationInfo?: CreationInfo;
}

export interface Location {
    address: Address;
    geoData?: GeoData;
}

export interface Address {
    country: string;
    state: string;
    city: string;
    zone?: string;
    postalCode?: string;
    block?: string;
    streetName: string;
    streetNumber: string;
    apartmentNumber?: string;
}

export interface GeoData {
    lat: string;
    lng: string;
}

export interface Operation {
    rent: boolean;
    sale: boolean;
    auction: boolean;
    vacational: boolean;
}

export interface Amenities {
    builtArea: number;
    totalArea: number;
    rooms: number;
    baths: number;
    garage: boolean;
    pool: boolean;
}

export interface Price {
    currency: string;
    symbol: string;
    price: number;
}

export interface ImageData {
    thumbnail: string[];
    medium: string[];
    big: string[];
}

export interface State {
    active: boolean;
    deleted: boolean;
}

export interface CreationInfo {
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;

}

/*
export default interface IProperty {

    ref: string;
    location: {
        address: {
            country: string;
            state: string;
            city: string;
            zone?: string;
            postalCode?: string;
            block?: string;
            streetName: string;
            streetNumber: string;
            apartmentNumber?: string;
        };
        geoData?: {
            lat: string;
            lng: string;
        };
    }
    operation: {
        rent: boolean;
        sale: boolean;
        auction: boolean;
        vacational: boolean;

    };
    type: string;
    amenities: {
        builtArea: number;
        totalArea: number;
        rooms: number;
        baths: number;
        garage: boolean;
        pool: boolean;
    };
    price: {
        currency: string;
        symbol: string;
        price: number;
    };
    images?: {
        thumbnail: string[];
        medium: string[];
        big: string[];
    };
}
*/