import * as React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LinearProgress } from '@material-ui/core'
import { FormControl } from '@material-ui/core';
import { TextField } from "material-ui-formik-components"

import { ApplicationState, AppDispatch } from '../../../store/types'
import { SignupProps } from '../../../store/account/types'
import { TxData } from '../../../store/helpers/forms/types'

import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'

import SendIcon from '@material-ui/icons/Send'

import { signup } from '../../../store/account/signup/actions'

import { SignupButton } from '../../../styles/theme'
import { TxHelper } from '../../../components/io/apiTxHelper'
import { Account, GeneralError } from '../../../config/strings'

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email(`${Account.errorEmailValid}`)
    .required(`${GeneralError.errorRequired}`),
  pass1: Yup.string()
    .min(8, `${Account.errorPassTooShort}`)
    .required(`${GeneralError.errorRequired}`),
  pass2: Yup.string()
    .oneOf([Yup.ref('pass1'), null], `${Account.errorPassNotMatch}`)
    .min(8, `${Account.errorPassTooShort}`)
    .required(`${GeneralError.errorRequired}`)
})

interface FormFuncs {
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

class SignupForm extends React.Component<Props, FormFuncs> {

    static defaultProps = {
        email: "",
        pass1: "",
        pass2: "",
        url: "",
        info: { code: 0, summary: "", info: {}},
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
                    id ='email'
                    name='email'
                    label={Account.email}
                    component={TextField}
                  />
                  <Field
                    id ='pass1'
                    name="pass1"
                    label={Account.password}
                    component={TextField}
                  />
                  <Field
                    id ='pass2'
                    name="pass2"
                    label={Account.repeatPassword}
                    component={TextField}
                  />
                  <Grid container>
                      <Grid item xs={12} sm={3}>
                          <SignupButton type='submit' variant="contained" color="primary" endIcon={<RightCircleOutlined spin={formProps.isSubmitting}/>}>
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
