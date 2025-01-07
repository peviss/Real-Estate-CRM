import Skeleton from 'react-loading-skeleton'
import '../styles.css'

const SkeletonCard = () => {
  return (
    <li className="cards-item">
      <div className="card">
        <div className="card-header">
          <div className="card-image">
            <Skeleton duration={1} height={500} width={500} />
          </div>
        </div>

        <div className="card-content">
          <div className="card-body">
            <div className="card-title">
              <Skeleton duration={1} />
            </div>
            <h2><Skeleton duration={1} width={'10'} /></h2>
            <div className="card-details">
              <Skeleton duration={1} />
            </div>
            <div className="card-specs">
              <div>
                <span><Skeleton duration={1} /></span>
                <i class="material-icons-outlined">single_bed</i>
                <Skeleton duration={1} />
              </div>
              <Skeleton duration={1} />
              <div>
                <span><Skeleton duration={1} /></span>
                <i class="material-icons-outlined">bathtub</i>
              </div>
              <div>
                <i class="material-icons-outlined">aspect_ratio</i>
                <span><Skeleton duration={1} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>)
}

export default SkeletonCard