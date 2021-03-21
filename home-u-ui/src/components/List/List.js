import React from 'react'
import ListItem from './ListItem/ListItem'

import '../styles.css'


const List = () => {
    const data =
    [
      {
        id: "WWLKlWW23u",
        title: "Mansion",
        address: "324th Avery Blvd.",
        price: "25000",
        beds: "6",
        baths:"3",
        sqft: "42300",
        operation: "rent",
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
      },
      {
        id: "alks22na898hBiu",
        title: "Country",
        address: "4324th Llanfair Rd.",
        price: "5000000",
        beds: "4",
        baths:"3",
        sqft: "21200",
        operation: "sale",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/12/4c/0a/ba/montecristo-country-house.jpg"
      },
      {
        id: "LKl23uWWas2",
        title: "Mansion",
        address: "324th Avery Blvd.",
        price: "25000",
        beds: "6",
        baths:"5",
        sqft: "42300",
        operation: "rent",
        img: "https://www.virtualtoursorlando.com/images/panorama-1-360-virtual-tours-orlando-fl.jpg"
      },
      {
        id: "alksna898hBiu",
        title: "Cabañongas",
        address: "4324th Llanfair Rd.",
        price: "5000000",
        beds: "4",
        baths:"3",
        sqft: "21200",
        operation: "sale",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/12/4c/0a/ba/montecristo-country-house.jpg"
      },
      {
        id: "LKl23uAAa",
        title: "Mansion",
        address: "324th Avery Blvd.",
        price: "25000",
        beds: "6",
        baths:"3",
        sqft: "42300",
        operation: "rent",
        img: "https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390"
      },
      {
        id: "LKlfasA23u",
        title: "Bruta mansion pa mudarse con los bepis",
        address: "324th Avery Blvd.",
        price: "25000",
        beds: "6",
        baths:"3",
        sqft: "42300",
        operation: "rent",
        img: "https://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg"
      },
      {
        id: "PPPlPJJJJ898hBiu",
        title: "Country",
        address: "4324th Llanfair Rd.",
        price: "5000000",
        beds: "4",
        baths:"2",
        sqft: "21200",
        operation: "sale",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/12/4c/0a/ba/montecristo-country-house.jpg"
      },
      {
        id: "LKldddddd23u",
        title: "Mansion",
        address: "324th Avery Blvd.",
        price: "25000",
        beds: "6",
        baths:"3",
        sqft: "42300",
        operation: "rent",
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
      },


    ]
    return (
        <div class="main">
            <h1>Featured properties</h1>
            <ul class="cards">
                {data.map(item => {
                    return <ListItem data={item}/>
                })}
            </ul>
            <div className="load-more">
                <button>
                    Load more
                </button>
            </div>
        </div>


    )
}

export default List
