import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Details from '../../Details/Details'
import './styles.css'

const ListItem = (props) => {
    const { data } = props;
    const { data: { id, title, address, operation, price, beds, baths, sqft, img } } = props;

    const [likeClicked, setLikeClicked] = useState(false)

    const handleLikeClick = () => {
        setLikeClicked(!likeClicked);
    }

    return (
        <li key={id} className="cards-item">
            <Link to={`/props/${id}`}>
            <div className="card">
                <div className="card-header">
                    <div className="card-image">

                        <img src={img} alt={title} />
                    </div>
                    <div className={`operation-tag ${operation}`}>
                        <span>{operation}</span>
                    </div>
                </div>

                <div className="card-content">
                    <div className="card-body">
                        <div className="card-title">
                            <h2>{title}</h2>
                            {
                                likeClicked ?
                                <i className="material-icons logo-md-clicked" onClick={handleLikeClick}>favorite</i> :
                                <i className="material-icons-outlined logo-md" onClick={handleLikeClick}>favorite</i>
                            }
                            
                        </div>
                        <div className="card-details">
                            <div>
                                <i class="material-icons-outlined">room</i>
                                <span>{address}</span>
                            </div>

                            <h2>${price}</h2>
                        </div>
                        <div className="card-specs">
                            <div>
                                <span>{beds}</span>
                                <i class="material-icons-outlined">single_bed</i>
                            </div>
                            <div>
                                <span>{baths}</span>
                                <i class="material-icons-outlined">bathtub</i>
                            </div>
                            <div>
                                <i class="material-icons-outlined">aspect_ratio</i>
                                <span>{sqft} m²</span>
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
