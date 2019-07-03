import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/index";

class Categories extends React.Component {
  /*[6] Use a componentDidMount*/
  /*componentDidMount() { 
    this.props.fetchCategories();
  }*/

  render() {
    return (
      <div className="row">
        <button
          className="button bd-notification is-primary"
          style={{ marginRight: "5px" }}
          onClick={() => this.props.fetchCategories("planets")}
        >
          Planets
        </button>
        <button
          className="button bd-notification is-primary"
          style={{ marginRight: "5px" }}
          onClick={() => this.props.fetchCategories("starships")}
        >
          Starships
        </button>
        <button
          className="button bd-notification is-primary"
          style={{ marginRight: "5px" }}
          onClick={() => this.props.fetchCategories("vehicles")}
        >
          Vehicles
        </button>
        <button
          className="button bd-notification is-primary"
          style={{ marginRight: "5px" }}
          onClick={() => this.props.fetchCategories("people")}
        >
          People
        </button>
        <button
          className="button bd-notification is-primary"
          style={{ marginRight: "5px" }}
          onClick={() => this.props.fetchCategories("films")}
        >
          Films
        </button>
        <button
          className="button bd-notification is-primary"
          style={{ marginRight: "5px" }}
          onClick={() => this.props.fetchCategories("species")}
        >
          Species
        </button>
      </div>
    );
  }
}

function mapStateToProps({ state }) {
  return { getCategoryDetails: state };
}

/* [5] Connect but send a null state,*/
export default connect(mapStateToProps,{fetchCategories})(Categories);
