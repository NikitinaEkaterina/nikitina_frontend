import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { getUserRequested } from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';
import NewsCard from '../../components/NewsCard/NewsCard';

import './UserPage.css';

function UserPage() {
  const { id: userId } = useParams();
  const dispatch = useDispatch();
  const userNews = useSelector((state) => state.user.userNews);
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (userId) {
      dispatch(getUserRequested(userId));
    }
  }, [dispatch, userId]);

  if (error) {
    return (
      <Alert severity="error">
        {error}
      </Alert>
    );
  }
  return (
    <>
      <Typography className="main">Страница пользователя</Typography>
      {isLoading && <CircularProgress />}
      {!isLoading && user && (
        <div className="cardUser">
          <UserCard
            image={user.avatar}
            username={user.username}
            email={user.email}
          />
        </div>
      )}
      <div className="userPosts">
        {!isLoading && (!userNews?.length
          ? <Alert severity="info">Новостей нет</Alert>
          : userNews.map(({
            title,
            tag,
            author,
            text,
            image,
            id,
          }) => (
            <NewsCard
              title={title}
              tag={tag}
              author={author}
              text={text}
              image={image}
              key={id}
              userId={id}
            />
          )))}
      </div>
    </>
  );
}

export default memo(UserPage);
