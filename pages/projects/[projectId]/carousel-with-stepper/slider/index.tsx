import Slider, { Settings } from "react-slick";
import { sliderStyles } from "./styles";
import { Box } from "@mui/material";
import { RefObject } from "react";

interface ImagesSliderProps {
    imagesPath: string[];
    sliderRef: RefObject<Slider>;
}

const ImagesSlider = ({ imagesPath, sliderRef }: ImagesSliderProps) => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} ref={sliderRef}>
            {imagesPath.map((imagePath) => (
                <Box
                    component="img"
                    sx={sliderStyles}
                    src={imagePath}
                    key={imagePath}
                />
            ))}
        </Slider>
    );
};

export default ImagesSlider;
