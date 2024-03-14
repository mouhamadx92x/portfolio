import { useState, useRef } from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselWithStepperMainBoxStyles } from "./styles";
import ImagesSlider from "./slider";
import Stepper from "./mobil-stepper";

interface CarouselWithStepperProps {
    imagesPath: string[];
}

const CarouselWithStepper = ({ imagesPath }: CarouselWithStepperProps) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imagesPath.length;

    const sliderRef = useRef<Slider>(null);

    const slider = sliderRef.current;

    const handleNext = () => {
        const slider = sliderRef.current;

        if (slider) {
            slider.slickNext();
            setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
        }
    };

    const handleBack = () => {
        const slider = sliderRef.current;

        if (slider) {
            slider.slickPrev();
            setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
        }
    };

    return (
        <Box sx={carouselWithStepperMainBoxStyles}>
            <ImagesSlider imagesPath={imagesPath} sliderRef={sliderRef} />
            <Stepper
                maxSteps={maxSteps}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </Box>
    );
};

export default CarouselWithStepper;
