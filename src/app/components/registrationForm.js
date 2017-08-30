import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Row, Col} from 'antd';
import { Field, reduxForm } from 'redux-form';
import {SubmissionError} from 'redux-form'

const FormItem = Form.Item;

class RegistrationForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRegistrationRequest = this.handleRegistrationRequest.bind(this);
  }
  handleRegistrationRequest(value) {
    return this.props.actions.register(value)
      .then(() => {
        console.log("register success");
      })
      .catch((response) => {
        if(response.error.response.data.errors){
          throw new SubmissionError(response.error.response.data.errors)
        }
      });
  }
  renderField = ({input, label, type, meta: { touched, error, warning }}) => {
    return(
        <FormItem
          label={label}
          validateStatus={(touched && ((error && "error") || (warning && "warning"))) || ""}
          help={touched && error|| warning }
        >
          <Input {...input} placeholder={label} type={type} />
        </FormItem>
    )
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="container">
        <Form onSubmit={handleSubmit(this.handleRegistrationRequest)} className="form-container">
          <Row>
            <Col span={20} offset={2}>
              <Field
                name="name"
                type="text"
                component={this.renderField}
                label="Username"
              />
              <Field
                name="surname"
                type="text"
                component={this.renderField}
                label="Second name"
              />
              <Field
                name="email"
                type="email"
                component={this.renderField}
                label="Email"
              />
              <Field
                name="password"
                type="password"
                component={this.renderField}
                label="Password"
              />
              <FormItem>
                <Row>
                  <Col span={10} offset={1}>
                    <Button type="primary" disabled={pristine || submitting} htmlType="submit" loading={submitting}>
                      Submit
                    </Button>
                  </Col>
                  <Col span={10} offset={2}>
                    <Button type="primary" disabled={pristine || submitting} onClick={reset}>
                      Clear Values
                    </Button>
                  </Col>
                </Row>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  actions: PropTypes.object
};

RegistrationForm = reduxForm({
  form: 'RegistrationForm'
})(RegistrationForm);

export default RegistrationForm;
