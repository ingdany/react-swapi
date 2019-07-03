import React from "react";
import axios from "axios";
import Categories from "./categories";
import Search from "./search";
import List from "./list";
import Details from "./details";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/index";
import { throwStatement } from "@babel/types";

/* [3] Create a component app to call the first component */
//const App = () => {
class App extends React.Component {
  state = { details: "", rotation: "", orbital: "", diameter: "", climate: "" };

  onSelectParent = async url => {
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({
      details: JSON.stringify(response.data),     
    });
  };

  render() {
    return (
      <div
        id="categories"
        className="columns is-desktop"
        style={{ marginTop: "1px" }}
      >
        <div className="column" />
        <div className="column">
          <Categories />
          <Search />
          <div className="columns">
            <div className="row" />
            <div className="column is-one-third">
              <List onSelectChild={this.onSelectParent} />
            </div>
            <div className="column is-two-thirds">
              <Details
                detailsChild={this.state.details}
              />
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
    );
  }
}

function mapStateToProps({ state }) {
  return { getCategoryDetails: state };
}

export default connect(
  mapStateToProps,
  { fetchCategories }
)(App);
