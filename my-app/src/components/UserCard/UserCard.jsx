import React, { memo } from 'react';
import { string } from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

function UserCard({
  image,
  username,
  email,
}) {
  const userId = useSelector((state) => state.auth.userId);
  const authorId = useSelector((state) => state.users.user.id);
  const isMyPage = userId === authorId;

  return (
    (
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
          />
          <CardContent>
            <Typography>
              {username}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {email}
            </Typography>
            {isMyPage
           && (
           <>
             <Button>Добавить новую запись</Button>
             <Button>Редактировать профиль</Button>
           </>
           )}
          </CardContent>
        </CardActionArea>
      </Card>
    )
  );
}

UserCard.propTypes = {
  username: string.isRequired,
  email: string.isRequired,
  image: string,
};

UserCard.defaultProps = {
  image: null,
};

export default memo(UserCard);
