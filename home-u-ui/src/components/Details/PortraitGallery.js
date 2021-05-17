import { useState, useEffect } from 'react'
import PhotoGallery from './PhotoGallery'

const PortraitGallery = ({ pics }) => {

  const [open, setOpen] = useState(false)

  const handleSeeMore = () => {
    setOpen(true)
  }

  return (

    !open ?
    <section id={'portrait-gallery'}>
      <div className="portrait-wrapper">
        <div className="portrait-main-container">
          <div className="portrait-left-container">
            <div className="portrait-image">
              <img src={pics[0].url} onClick={handleSeeMore}/>
            </div>
            <div class="show-more-btn-container">
              <div class="portrait-show-more-btn" onClick={handleSeeMore}>
                Ver mas fotos
              </div>
            </div>
          </div>
          <div className="portrait-cl-container-right">
            <div className="portrait-image-top">
              <img src={pics[1].url} onClick={handleSeeMore}/>
            </div>
            <div className="portrait-image-bottom">
              <img src={pics[2].url} onClick={handleSeeMore}/>
            </div>
          </div>
          <div className="portrait-cl-container-right">
            <div className="portrait-image-top">
              <img src={pics[3].url} onClick={handleSeeMore}/>
            </div>
            <div className="portrait-image-bottom">
              <img src={pics[4].url} onClick={handleSeeMore}/>
            </div>
          </div>
        </div>
      </div>
    </section> : <PhotoGallery pictures={ pics }/>
  )
}

export default PortraitGallery

