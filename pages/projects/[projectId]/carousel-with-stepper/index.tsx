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
import ImagesSlider from "./slider";

interface CarouselWithStepperProps {
    imagesPath: string[];
}

const CarouselWithStepper = ({ imagesPath }: CarouselWithStepperProps) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imagesPath.length;

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
            <ImagesSlider imagesPath={imagesPath} sliderRef={sliderRef} />
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
