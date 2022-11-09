import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import IMG_1 from "../../icons/picture/DE0A6209.jpg";
import IMG_2 from "../../icons/picture/DE0A6232.jpg";
// import IMG_3 from "../../icons/picture/DE0A6330.jpg";
import IMG_4 from "../../icons/picture/DE0A6721.jpg";
// import IMG_5 from "../../icons/picture/DE0A6833.jpg";
import IMG_6 from "../../icons/picture/DE0A6975.jpg";
import IMG_7 from "../../icons/picture/DE0A7082.jpg";
import IMG_8 from "../../icons/picture/DE0A7179.jpg";
// import IMG_9 from "../../icons/picture/DE0A7257.jpg";
// import IMG_10 from "../../icons/picture/DE0A7551.jpg";
import {
  ImageView,
  AlbumPosition
} from './Album.styled';

const Album = () => {
  return (
    <AlbumPosition>
      <Carousel
        width={'99vw'}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay
        autoFocus
      >
        <div>
          <ImageView src={IMG_2} alt="IMG_2"/>
        </div>
        <div>
          <ImageView src={IMG_4} alt="IMG_4"/>
        </div>
        <div>
          <ImageView src={IMG_6} alt="IMG_6"/>
        </div>
        <div>
          <ImageView src={IMG_7} alt="IMG_7"/>
        </div>
        <div>
          <ImageView src={IMG_8} alt="IMG_8"/>
        </div>

      </Carousel>
    </AlbumPosition>
  );
};

export default Album;