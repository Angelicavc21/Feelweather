import React from 'react'
import Icon from './Icon'

class Row extends React.Component {
  render() {
    return(
      <li className="list">
        <span>{this.props.daysWeek}
        <br/>
        {this.props.date}/{this.props.month}</span>
        <Icon picture={this.props.picture} />
            <span>Tendras Calor rehidrátate</span>
          <span>{this.props.temperatureMax} °C</span>
      </li>
    )
  }
}
export default Row
