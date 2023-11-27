import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import { styled } from '@mui/system';

const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: 'auto',
  color: '#959ea8', // 默认颜色
  fontSize: '14px',
  background: '#1B1B1F',
  display: 'flex',
  alignItems: 'center', // 让文本和图像垂直居中

  // 嵌套 img 类型的样式
  img: {
    width: '18.019px',
    height: '16.869px',
    flexShrink: 0,
    marginRight: '2px',
  },
  '&.MuiTabs-indicator': {
    backgroundColor: '#00FF18', // 你希望的颜色
    height:'2px'
  },
  '&.Mui-selected': {
    background: 'linear-gradient(180deg, #2C2F34 0%, #2C3532 61.98%, #2C4130 100%)',
    color: '#fff',
  },
}));

const HorizontalScrollTabs = ({ children, labels }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        scrollButtons="auto"
      >
        {React.Children.map(children, (child, index) => (
          <StyledTab label={labels[index]} />
        ))}
      </Tabs>

      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ overflowX: 'auto', justifyContent: 'flex-start',marginTop:'10px' }}
      >
        {React.Children.map(children, (child, index) => (
          <Box>{child}</Box>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default HorizontalScrollTabs;
