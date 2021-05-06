import { useState, useEffect } from 'react'

const PortraitGallery = ({ pics }) => {

  return (
    <section id={'portrait-gallery'}>
      <div className="portrait-wrapper">
        <div className="portrait-main-container">
          <div className="portrait-left-container">
            <div className="portrait-image">
              <img src={pics[0].url} />
            </div>
            <div class="show-more-btn-container">
              <div class="portrait-show-more-btn">
                Ver mas fotos
              </div>
            </div>
          </div>
          <div className="portrait-cl-container-right">
            <div className="portrait-image-top">
              <img src={pics[1].url} />
            </div>
            <div className="portrait-image-bottom">
              <img src={pics[2].url} />
            </div>
          </div>
          <div className="portrait-cl-container-right">
            <div className="portrait-image-top">
              <img src={pics[3].url} />
            </div>
            <div className="portrait-image-bottom">
              <img src={pics[4].url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortraitGallery

