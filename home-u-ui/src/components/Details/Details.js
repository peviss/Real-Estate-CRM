import React, { useEffect, useState } from 'react'
import { formatAttr, formatPrice, formatCurrency } from '../../api/utils/formaters'
import { useParams } from 'react-router-dom'
import PortraitGallery from './PortraitGallery'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import SkeletonPortrait from '../Skeleton/SkeletonPortrait'



//const Details = ( {match}, {title, address, price, currency, beds, baths, sqft  }) => {
const Details = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

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

  const renderOnDataLoaded = () => {
    return (
      <>
        <h1>{data.title}</h1>
        <p>
          {`${data.city}, ${data.state}, ${data.country}`}
        </p>
        <PortraitGallery pics={data.pictures} />
        <h2>{data.price}</h2>
        

      </>
    )
  }

  const renderOnDataNotLoaded = () => {
    return (
      <>
        <Skeleton duration={1} height={'100%'} width={'60%'}/>
        <SkeletonPortrait />
        <Skeleton duration={1} height={'100%'} width={'60%'}/>
      </>
    )
  }

  return (
    <div className="main">
      {
        loading ? (
            renderOnDataNotLoaded()
          ) : (
            renderOnDataLoaded()
          )

      }


    </div>
  )
}

export default Details
