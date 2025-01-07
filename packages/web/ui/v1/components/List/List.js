import React, { useEffect, useState } from 'react'
import { formatData, formatPrice, formatAttr } from '../../api/utils/formaters'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ListItem from './ListItem/ListItem'

import '../styles.css'
import SkeletonCard from '../Skeleton/SkeletonCard'

const List = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  const fetchDataFromAPI = async () => {
    const url = 'https://api.mercadolibre.com/sites/MLU/search?q=apartamento%20punta%20del%20este&limit=9'
    await axios.get(url)
      .then(res => {
        var response = res.data
        var auxData = formatData(response)
        console.log(response)
        setData(auxData)
        setLoading(false)
        console.log('Aux data')
        console.log(auxData)
        console.log('ACTUAL DATA-------')
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDataFromAPI()
  }, []);


  return (
    <div class="main">
      <h1>Featured properties</h1>
      <ul class="cards">
        {
          loading ?
            Array(9).fill().map(item => {
              return <SkeletonCard />
            }) :
            data.map(item => {
              return <ListItem data={item} />
            })
        }
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
