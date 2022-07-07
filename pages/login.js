import { useRouter } from 'next/router'

// third party packages
import React from 'react'
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

// components
import Layout from '../components/layout';

// enums|functions|actions
import { login } from '../redux/actions/authActions';
import { colors, ROUTES } from '../lib/enums';
import { setAlert } from '../redux/actions/commonAction';

// css|styled component
import { LoginSection, LoginForm, Field, Card } from '../components/Login.style';
import { Input, Text16, Button, H1 } from '../components/ui';
import Head from '../components/Head';

// login validation schema
const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // submit login form
  const onSubmit = (values, setSubmitting) => {

    // if email and password match call login action or show error
    if (values.email === 'admin@admin.com' && values.password === 'admin@admin') {
      localStorage.setItem('isLogin', true);
      setTimeout(() => {
        dispatch(setAlert({ message: 'Login successfully', timeout: 5000 }))
        dispatch(login());
        router.push(ROUTES.addressBook);
      }, 500);
    }
    else {
      dispatch(setAlert({ message: 'Invalid credential', color: "danger" }))
      localStorage.setItem('isLogin', false);
    }

    // enable submit button again
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  }

  return (
    <>
      <div className={'container'}>
        <Head
          title={`Address Book | Login`}
          description={`Login in Address Book`}
        />
        <LoginSection>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchemaLogin}
            validateOnChange
            validateOnBlur
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values, setSubmitting);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <LoginForm onSubmit={handleSubmit}>
                <H1 fontSize="2em" color={colors.SECONDARY_TEXT_LIGHT} className="mb-4 text-center">
                  Login
                </H1>
                <Card>
                  <Field>
                    <Text16 className="pv-5">Email</Text16>
                    <Input
                      type="email"
                      name="email"
                      placeholder='Enter email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </Field>
                  <Field>
                    <Text16 className="pv-5">Password</Text16>
                    <Input
                      type="password"
                      name="password"
                      placeholder='Enter password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                  </Field>

                  <hr />

                  <Field className='m-0 mb-2'>
                    <Button type="submit" disabled={isSubmitting}>
                      Login
                    </Button>
                  </Field>
                </Card>
              </LoginForm>
            )}
          </Formik>
        </LoginSection>
      </div>
    </>
  )
}

export default Login;

Login.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
