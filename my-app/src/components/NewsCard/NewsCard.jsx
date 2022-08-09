import React, { memo } from 'react';
import { arrayOf, string } from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './NewsCard.css';

function NewsCard({
  title,
  author,
  text,
  image,
  tag,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography>
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
  tag: arrayOf(string).isRequired,
};

NewsCard.defaultProps = {
  image: null,
};

export default memo(NewsCard);
