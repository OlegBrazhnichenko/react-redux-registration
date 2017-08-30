import PropTypes from 'prop-types';
import React, {Component} from 'react';
import RegistrationForm from '../components/registrationForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';

class Registration extends Component {
  render() {
    const {registerActions} = this.props;
    return (
      <RegistrationForm actions={registerActions} />
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
