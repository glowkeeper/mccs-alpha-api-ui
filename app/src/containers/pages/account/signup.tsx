import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import * as Yup from 'yup'
import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import { LinearProgress, FormControl } from '@material-ui/core'
import { TextField } from "material-ui-formik-components"

import { ApplicationState, AppDispatch } from '../../../store/types'
import { SignupProps } from '../../../store/account/types'
import { TxData } from '../../../store/helpers/forms/types'

import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'

import { signup } from '../../../store/account/signup/actions'

import { Signup as SignupButton } from '../../../components/buttons'
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

interface SignupStateProps {
  info: TxData
}

interface SignupDispatchProps {
  handleSubmit: (values: SignupProps) => void
}

type Props = SignupStateProps & SignupDispatchProps

const signupInfo = ( props: Props) => {

    const [formData, setFormData] = useState({ email: "", pass1: "", pass2: ""})
    const [isSubmitting, setSubmit] = useState(false)
    const [summary, setSummary] = useState("")

    useEffect(() => {

        const txSummary: string = props.info.summary
        if( txSummary != summary ) {
            setSubmit(false)
            setSummary(txSummary)
        }
    })

    return (

      <Grid container>
        <Grid item xs={12} sm={3}>
            &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
        <h2>{Account.signupHeading}</h2>
        <Formik
          initialValues={ {email: formData.email, pass1: formData.pass1, pass2: formData.pass2} }
          enableReinitialize={true}
          validationSchema={signupSchema}
          onSubmit={(values: any) => {
            setSubmit(true)
            const signupInfo: SignupProps = {
                email: values.email,
                password: values.pass1
            }
            props.handleSubmit(signupInfo)
          }}
        >
          {(formProps: FormikProps<any>) => (
            <Form>
              <FormControl fullWidth={true}>
                  <Field
                    type='email'
                    name='email'
                    component={TextField}
                    placeholder={Account.email}
                  />
                  <Field
                    type='password'
                    name="pass1"
                    component={TextField}
                    placeholder={Account.password}
                  />
                  <Field
                    type='password'
                    name="pass2"
                    component={TextField}
                    placeholder={Account.repeatPassword}
                  />
                  <Grid container>
                      <Grid item xs={12} sm={3}>
                          <SignupButton type='submit' variant="contained" color="primary" endIcon={<RightCircleOutlined spin={isSubmitting}/>}>
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

signupInfo.defaultProps = {
    email: "",
    pass1: "",
    pass2: "",
    info: { code: 0, summary: "", info: {}},
    handleSubmit: (values: SignupProps) => {},
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
)(signupInfo)
