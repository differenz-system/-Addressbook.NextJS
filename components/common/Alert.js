import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import { removeAlert } from '../../redux/actions/commonAction';
import { AlertSection } from '../ui';

const CustomAlert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.common.alert)

  useEffect(() => {
    // set timeout for the alert(default time is 5 sec) 
    let timeout;
    if (alert.timeout) {
      timeout = setTimeout(() => {
        dispatch(removeAlert())
      }, alert.timeout);
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [alert, dispatch])

  return (
    <>
      {
        alert.isOpen &&
        <AlertSection>
          <Alert
            color={alert.color}
            isOpen={alert.isOpen}
            toggle={() => dispatch(removeAlert())}
          >
            {alert.message}
          </Alert>
        </AlertSection>
      }
    </>
  )
}

export default CustomAlert