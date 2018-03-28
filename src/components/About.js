import React from 'react'
import List from './List'

class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = { days: [] }
  }

  componentWillMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ef053d30e83f21037db223112b6728ed/-12.168251699999999,-77.0046148?lang=es`)
      .then((response) => {
        return response.json()
      })
      .then((info) => {
        this.setState({ days:info.daily.data  })
      })
  }

  render() {
    if (this.state.days.length > 0) {
      return (
        <div className="">
          <List listado={this.state.days} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando dias...</p>
    }
  }

}

export default About