import React from "react";
import { connect } from "react-redux";

class List extends React.Component {
  onSelectChild = e => {
    this.props.onSelectChild(e.target.name);
  };

  render() {
    return this.props.getCategoryDetails !== undefined ? (
      <nav className="panel">
        <p className="panel-heading">List</p>
        {this.props.getCategoryDetails.map(res => (
          <a
            name={res.url}
            key={res.name}
            //href={res.name}
            href="/#"
            className="panel-block is-active"
            onClick={this.onSelectChild}
          >
            <span className="panel-icon">
              <i className="fab fa-galactic-republic" aria-hidden="true" />
            </span>
            {res.name}
          </a>
        ))}
      </nav>
    ) : (
      <nav className="panel">
        <p className="panel-heading">List</p>
        <a href="/#" className="panel-block is-active">
          <span className="panel-icon">
            <i className="fab fa-galactic-republic" aria-hidden="true" />
          </span>
          Click Button
        </a>
      </nav>
    );
  }
}

function mapStateToProps({ getCategoryDetails }) {
  return { getCategoryDetails };
}

export default connect(mapStateToProps)(List);
