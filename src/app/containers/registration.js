import PropTypes from 'prop-types';
import React, {Component} from 'react';
import RegistrationForm from '../components/registrationForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';
import {SubmissionError} from 'redux-form'

class Registration extends Component {
  constructor(props){
    super(props);
    this.handleRegistrationRequest = this.handleRegistrationRequest.bind(this);
  }
  handleRegistrationRequest(value) {
    return this.props.registerActions.register(value)
      .then(() => {
        console.log("register success");
      })
      .catch((response) => {
        if(response.error.response.data.errors){
          throw new SubmissionError(response.error.response.data.errors)
        }
      });
  }
  render() {
    const {registerActions} = this.props;
    return (
      <RegistrationForm actions={registerActions} onSubmit={this.handleRegistrationRequest} />
    );
  }
}
Registration.propTypes = {
  // formData: PropTypes.object,
  registerActions: PropTypes.object
};

// function mapStateToProps(state) {
function mapStateToProps() {
  return {
    // formData: state.registration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerActions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
