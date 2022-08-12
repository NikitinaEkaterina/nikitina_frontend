import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { getUserRequested, getUserNewsRequested } from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';
import NewsCard from '../../components/NewsCard/NewsCard';

import './UserPage.css';

function UserPage() {
  const { id: userId } = useParams();
  const dispatch = useDispatch();
  const userNews = useSelector((state) => state.users.userNews);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getUserRequested(userId));
    dispatch(getUserNewsRequested(userId));
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
      {!isLoading && (
        <div className="cardUser">
          <UserCard
            image={user.avatar}
            username={user.username}
            email={user.email}
          />
        </div>
      )}
      <div className="userPosts">
        {!isLoading && (!userNews.length
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
            />
          )))}
      </div>
    </>
  );
}

export default memo(UserPage);
