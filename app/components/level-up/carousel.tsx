'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const LevelUpCarousel: React.FC<{children: React.ReactNode}> = ({children}) => {
  const responsive = {
    desktop1: {
      breakpoint: { max: 3000, min: 1500 },
      items: 6,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1250 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet4: {
      breakpoint: { max: 1250, min: 1000 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet3: {
      breakpoint: { max: 1000, min: 750 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet2: {
      breakpoint: { max: 750, min: 500 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet1: {
      breakpoint: { max: 500, min: 320 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      centerMode={true}
      autoPlaySpeed={1000}
      keyBoardControl={false}
      transitionDuration={3000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet1", "tablet2", "tablet3", "tablet4", "mobile", "desktop", "desktop1"]}
    //   dotListClass="custom-dot-list-style"
    //   itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
};
