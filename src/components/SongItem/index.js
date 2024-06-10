import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const SongItem = props => {
  const {details} = props

  const {imageUrl, name, genre, duration} = details

  return (
    <li className="song-list-item">
      <div className="col-1">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="song-desc">
          <h1>{name}</h1>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="col-2">
        <h1>{duration}</h1>
        <button type="button" className="delete-btn">
          {/* eslint-disable-next-line */}
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem
