import React, {Component} from 'react'
import {Form, Input} from 'antd';

const FormItem = Form.Item;

class FormField extends Component {
  render(){
    const {input, label, type, meta: { touched, error, warning }} = this.props;

    return(
      <FormItem
        label={label}
        validateStatus={(touched && ((error && "error") || (warning && "warning"))) || ""}
        help={touched && error|| warning }
      >
        <Input {...input} placeholder={label} type={type} />
      </FormItem>
    )
  }
}

export default FormField;
