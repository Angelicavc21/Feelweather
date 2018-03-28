import React from 'react'
import Row from './Row'

class List extends React.Component {

  render() {
    return (
      <div className="">
        <ul className="media-list">
          {
            this.props.listado.map((day) => { 
              let weekdays = new Array(7);
              weekdays[0] = 'DOM.';
              weekdays[1] = 'LUN.';
              weekdays[2] = 'MAR.';
              weekdays[3] = 'MIE.';
              weekdays[4] = 'JUE.';
              weekdays[5] = 'VIE.';
              weekdays[6] = 'SAB.';
              var currentDate = new Date(day.time * 1000);
              console.log((currentDate).getDate())
              console.log((currentDate).getMonth()+1)
              let weekdayValue = currentDate.getDay() ;
              console.log(weekdays[weekdayValue])
              return <Row key={ day.time }
                          picture={ day.icon }
                          temperatureMax={ (((day.temperatureMax)- 32) * 5 / 9).toFixed(2) }
                          daysWeek={weekdays[weekdayValue]}
                          date={currentDate.getDate()}
                          month={(currentDate).getMonth()+1}
                      />
            })
          }
        </ul>
      </div>
    )
  }
}

export default List