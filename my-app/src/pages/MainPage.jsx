import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewsRequest } from '../redux/actions';
import Card from '../components/Card/Card';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  return (
    <>
      {news.map(({
        title,
        tag,
        author,
        text,
        image,
        id,
      }) => (
        <Card
          title={title}
          tag={tag}
          author={author}
          text={text}
          image={image}
          key={id}
        />
      ))}
    </>
  );
}

export default MainPage;
