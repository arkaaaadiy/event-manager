import { withFormik } from 'formik';

import RegisterForm from '../component/RegisterForm';

import validateForm from '../../../../helpers/validate';
import { connect } from 'react-redux';
import { auth } from '../../../../store/actions/auth';

const RegisterFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {   
      props.auth(
        values.email,
        values.password,
        false,
    );
    setSubmitting(false);
  },
  displayName: 'RegisterForm',
})(RegisterForm);

function mapStateToProps(state) {
	return {    
    error: state.auth.error
	};
}
export default connect(mapStateToProps, {auth})(RegisterFormContainer);