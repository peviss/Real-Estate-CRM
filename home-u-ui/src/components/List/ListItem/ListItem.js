import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Details from '../../Details/Details'
import Skeleton from 'react-loading-skeleton'
import './styles.css'

const ListItem = ({ data: { id, title, address, operation, price, beds, baths, sqft, img, currency } }) => {
  const [likeClicked, setLikeClicked] = useState(false)

  const handleLikeClick = () => {
    setLikeClicked(!likeClicked);
  }

  const renderOperationTag = (operation) => {
    if(operation.toLowerCase() === 'venta') {
      return 'sale'
    }
    return 'rent'
  }

  return (

    <li key={id} className="cards-item">
     <Link to={`/props/${id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-image">
              <img src={img || 'https://s3.amazonaws.com/online.storage/GRAFFOS/Resources/7fc3809a-a0aa-41db-bfa5-259167f435a2.gif'} alt={title} />
            </div>
            <div className={`operation-tag ${renderOperationTag(operation) || ''}`}>
              <span>{operation || <Skeleton />}</span>
            </div>
          </div>

          <div className="card-content">
            <div className="card-body">
              <div className="card-title">
                <h2>{title || <Skeleton width={'10'}/>}</h2>
                {
                  likeClicked ?
                    <i className="material-icons logo-md-clicked" onClick={handleLikeClick}>favorite</i> :
                    <i className="material-icons-outlined logo-md" onClick={handleLikeClick}>favorite</i>
                }

              </div>
              <div className="card-details">
                <div className="card-details-location">
                  <i class="material-icons-outlined">room</i>
                  <span>{address || <Skeleton width={100} />}</span>
                </div>
                <div className="card-price">
                  <h2>{`${currency}${price}` || <Skeleton width={100} />}</h2>
                </div>
              </div>
              <div className="card-specs">
                <div>
                  <span>{beds || <Skeleton width={30} />}</span>
                  <i class="material-icons-outlined">single_bed</i>
                </div>
                <div>
                  <span>{baths || <Skeleton width={30} />}</span>
                  <i class="material-icons-outlined">bathtub</i>
                </div>
                <div>
                  <i class="material-icons-outlined">aspect_ratio</i>
                  <span>{sqft || <Skeleton width={30} />}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>


  )
}

export default ListItem
