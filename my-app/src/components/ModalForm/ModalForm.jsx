import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';

import { registrationRequested, loginRequested } from '../../redux/actions';

import './ModalForm.css';

function SignupForm() {
  const error = useSelector((state) => state.auth.authError);
  const modalType = useSelector((state) => state.auth.modalType);
  const isAuth = modalType === 'signup';
  const dispatch = useDispatch();

  const onClick = (values) => {
    const currentAction = isAuth
      ? registrationRequested(values)
      : loginRequested(values);
    dispatch(currentAction);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => onClick(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="authError">
        {error}
      </div>
      {isAuth
      && (
      <>
        <p htmlFor="username">Your Name</p>
        <TextField
          required
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </>
      )}
      <br />
      <p htmlFor="email">Your Email</p>
      <TextField
        required
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <p htmlFor="email">Your Password</p>
      <TextField
        required
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default memo(SignupForm);
