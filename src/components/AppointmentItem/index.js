import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {title, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onStarClick = id => {
    console.log('star clicked')
    toggleIsStarred(id)
  }

  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="list-item-container">
      <div className="list-upper-container">
        <p className="appointment-title">{title}</p>
        <button className="star-btn" onClick={onStarClick} type="button">
          <img src={starImgUrl} alt="star" className="star-icon" />
        </button>
      </div>
      <p className="appointment-date">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
