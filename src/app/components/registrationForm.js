import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Row, Col} from 'antd';
import {Field, reduxForm} from 'redux-form';
import FormField from './formField';
import * as validation from '../services/validation';

const FormItem = Form.Item;

class RegistrationForm extends Component {
  render() {
    const {handleSubmit, pristine, reset, submitting, onSubmit} = this.props;

    return (
      <div className="container">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <Row>
            <Col span={20} offset={2}>
              <Field
                name="name"
                type="text"
                component={FormField}
                label="Username"
                validate={validation.name}
              />
              <Field
                name="surname"
                type="text"
                component={FormField}
                label="Second name"
                validate={validation.surname}
              />
              <Field
                name="email"
                type="email"
                component={FormField}
                label="Email"
                validate={validation.email}
              />
              <Field
                name="password"
                type="password"
                component={FormField}
                label="Password"
                warn={validation.shortPassword}
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
  actions: PropTypes.object,
  onSubmit: PropTypes.func
};

RegistrationForm = reduxForm({
  form: 'RegistrationForm'
})(RegistrationForm);

export default RegistrationForm;
