import mongoose, {Schema, Document} from 'mongoose'

export interface IProperty extends Document {
    id: string;
    ref: string;
    location: Location;
    operation: Operation;
    type: string;
    amenities?: Amenities;
    price: Price;
    images?: ImageData;
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


// export default interface IProperty {
//    
//     ref: string;
//     location: {
//         address: {
//             country: string;
//             state: string;
//             city: string;
//             zone?: string;
//             postalCode?: string;
//             block?: string;
//             streetName: string;
//             streetNumber: string;
//             apartmentNumber?: string;
//         };
//         geoData?: {
//             lat: string;
//             lng: string;
//         };
//     }
//     operation: {
//         rent: boolean;
//         sale: boolean;
//         auction: boolean;
//         vacational: boolean;
    
//     };
//     type: string;
//     amenities: {
//         builtArea: number;
//         totalArea: number;
//         rooms: number;
//         baths: number;
//         garage: boolean;
//         pool: boolean;
//     };
//     price: {
//         currency: string;
//         symbol: string;
//         price: number;
//     };
//     images?: {
//         thumbnail: string[];
//         medium: string[];
//         big: string[];
//     };
// }
const AddressSchema: Schema = new Schema({
    country: String,
    state: String,
    city: String,
    zone: String,
    postalCode: String,
    block: String,
    streetName: String,
    streetNumber: String,
    apartmentNumber: String,
})

const GeoDataSchema: Schema = new Schema({
    lat: String,
    lng: String
})

const LocationSchema: Schema = new Schema({
    address: AddressSchema,
    geoData: GeoDataSchema
})

const OperationSchema: Schema = new Schema({
    rent: Boolean,
    sale: Boolean,
    auction: Boolean,
    vacational: Boolean
})

const AmenitiesSchema: Schema = new Schema({
    builtArea: Number,
    totalArea: Number,
    rooms: Number,
    baths: Number,
    garage: Boolean,
    pool: Boolean
})

const PriceSchema: Schema = new Schema({
    currency: String,
    symbol: String,
    price: Number
})  

const ImagesSchema: Schema = new Schema ({
    thumbnail: [String],
    medium: [String],
    big: [String],
})

const propertySchema: Schema = new Schema({
    ref: {type: String, required: true},
    location: LocationSchema,
    operation: {type: OperationSchema, required: true},
    type: String,
    amenities: AmenitiesSchema,
    price: PriceSchema,
    images: ImagesSchema,
    updatedBy: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: Date,
})


const propertySchema2: Schema = new Schema({
    ref: {type: String, required: true, unique: true},
    location:{
        address:{
            country: String,
            state: String,
            city: String,
            zone: String,
            postalCode: String,
            block: String,
            streetName: String,
            streetNumber: String,
            apartmentNumber: String,            
        },
        geoData:{
            lat: String,
            lng: String
        }
    },
    operation: {
        rent: Boolean,
        sale: Boolean,
        auction: Boolean,
        vacational: Boolean
    },
    type: String,
    amenities: {
        builtArea: Number,
        totalArea: Number,
        rooms: Number,
        baths: Number,
        garage: Boolean,
        pool: Boolean
    },
    price: {
        currency: String,
        symbol: String,
        price: Number
    },
    images: {
        thumbnail: [String],
        medium: [String],
        big: [String],
    },
    updatedBy: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: Date,
})


export default mongoose.model<IProperty>("Property", propertySchema)


