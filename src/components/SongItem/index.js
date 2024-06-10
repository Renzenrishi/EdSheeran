import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const SongItem = props => {
  const {details, getItemToBeDelete} = props

  const {id, imageUrl, name, genre, duration} = details

  const deleteItem = () => {
    getItemToBeDelete(id)
  }

  return (
    <li className="song-list-item">
      <div className="col-1">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="song-desc">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="col-2">
        <h1>{duration}</h1>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={deleteItem}
        >
          {/* eslint-disable-next-line */}
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem
