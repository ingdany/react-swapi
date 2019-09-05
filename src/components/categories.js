import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/index";
import SkinContext from "../contexts/SkinContext";

const Categories = props => {
  const initialValue = [{ id: 0, value: "---" }];

  const allowedState = [
    { id: 1, value: "planets" },
    { id: 2, value: "starships" },
    { id: 3, value: "vehicles" },
    { id: 4, value: "people" },
    { id: 5, value: "films" },
    { id: 6, value: "species" }
  ];

  const [categorylist, setStateValues] = useState(initialValue);

  useEffect(() => {
    setStateValues(allowedState);
  }, []);

  const renderButton = skin => {
    return (
      <div className="row">
        {categorylist.map((localState, index) => (
          <button
            className={`button bd-notification ${skin}`}
            style={{ marginRight: "5px" }}
            onClick={() => props.fetchCategories(localState.value)}
          >
            {localState.value}
          </button>
        ))}
      </div>
    );
  };

  return (
    <SkinContext.Consumer>{skin => renderButton(skin)}</SkinContext.Consumer>
  );
};

function mapStateToProps({ state }) {
  return { getCategoryDetails: state };
}

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Categories);
