import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
const Slider = ({ images, onImageClick,slidesPerView }) => {
  const spaceBetween = 0; // Adjust this value as needed

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView || 1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: `${image.slideWidth || 70}%`, // Customizable SwiperSlide width
            marginRight: index === images.length - 1 ? '0' : `${spaceBetween}%`,
          }}
        >
        <Box p={1}>
            <img
                src={image.imagePath}
                alt={image.imagePath}
                onClick={() => onImageClick(index)}
                style={{
                width: '100%', // Image width is 100%
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer',
                }}
            />
        </Box>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
