import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';

import { addNewsRequested } from '../../redux/actions';

function UserNews() {
  const error = useSelector((state) => state.news.error);
  const authUser = useSelector((state) => state.user.user.username);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const tagArray = values.tag.split();
    dispatch(addNewsRequested(values, tagArray));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      tag: [],
      author: authUser,
    },
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        {error}
      </div>

      <p htmlFor="image">Add Picture</p>
      <TextField
        id="image"
        name="image"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.image}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
      />
      <br />
      <p htmlFor="title">Title</p>
      <TextField
        required
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <br />
      <p htmlFor="text">Text</p>
      <TextField
        required
        id="text"
        name="text"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.text}
        error={formik.touched.text && Boolean(formik.errors.text)}
        helperText={formik.touched.text && formik.errors.text}
      />
      <br />
      <p htmlFor="tag">Tag</p>
      <TextField
        required
        id="tag"
        name="tag"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.tag}
        error={formik.touched.tag && Boolean(formik.errors.tag)}
        helperText={formik.touched.tag && formik.errors.tag}
      />
      <br />
      <br />
      <button type="submit">Add News</button>
    </form>
  );
}

export default memo(UserNews);
