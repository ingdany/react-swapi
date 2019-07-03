import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div id="search" className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="field">
          <div className="control">
            <input
              className="input is-focused"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
