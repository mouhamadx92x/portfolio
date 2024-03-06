import { useState, useRef } from "react";
import { MobileStepper, Box, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    MobileStepperButtonStyles,
    MobileStepperStyles,
    carouselWithStepperMainBoxStyles,
    sliderStyles,
} from "./styles";
import {
    PROJECT_DETAILS_SLIDER_BUTTON_LABEL_BACK,
    PROJECT_DETAILS_SLIDER_BUTTON_LABEL_NEXT,
} from "../../../../public/constants/text";

const images = [
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        label: "Bird",
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
];

const CarouselWithStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const sliderRef = useRef<Slider>(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
        }
    };

    const handleBack = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
            setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
        }
    };

    return (
        <Box sx={carouselWithStepperMainBoxStyles}>
            <Slider ref={sliderRef} {...settings}>
                {images.map((step) => (
                    <Box
                        key={step.label}
                        component="img"
                        sx={sliderStyles}
                        src={step.imgPath}
                        alt={step.label}
                    />
                ))}
            </Slider>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={MobileStepperButtonStyles}
                    >
                        {PROJECT_DETAILS_SLIDER_BUTTON_LABEL_NEXT}
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={MobileStepperButtonStyles}
                    >
                        <KeyboardArrowLeft />
                        {PROJECT_DETAILS_SLIDER_BUTTON_LABEL_BACK}
                    </Button>
                }
                sx={MobileStepperStyles}
            />
        </Box>
    );
};

export default CarouselWithStepper;
