import React from "react";

class Details extends React.Component {
  render() {
    return (
      <div className="box">
        <div>{this.props.detailsChild}</div>
      </div>
    );
  }
}

export default Details;
