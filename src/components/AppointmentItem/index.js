import {Component} from 'react'
import {format} from 'date-fns'

class AppointmentItem extends Component {
  render() {
    const {appointmentDetails} = this.props
    const {title, date, isStarred} = appointmentDetails

    const starImgUrl = isStarred
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

    const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

    return (
      <li className="list-item-container">
        <div className="list-upper-container">
          <p className="appointment-title">{title}</p>
          <img src={starImgUrl} alt="star" />
        </div>
        <p className="appointment-date">{formattedDate}</p>
      </li>
    )
  }
}

export default AppointmentItem
