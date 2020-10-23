import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  handleError({ error, touched }) {
    if (error && touched) {
      return <div className="ui error message">{error}</div>;
    }
  }

  renderField = ({ input, label, meta }) => {
    const errorField = meta.error && meta.touched ? "error" : "";
    return (
      <div className={`field ${errorField}`}>
        <label>{label}</label>
        <div>
          <input {...input} autoComplete="off" placeholder={label} />
          <div>{this.handleError(meta)}</div>
        </div>
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div style={{background: "#7884c147",
      padding: "20px 20px 0px 20px",
      borderRadius: "41px",
      height:"300px"}}>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Field
            name="title"
            type="input"
            component={this.renderField}
            label="Title"
          />
          <Field
            name="description"
            type="input"
            component={this.renderField}
            label="Description"
          />
          <div>
            <button className="ui button primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const error = {};
  if (!values.title) {
    error.title = "You must enter the title";
  }
  if (!values.description) {
    error.description = "You must enter your description";
  }
  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);



