import { Request } from "express"

export const sanitizePrice = (req: Request) => {
    console.log('sanitizing price')
    req.query["price.price"] = { $gte: req.query.min_price, $lte: req.query.max_price }
    delete req.query.min_price
    delete req.query.max_price
}

export const sanitizeRent = (req: Request) => {
    console.log('sanitizing rent')
    req.query["operation.rent"] = req.query.rent
    delete req.query.rent
}

export const sanitizeSale = ( req: Request) => {
    console.log('sanitizing sale')
    req.query["operation.sale"] = req.query.sale
    delete req.query.sale
}
export const sanitizeAuction = (req: Request) => {
    console.log('sanitizing auc')
    req.query["operation.auction"] = req.query.auction
    delete req.query.auction
}
export const sanitizeVacational = (req: Request) => {
    console.log('sanitizing vac')
    req.query["operation.vacational"] = req.query.vacational
    delete req.query.vacational
}

export const sanitizeRooms = (req: Request) => {
    console.log('sanitizing rooms')
    req.query["amenities.rooms"] = req.query.rooms
    delete req.query.rooms
}

export const sanitizeBaths = (req: Request) => {
    console.log('sanitizing baths')
    req.query["amenities.baths"] = req.query.baths
    delete req.query.baths
}

export const sanitizeCity = (req: Request) => {
    console.log('sanitizing city')
    req.query["location.address.city"] = req.query.city
    delete req.query.city
}

export const sanitizeZone = (req: Request) => {
    console.log('sanitizing zone')
    req.query["location.address.zone"] = req.query.zone
    delete req.query.zone
}