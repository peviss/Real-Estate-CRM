import React from 'react'
import './PhotoGallery.css'

const PhotoGallery = ({ pictures }) => {
  return (
    <div className="photo-gallery-container">
      <ul>
        {
          pictures.map(pic => {
            return (
              <li>
                {/* <a href={pic.url} data-fancybox data-fancybox="gallery" > */}
                <a href={pic.url} data-fancybox="images">
                  <img src={pic.url} alt="x" loading="lazy" />
                </a>
              </li>
            )
          })
        }
        {/* <!--  Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens!  --> */}
        <li></li>
      </ul>
    </div>
  )
}

export default PhotoGallery
