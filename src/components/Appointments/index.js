import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()

    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="app-container">
        <div className="main-card">
          <div className="top-container">
            <div className="inputs-container">
              <h1 className="main-heading">Add Appointment</h1>

              <form className="form-container" onSubmit={this.onAdd}>
                <p className="title-input">TITLE</p>
                <input
                  value={title}
                  className="input-box"
                  placeholder="Title"
                  onChange={this.onTitleChange}
                />
                <p className="title-input">DATE</p>
                <input
                  value={date}
                  type="date"
                  className="input-box"
                  onChange={this.onDateChange}
                />
                <br />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="logo-container">
              <img
                className="app-logo"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="bottom-container">
            <div className="appointment-title-btn-container">
              <h1 className="appointments-title">Appointments</h1>
              <button className="starred-btn" type="button">
                Starred
              </button>
            </div>
            <ul className="list-container">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  toggleIsStarred={this.toggleIsStarred}
                  key={eachAppointment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
