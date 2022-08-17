import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayOf, number, string } from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function NewsCard({
  title,
  author,
  text,
  image,
  tag,
  userId,
}) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`users/${userId}`, { replace: true });
  };

  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography onClick={handleSubmit}>
            {author}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
          <Typography>
            {tag}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

NewsCard.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  text: string.isRequired,
  image: string,
  userId: number.isRequired,
  tag: arrayOf(string).isRequired,
};

NewsCard.defaultProps = {
  image: null,
};

export default memo(NewsCard);
