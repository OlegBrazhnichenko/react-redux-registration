import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Row, Col} from 'antd';
import { Field, reduxForm } from 'redux-form';
import FormField from './formField';

const FormItem = Form.Item;

class RegistrationForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit } = this.props;

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
              />
              <Field
                name="surname"
                type="text"
                component={FormField}
                label="Second name"
              />
              <Field
                name="email"
                type="email"
                component={FormField}
                label="Email"
              />
              <Field
                name="password"
                type="password"
                component={FormField}
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
  actions: PropTypes.object,
  onSubmit: PropTypes.func
};

RegistrationForm = reduxForm({
  form: 'RegistrationForm',
  validate: values => {
    const errors = {};
    if (values.name && values.name.length > 15) {
      errors.name = 'Must be 15 characters or less'
    } else if( !/^[a-z ,.'-]+$/i.test(values.name)){
      errors.name = 'Name must contain only a-z , . - or \' characters.'
    }

    if( values.surname && !/^[a-z ,.'-]+$/i.test(values.surname)){
      errors.surname = 'Second name must contain only a-z , . - or \' characters.'
    }

    return errors
  },
  warn: values => {
    const warnings = {};
    if(values.password && values.password < 8){
      warnings.password = 'Password not to strong.'
    }

    return warnings
  }
})(RegistrationForm);

export default RegistrationForm;
