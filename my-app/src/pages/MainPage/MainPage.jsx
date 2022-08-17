import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { getNewsRequest } from '../../redux/actions';
import Card from '../../components/NewsCard/NewsCard';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const isLoading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  if (error) {
    return (
      <Alert severity="error">
        {error}
      </Alert>
    );
  }
  return (
    <>
      <Typography className="main">Главная страница</Typography>
      <div className="post">
        {isLoading && <CircularProgress />}
        {!isLoading && (!news.length
          ? <Alert severity="info">Новостей нет</Alert>
          : news.map(({
            title,
            tag,
            author,
            text,
            image,
            id,
            author_id: userId,
          }) => (
            <Card
              title={title}
              tag={tag}
              author={author}
              text={text}
              image={image}
              key={id}
              userId={userId}
            />
          )))}
      </div>
    </>
  );
}

export default memo(MainPage);
