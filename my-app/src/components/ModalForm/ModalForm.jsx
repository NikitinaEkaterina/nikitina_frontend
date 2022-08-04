/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { registrationRequested, loginRequested } from '../../redux/actions';

// const SignupSchema = Yup.object().shape({
//   username: Yup.string()
//     .required('Required'),
//   email: Yup.string().email('Invalid email')
//     .required('Required'),
//   password: Yup.string().min(6, 'Too Short!').required('Required'),
// });

export default function SignupForm() {
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
      {isAuth
      && (
      <>
        <p htmlFor="username">Your Name</p>
        <input
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
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <p htmlFor="email">Your Password</p>
      <input
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
