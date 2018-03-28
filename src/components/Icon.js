import React from 'react'

class Icon extends React.Component {
  render() {

    let picture = this.props.icon;

    return (
      
        <img className="icon-day"  src={`https://sasgspe.blob.core.windows.net/images/${this.props.picture}.png`} />
      
    )
  }
}

export default Icon
