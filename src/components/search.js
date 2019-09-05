import React from "react";
import { Field, reduxForm } from "redux-form";

class Search extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = () => {
    return (
      <div
        id="search"
        className="row"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
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
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      /*<div id="search" className="row" style={{ marginTop: "10px", marginBottom: "10px" }}>
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
      <button className="ui button primary">Submit</button>
      */

      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="criteria" label="Search" component={this.renderInput} />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.criteria) {
    errors.criteria = "You must enter a search";
  }

  return errors;
};

//export default Search;
export default reduxForm({
  form: "search",
  validate
})(Search);
