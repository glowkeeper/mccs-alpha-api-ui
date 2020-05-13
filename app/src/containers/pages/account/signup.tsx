import * as React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LinearProgress } from '@material-ui/core'
import { FormControl } from '@material-ui/core';
import { TextField } from "material-ui-formik-components"

import { ApplicationState } from '../../../store'
import { ActionProps, AppDispatch } from '../../../store/types'
import { SignupProps } from '../../../store/account/types'
import { TxData } from '../../../store/helpers/forms/types'

import SendIcon from '@material-ui/icons/Send'

import { signup } from '../../../store/account/signup/actions'

import { SignupButton } from '../../../styles/theme'
import { TxHelper } from '../../../components/io/apiTxHelper'
import { Account } from '../../../config/strings'

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

interface FormState {
    submitFunc(submitting: false): Function,
    resetFunc(): Function
}

interface FormProps {
  email: string
  pass1: string
  pass2: string
}

interface SignupStateProps {
  info: TxData
}

interface SignupDispatchProps {
  handleSubmit: (values: SignupProps) => void
}

type Props = FormProps & SignupStateProps & SignupDispatchProps

class SignupForm extends React.Component<Props, FormState> {

    static defaultProps = {
        email: "",
        pass1: "",
        pass2: "",
        url: "",
        info: { summary: ""},
        handleSubmit: (values: SignupProps) => {}
    }

  constructor (props: Props) {
   super(props)
   this.state = {
      submitFunc: (submitting: false) => Function,
      resetFunc: () => Function
    }
  }

  componentDidUpdate(previousProps: SignupStateProps) {
    if(this.props.info.summary != "" &&  previousProps.info.summary != this.props.info.summary) {
      this.state.submitFunc(false)
      this.state.resetFunc()
    }
  }

  handleSubmit = (values: FormProps, submit: (submitting: false) => Function, reset: () => Function) => {

    this.setState({submitFunc: submit, resetFunc: reset})
    const signupInfo: SignupProps = {
        email: values.email,
        password: values.pass1
    }
    this.props.handleSubmit(signupInfo)
  }

  render() {

    return (

      <Grid container>
        <Grid item xs={12} sm={3}>
            &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
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
              <FormControl fullWidth={true}>
                <Field
                  name='email'
                  label={Account.email}
                  component={TextField}
                />
                <ErrorMessage name='email' />
                <Field
                  name="pass1"
                  label={Account.password}
                  component={TextField}
                />
                <ErrorMessage name='pass1' />
                <Field
                  name="pass2"
                  label={Account.repeatPassword}
                  component={TextField}
                />
                <ErrorMessage name='pass2' />
                <br />
                {formProps.isSubmitting && <LinearProgress />}
                <br />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                      <SignupButton type='submit' variant="contained" color="primary" disabled={formProps.isSubmitting} endIcon={<SendIcon/>}>
                        {Account.signupButton}
                      </SignupButton>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                       &nbsp;
                   </Grid>
               </Grid>
              </FormControl>
            </Form>
        )}
        </Formik>
        <TxHelper/>
        </Grid>
        <Grid item xs={12} sm={3}>
            &nbsp;
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state: ApplicationState): SignupStateProps => {
  return {
    info: state.forms.data as TxData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): SignupDispatchProps => {
  return {
    handleSubmit: (values: SignupProps) => dispatch(signup(values))
  }
}

export const Signup = connect<SignupStateProps, SignupDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
