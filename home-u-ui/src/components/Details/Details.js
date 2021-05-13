import React, { useEffect, useState, useRef } from 'react'
import { formatAttr, formatPrice, formatCurrency } from '../../api/utils/formaters'
import { useParams } from 'react-router-dom'
import PortraitGallery from './PortraitGallery'
import PhotoGallery from './PhotoGallery'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import SkeletonPortrait from '../Skeleton/SkeletonPortrait'
import Contact from './Contact'
import "./Details.css"



//const Details = ( {match}, {title, address, price, currency, beds, baths, sqft  }) => {
const Details = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const mapRef = useRef(null)

  const executeScroll = () => mapRef.current.scrollIntoView({ behavior: "smooth" })

  const { id } = useParams()

  const formatData = (_data) => {
    return {
      title: _data.title,
      city: _data.location.city.name,
      state: _data.location.state.name,
      country: _data.location.country.name,
      currency: _data.currency,
      pictures: _data.pictures,
      price: formatPrice(_data.price),
      beds: formatAttr(_data.attributes, 'BEDROOMS'),
      baths: formatAttr(_data.attributes, 'FULL_BATHROOMS'),
      sqft: formatAttr(_data.attributes, 'COVERED_AREA'),
      operation: formatAttr(_data.attributes, 'OPERATION'),
      currency: formatCurrency(_data.currency_id)
    }
  }

  const fetchDataFromAPI = async () => {
    const url = `https://api.mercadolibre.com/items/${id}`
    await axios.get(url)
      .then(res => {
        var response = res.data
        var formatedData = formatData(response)
        console.log('F data:')
        console.log(formatedData)
        setData(formatedData)
        console.log('real data:')
        console.log(data)
      })
      .then(() => setLoading(false))
      .catch(err => console.log(err.message))

  }

  useEffect(() => {
    fetchDataFromAPI()

  }, []);

  const handleSeeMore = () => {

  }

  const renderOnDataLoaded = () => {
    return (
      <div className="details-container">
        <div className="details-header">
          <h1>{data.title}</h1>
          <p onClick={executeScroll}>
            {`${data.city}, ${data.state}, ${data.country}`}
          </p>
        </div>
        <PortraitGallery pics={data.pictures} />
        <div className="details-body">
          <div class="details-left">
            <div className="details-price">
              <h2>{data.price}</h2>
            </div>
            <div className="details-section-container">
              <div class="details-amenities-header">
                <h2>Amenities</h2>
              </div>
              <ul>
                <li>Garage</li>
                <li>Seguridad</li>
                <li>Camaras</li>
                <li>Balcon</li>
              </ul>
            </div>
            <div className="details-section-container">
              <div class="details-amenities-header">
                <h2>Description</h2>
              </div>
              <p>
                {data.title}
              </p>
            </div>
          </div>

          <Contact title={data.title} />

        </div>

        <div className="details-section-container">
          <div class="details-amenities-header">
            <h2>Location</h2>
          </div>
          <p>
            {`${data.city}, ${data.state}, ${data.country}`}
          </p>
        </div>

        <div ref={mapRef} className="details-map">
          {/* <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=-34.9632342,-54.9439981&t=&z=16&ie=UTF8&iwloc=B&output=embed">
          </iframe> */}

          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${data.city}, ${data.state}, ${data.country}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}>
          </iframe>
        </div>
        <PhotoGallery pictures={data.pictures} />
      </div>
    )
  }

  const renderOnDataNotLoaded = () => {
    return (
      <>
        <Skeleton duration={1} height={'100%'} width={'60%'} />
        <SkeletonPortrait />
        <Skeleton duration={1} height={'100%'} width={'60%'} />
      </>
    )
  }

  return (
    <div className="main">
      {
        loading ? renderOnDataNotLoaded() : renderOnDataLoaded()
      }
    </div>
  )
}

export default Details
