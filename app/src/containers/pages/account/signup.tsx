import * as React from 'react'
import { connect } from 'react-redux'

import { themeStyles } from '../../../styles/theme'

import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LinearProgress } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import { TextField } from "material-ui-formik-components"

import { ApplicationState } from '../../../store'
import { ActionProps, AppDispatch } from '../../../store/types'
import { SignupProps } from '../../../store/account/types'
import { FormData } from '../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../store/helpers/forms/actions'
import { signup } from '../../../store/account/signup/actions'

import { TXHelper } from '../../io/apiTxHelper'

import { Account } from '../../../utils/strings'

const signupSchema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required('Required'),
  pass1: Yup
    .string()
    .min(8, `${Account.ErrorPassTooShort}`)
    .required('Required'),
  pass2: Yup
    .string()
    .oneOf([Yup.ref('pass1'), null], `${Account.ErrorPassNotMatch}`)
    .min(8, `${Account.ErrorPassTooShort}`)
    .required('Required')
})

interface FormProps {
  email: string
  pass1: string
  pass2: string
}

interface SignupDispatchProps {
  handleSubmit: (values: SignupProps) => void
  setFormFunctions: (formProps: FormData) => void
}

type Props = FormProps & SignupDispatchProps

class SignupForm extends React.Component<Props> {

    static defaultProps = {
        email: "",
        pass1: "",
        pass2: "",
        handleSubmit: (values: SignupProps) => {},
        setFormFunctions: (formProps: FormData) => {},
    }

  constructor (props: Props) {
   super(props)
  }

  handleSubmit = (values: FormProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset, data: { summary: "", info: {} } } )
    const signupInfo: SignupProps = {
        email: values.email,
        password: values.pass1
    }
    this.props.handleSubmit(signupInfo)
  }

  render() {

    return (
      <div>
          <h2>{Account.signupHeading}</h2>
          <Formik
            initialValues={ {email: "", pass1: "", pass2: ""} }
            enableReinitialize={true}
            validationSchema={signupSchema}
            onSubmit={(values: FormProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
          >
            {(formProps: FormikProps<FormProps>) => (
              <Form>
                  <Field
                    name='Email'
                    value={this.props.email}
                    label='email'
                    component={TextField}
                  />
                  <ErrorMessage name='email' />
                  <Field
                    name="pass1"
                    value={this.props.pass1}
                    label='Password'
                    component={TextField}
                  />
                  <ErrorMessage name='pass1' />
                  <Field
                    name="pass2"
                    value={this.props.pass2}
                    label='Reconfirm Password'
                    component={TextField}
                  />
                  <ErrorMessage name='pass2' />
                  <br />
                  {formProps.isSubmitting && <LinearProgress />}
                  <br />
                  <Button type='submit' variant="contained" color="primary" disabled={formProps.isSubmitting}>
                    Submit
                  </Button>
              </Form>
          )}
          </Formik>
          <TXHelper/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): SignupDispatchProps => {
  return {
    handleSubmit: (values: SignupProps) => dispatch(signup(values)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const Signup = connect<null, SignupDispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(SignupForm)
