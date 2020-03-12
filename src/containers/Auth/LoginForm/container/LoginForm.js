import { withFormik } from 'formik';

import LoginForm from '../component/LoginForm';

import validateForm from '../../../../helpers/validate';
import { connect } from 'react-redux';
import { auth } from '../../../../store/actions/auth';


const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
    remember: false
  }),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {          
        props.auth(
            values.email,
            values.password,
            true,
            values.remember
        );
        setSubmitting(false);
        
  },
  displayName: 'LoginForm',
})(LoginForm);

function mapStateToProps(state) {
	return {
    token: state.auth.token,
    error: state.auth.error
	};
}
export default connect(mapStateToProps, { auth })(LoginFormContainer);