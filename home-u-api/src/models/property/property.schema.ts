import {Schema, model} from 'mongoose'
import IProperty from './property.model'


const propertySchema: Schema = new Schema({
    ref: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    description: {type: String},
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