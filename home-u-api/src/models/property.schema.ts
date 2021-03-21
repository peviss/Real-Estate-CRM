import mongoose, {Schema, model} from 'mongoose'
import IProperty from './property.model'

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

const StateSchema: Schema = new Schema ({
    active: Boolean,
    deleted: Boolean
})

const propertySchema: Schema = new Schema({
    ref: {type: String, required: true},
    location: LocationSchema,
    operation: {type: OperationSchema, required: true},
    type: String,
    amenities: AmenitiesSchema,
    price: PriceSchema,
    images: ImagesSchema,
    state: StateSchema,
    createdBy: String,
    createdAt: {type: Date, default: Date.now},
    updatedBy: String,
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
    createdBy: String,
    createdAt: {type: Date, default: Date.now},
    updatedBy: String,
    updatedAt: Date,
})


export default model<IProperty>("Property", propertySchema)