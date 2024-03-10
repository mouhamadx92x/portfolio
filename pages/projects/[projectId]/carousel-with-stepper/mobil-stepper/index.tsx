import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, MobileStepper } from "@mui/material";
import { MobileStepperButtonStyles, MobileStepperStyles } from "./styles";
import {
    PROJECT_DETAILS_SLIDER_BUTTON_LABEL_BACK,
    PROJECT_DETAILS_SLIDER_BUTTON_LABEL_NEXT,
} from "../../../../../public/constants/text";

interface StepperProps {
    maxSteps: number;
    activeStep: number;
    handleNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleBack: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Stepper = ({
    maxSteps,
    activeStep,
    handleNext,
    handleBack,
}: StepperProps) => {
    return (
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
    );
};

export default Stepper;
