import * as React from "react";
import { MobileStepper, Box, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (next) => setActiveStep(next),
    };

    const sliderRef = React.useRef<Slider>(null);

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    const handleBack = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {images.map((step) => (
                    <div key={step.label}>
                        <Box
                            component="img"
                            sx={{
                                height: 255,
                                display: "block",
                                maxWidth: 400,
                                overflow: "hidden",
                                width: "100%",
                            }}
                            src={step.imgPath}
                            alt={step.label}
                        />
                    </div>
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
                    >
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </div>
    );
};

export default CarouselWithStepper;
