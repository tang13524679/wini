import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SwipeableViews from 'react-swipeable-views';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/system';

const GameList = ({ games, isAuthenticated, openGameWindow, gamescols,rowHeight}) => {
  const itemsPerRow = typeof window !== 'undefined' && window.innerWidth > 600 ? 3 : 4;
  const imageListHeight = rowHeight ? rowHeight*2 :300
  const handleGameClick = (gameId) => {
    if (isAuthenticated) {
      openGameWindow(gameId);
    } else {
      console.log('用户未登录');
    }
  };

  const StyledImageBox = styled(Box)(({ theme }) => ({
    width: '60px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  return (
    <SwipeableViews style={{ overflowX: 'auto' }} enableMouseEvents>
        <ImageList sx={{ width: '100%', height: imageListHeight }} cols={gamescols||3} rowHeight={rowHeight||150}>
            {games.map((item) => (
                <ImageListItem key={item.img} onClick={() => handleGameClick(game.id)}>
                    <img
                        srcSet={`${item.imagePath}?w=100&h=150&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.imagePath}?w=100&h=150&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </SwipeableViews>
  );
};

export default GameList;
