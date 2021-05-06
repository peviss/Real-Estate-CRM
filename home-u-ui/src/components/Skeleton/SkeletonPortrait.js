import Skeleton from 'react-loading-skeleton'

const SkeletonPortrait = () => {

  return (

    <div className="portrait-main-container">

      <div className="portrait-left-container">
        <div className="portrait-image">
          <Skeleton duration={1} height={'100%'} width={'100%'} />
        </div>
      </div>

      <div className="portrait-cl-container-right">
        <div className="portrait-image-top">
          <Skeleton duration={1} height={'100%'} width={'100%'} />
        </div>
        <div className="portrait-image-bottom">
          <Skeleton duration={1} height={'100%'} width={'100%'} />
        </div>
      </div>

      <div className="portrait-cl-container-right">
        <div className="portrait-image-top">
          <Skeleton duration={1} height={'100%'} width={'100%'} />
        </div>
        <div className="portrait-image-bottom">
          <Skeleton duration={1} height={'100%'} width={'100%'} />
        </div>

      </div>


    </div>
  )
}

export default SkeletonPortrait

