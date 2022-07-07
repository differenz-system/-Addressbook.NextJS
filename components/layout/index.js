import { useRouter } from 'next/router';

// third party packages
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from '../header';
import Footer from '../footer';

// enums
import { ROUTES } from '../../lib/enums';
import { login, logout } from "../../redux/actions/authActions";

// css|styled component
import { Layout } from './Layout.style';
import CustomAlert from '../common/Alert';
import "bootstrap/dist/css/bootstrap.min.css";

const LayoutComponent = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const router = useRouter();

  useEffect(() => {
    // check user is already logged in or not in the system
    const is_login = JSON.parse(localStorage.getItem("isLogin"));
    if (is_login === true) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, [dispatch])

  useEffect(() => {
    // if user is not logged in then it will redirect to the login page.
    if (![ROUTES.login, ROUTES.home].includes(router.pathname) && isLogin === false) {
      router.push(ROUTES.login);
    }
  }, [isLogin, router])

  return (
    <Layout>
      <CustomAlert />
      <Header />
      {children}
      <Footer />
    </Layout>
  )
}

export default LayoutComponent;